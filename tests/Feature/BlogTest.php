<?php

namespace Tests\Feature;

use App\Models\Post;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class BlogTest extends TestCase
{
    use RefreshDatabase;

    public function test_blog_index_lists_published_posts(): void
    {
        Post::create(['title' => 'Visible Post', 'is_published' => true]);
        Post::create(['title' => 'Hidden Post', 'is_published' => false]);

        $this->get('/blog')
            ->assertOk()
            ->assertInertia(fn (AssertableInertia $page) => $page->component('Blog')->has('posts', 1));
    }

    public function test_published_post_can_be_viewed(): void
    {
        $post = Post::create(['title' => 'My First Post', 'body' => 'Hello.', 'is_published' => true]);

        $this->get("/blog/{$post->slug}")
            ->assertOk()
            ->assertInertia(fn (AssertableInertia $page) => $page->component('BlogShow')->where('post.title', 'My First Post'));
    }

    public function test_unpublished_post_returns_404(): void
    {
        $post = Post::create(['title' => 'Draft', 'is_published' => false]);

        $this->get("/blog/{$post->slug}")->assertNotFound();
    }

    public function test_admin_can_manage_posts(): void
    {
        $admin = User::factory()->create(['is_admin' => true]);

        $this->actingAs($admin)->get('/admin/blog')
            ->assertOk()
            ->assertInertia(fn (AssertableInertia $page) => $page->component('Admin/BlogManager'));

        // Create
        $this->actingAs($admin)->post('/posts', [
            'title' => 'Brand New Post',
            'body' => 'Some content.',
            'is_published' => true,
        ])->assertRedirect(route('admin.blog'));

        $post = Post::where('title', 'Brand New Post')->first();
        $this->assertNotNull($post);
        $this->assertSame('brand-new-post', $post->slug);

        // Update
        $this->actingAs($admin)->put("/posts/{$post->id}", [
            'title' => 'Updated Title',
            'body' => 'Changed.',
            'is_published' => false,
        ])->assertRedirect(route('admin.blog'));

        $this->assertSame('Updated Title', $post->fresh()->title);
        $this->assertFalse($post->fresh()->is_published);

        // Delete
        $this->actingAs($admin)->delete("/posts/{$post->id}")->assertRedirect(route('admin.blog'));
        $this->assertNull(Post::find($post->id));
    }

    public function test_non_admin_cannot_create_posts(): void
    {
        $user = User::factory()->create(['is_admin' => false]);

        $this->actingAs($user)->post('/posts', [
            'title' => 'Nope',
        ])->assertForbidden();
    }
}
