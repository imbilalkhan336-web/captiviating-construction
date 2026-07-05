<?php

namespace App\Http\Controllers;

use App\Models\SiteSetting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingsController extends Controller
{
    /**
     * Admin: edit global site settings (reviews count, rating, phone).
     */
    public function edit()
    {
        return Inertia::render('Admin/Settings', [
            'settings' => SiteSetting::map(),
        ]);
    }

    /**
     * Admin: save global site settings.
     */
    public function update(Request $request)
    {
        $validated = $request->validate([
            'reviews_count' => ['nullable', 'string', 'max:20'],
            'reviews_rating' => ['nullable', 'string', 'max:10'],
            'phone' => ['nullable', 'string', 'max:30'],
            'notification_email' => ['nullable', 'email', 'max:255'],
        ]);

        foreach ($validated as $key => $value) {
            SiteSetting::set($key, $value);
        }

        return redirect()->route('admin.settings')->with('status', 'Settings saved.');
    }
}
