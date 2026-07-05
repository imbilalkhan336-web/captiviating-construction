<?php

namespace App\Mail;

use App\Models\Submission;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class SubmissionReceived extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(public Submission $submission) {}

    public function envelope(): Envelope
    {
        $type = $this->submission->form_type === 'schedule' ? 'Schedule Request' : 'Contact Form';

        // Reply directly to the customer when they left an email.
        $replyTo = [];
        if ($this->submission->email) {
            $replyTo[] = new Address($this->submission->email, $this->submission->name ?? '');
        }

        return new Envelope(
            subject: "New {$type}: ".($this->submission->name ?? 'Website Lead'),
            replyTo: $replyTo,
        );
    }

    public function content(): Content
    {
        return new Content(view: 'emails.submission', with: ['s' => $this->submission]);
    }
}
