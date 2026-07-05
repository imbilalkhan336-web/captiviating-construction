<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Admin: list all posts (published and drafts) for management.
     */
    public function index()
    {
        return inertia('Admin/BlogManager', [
            'posts' => Post::latest()->get(),
        ]);
    }

    /**
     * Admin: show the full-page editor for creating a new post.
     */
    public function create()
    {
        return Inertia::render('Admin/BlogEditor', [
            'post' => null,
            'tags' => Tag::orderBy('name')->get(),
        ]);
    }

    /**
     * Admin: show the full-page editor for editing an existing post.
     */
    public function edit(Post $post)
    {
        return Inertia::render('Admin/BlogEditor', [
            'post' => $post->load('tags'),
            'tags' => Tag::orderBy('name')->get(),
        ]);
    }

    /**
     * Create a new blog post.
     */
    public function store(Request $request)
    {
        $data = $this->validatePost($request);
        $tagIds = $request->input('tag_ids', []);

        $post = Post::create($data);
        $post->tags()->sync($tagIds);

        return redirect()->route('admin.blog.edit', $post->id)->with('status', 'Post created.');
    }

    /**
     * Update an existing post.
     */
    public function update(Request $request, Post $post)
    {
        $data = $this->validatePost($request, $post);
        $tagIds = $request->input('tag_ids', []);

        $post->update($data);
        $post->tags()->sync($tagIds);

        return redirect()->route('admin.blog.edit', $post->id)->with('status', 'Post updated.');
    }

    /**
     * Delete a post.
     */
    public function destroy(Post $post)
    {
        $post->delete();

        return redirect()->route('admin.blog')->with('status', 'Post deleted.');
    }

    /**
     * Validate post input and resolve the slug + uploaded image.
     */
    private function validatePost(Request $request, ?Post $post = null): array
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'slug' => ['nullable', 'string', 'max:255', 'alpha_dash', Rule::unique('posts', 'slug')->ignore($post?->id)],
            'excerpt' => ['nullable', 'string', 'max:500'],
            'body' => ['nullable', 'string'],
            'image_path' => ['nullable', 'string', 'max:500'],
            'image' => ['nullable', 'image', 'max:5120'], // uploaded file, up to 5 MB
            'is_published' => ['boolean'],
            'tag_ids' => ['nullable', 'array'],
            'tag_ids.*' => ['integer', 'exists:tags,id'],
        ]);

        // Derive the slug from the title when none was supplied.
        if (empty($validated['slug'])) {
            $validated['slug'] = Post::uniqueSlug($validated['title'], $post?->id);
        }

        // If an image file was uploaded, store it and use its public URL.
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('posts', 'public');
            $validated['image_path'] = '/storage/'.$path;
        }

        unset($validated['image']);

        $validated['is_published'] = $request->boolean('is_published');

        return $validated;
    }
}
