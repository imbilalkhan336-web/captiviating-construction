<?php

namespace App\Http\Controllers;

use App\Models\PageSeo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SeoController extends Controller
{
    /**
     * Admin: list every public page with its current SEO meta.
     */
    public function index()
    {
        $pages = collect(PageSeo::PAGES)->map(fn ($config, $slug) => [
            'slug' => $slug,
            'label' => $config['label'],
            'path' => $config['path'],
            'seo' => PageSeo::resolve($slug),
        ])->values();

        return Inertia::render('Admin/SeoManager', ['pages' => $pages]);
    }

    /**
     * Admin: edit a single page's SEO meta.
     */
    public function edit(string $page)
    {
        abort_unless(array_key_exists($page, PageSeo::PAGES), 404);

        $config = PageSeo::PAGES[$page];

        return Inertia::render('Admin/SeoEditor', [
            'page' => $page,
            'label' => $config['label'],
            'path' => $config['path'],
            'seo' => PageSeo::resolve($page),
            'record' => PageSeo::where('page', $page)->first(),
            'defaults' => PageSeo::DEFAULTS[$page] ?? null,
        ]);
    }

    /**
     * Admin: save a page's SEO meta.
     */
    public function update(Request $request, string $page)
    {
        abort_unless(array_key_exists($page, PageSeo::PAGES), 404);

        $validated = $request->validate([
            'title' => ['nullable', 'string', 'max:255'],
            'description' => ['nullable', 'string', 'max:500'],
            'og_title' => ['nullable', 'string', 'max:255'],
            'og_description' => ['nullable', 'string', 'max:500'],
            'og_image' => ['nullable', 'string', 'max:500'],
            'canonical' => ['nullable', 'string', 'max:500'],
            'robots' => ['nullable', 'string', 'max:100'],
        ]);

        $validated['robots'] = $validated['robots'] ?: 'index, follow';

        PageSeo::updateOrCreate(['page' => $page], $validated);

        return redirect()->route('admin.seo')->with('status', 'SEO settings saved.');
    }
}
