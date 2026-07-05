<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function index()
    {
        return inertia('Admin/ReviewManager', [
            'reviews' => Review::latest()->get(),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'body' => ['required', 'string'],
            'rating' => ['required', 'integer', 'between:1,5'],
            'avatar_color' => ['nullable', 'string', 'max:50'],
            'is_published' => ['boolean'],
        ]);

        if (empty($validated['avatar_color'])) {
            $validated['avatar_color'] = $this->nextAvatarColor();
        }

        $validated['is_published'] = $request->boolean('is_published', true);

        Review::create($validated);

        return redirect()->route('admin.reviews')->with('status', 'Review added.');
    }

    public function update(Request $request, Review $review)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'body' => ['required', 'string'],
            'rating' => ['required', 'integer', 'between:1,5'],
            'avatar_color' => ['nullable', 'string', 'max:50'],
            'is_published' => ['boolean'],
        ]);

        if (empty($validated['avatar_color'])) {
            $validated['avatar_color'] = $review->avatar_color ?: $this->nextAvatarColor();
        }

        $validated['is_published'] = $request->boolean('is_published', true);

        $review->update($validated);

        return redirect()->route('admin.reviews')->with('status', 'Review updated.');
    }

    public function destroy(Review $review)
    {
        $review->delete();

        return redirect()->route('admin.reviews')->with('status', 'Review deleted.');
    }

    private function nextAvatarColor(): string
    {
        $colors = [
            'bg-emerald-600',
            'bg-emerald-500',
            'bg-rose-600',
            'bg-slate-700',
            'bg-teal-600',
            'bg-indigo-600',
            'bg-orange-500',
            'bg-cyan-600',
            'bg-purple-600',
            'bg-amber-600',
            'bg-pink-600',
            'bg-blue-700',
        ];

        $count = Review::count();

        return $colors[$count % count($colors)];
    }
}
