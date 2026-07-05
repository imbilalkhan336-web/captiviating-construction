<?php

namespace App\Http\Controllers;

use App\Mail\SubmissionReceived;
use App\Models\SiteSetting;
use App\Models\Submission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class SubmissionController extends Controller
{
    /**
     * Store a new submission from the public site.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'form_type' => ['required', 'in:contact,schedule,quote'],
            'name' => ['required', 'string', 'max:255'],
            'email' => ['nullable', 'email', 'max:255'],
            'phone' => ['nullable', 'string', 'max:50'],
            'service' => ['nullable', 'string', 'max:100'],
            'preferred_date' => ['nullable', 'date'],
            'message' => ['nullable', 'string', 'max:5000'],
            'source_page' => ['nullable', 'string', 'max:255'],
        ]);

        $submission = Submission::create($validated);

        // Email the lead to the configured recipient. A mail failure must
        // never break the visitor's submission, so it's wrapped and logged.
        $recipient = SiteSetting::get('notification_email');
        if ($recipient) {
            try {
                Mail::to($recipient)->send(new SubmissionReceived($submission));
            } catch (\Throwable $e) {
                Log::error('Submission notification email failed: '.$e->getMessage());
            }
        }

        return back()->with('success', 'Your submission has been received. We will contact you soon.');
    }

    /**
     * Admin: list all submissions.
     */
    public function index()
    {
        return Inertia::render('Admin/Submissions', [
            'submissions' => Submission::latest()->paginate(20)->through(fn ($s) => [
                'id' => $s->id,
                'form_type' => $s->form_type,
                'name' => $s->name,
                'email' => $s->email,
                'phone' => $s->phone,
                'service' => $s->service,
                'preferred_date' => $s->preferred_date?->toDateString(),
                'message' => $s->message,
                'source_page' => $s->source_page,
                'is_read' => $s->is_read,
                'created_at' => $s->created_at->toDateTimeString(),
            ]),
            'unreadCount' => Submission::unread()->count(),
        ]);
    }

    /**
     * Admin: mark a submission as read.
     */
    public function markAsRead(Submission $submission)
    {
        $submission->update(['is_read' => true]);
        return back()->with('status', 'Marked as read.');
    }

    /**
     * Admin: mark a submission as unread.
     */
    public function markAsUnread(Submission $submission)
    {
        $submission->update(['is_read' => false]);
        return back()->with('status', 'Marked as unread.');
    }

    /**
     * Admin: delete a submission.
     */
    public function destroy(Submission $submission)
    {
        $submission->delete();
        return back()->with('status', 'Submission deleted.');
    }
}
