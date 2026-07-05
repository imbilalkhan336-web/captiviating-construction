<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class TagController extends Controller
{
    /**
     * Admin: list all tags for management.
     */
    public function index()
    {
        return inertia('Admin/TagManager', [
            'tags' => Tag::orderBy('name')->get(),
        ]);
    }

    /**
     * Create a new tag.
     */
    public function store(Request $request)
    {
        $data = $this->validateTag($request);

        Tag::create($data);

        return redirect()->route('admin.tags')->with('status', 'Tag created.');
    }

    /**
     * Update an existing tag.
     */
    public function update(Request $request, Tag $tag)
    {
        $data = $this->validateTag($request, $tag);

        $tag->update($data);

        return redirect()->route('admin.tags')->with('status', 'Tag updated.');
    }

    /**
     * Delete a tag.
     */
    public function destroy(Tag $tag)
    {
        $tag->delete();

        return redirect()->route('admin.tags')->with('status', 'Tag deleted.');
    }

    private function validateTag(Request $request, ?Tag $tag = null): array
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'slug' => ['nullable', 'string', 'max:255', 'alpha_dash', Rule::unique('tags', 'slug')->ignore($tag?->id)],
            'image_path' => ['nullable', 'string', 'max:500'],
            'link' => ['nullable', 'string', 'max:500', 'url'],
            'image' => ['nullable', 'image', 'max:5120'],
        ]);

        if (empty($validated['slug']) && ! empty($validated['name'])) {
            $validated['slug'] = Tag::uniqueSlug($validated['name'], $tag?->id);
        }

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('tags', 'public');
            $validated['image_path'] = '/storage/'.$path;
        }

        unset($validated['image']);

        return $validated;
    }
}
