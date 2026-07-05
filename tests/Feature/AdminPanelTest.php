<?php

namespace Tests\Feature;

use App\Models\ContentBlock;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class AdminPanelTest extends TestCase
{
    use RefreshDatabase;

    public function test_guests_are_redirected_from_admin(): void
    {
        $this->get('/admin')->assertRedirect('/login');
    }

    public function test_non_admins_are_forbidden(): void
    {
        $user = User::factory()->create(['is_admin' => false]);

        $this->actingAs($user)->get('/admin')->assertForbidden();
    }

    public function test_admin_can_view_dashboard(): void
    {
        $admin = User::factory()->create(['is_admin' => true]);

        $this->actingAs($admin)
            ->get('/admin')
            ->assertOk()
            ->assertInertia(fn (AssertableInertia $page) => $page->component('Admin/Dashboard')->has('pages', 7));
    }

    public function test_admin_can_open_page_editor(): void
    {
        $admin = User::factory()->create(['is_admin' => true]);

        $this->actingAs($admin)
            ->get('/admin/pages/heating')
            ->assertOk()
            ->assertInertia(fn (AssertableInertia $page) => $page->component('Admin/PageEditor')->where('page', 'heating'));
    }

    public function test_unknown_page_returns_404(): void
    {
        $admin = User::factory()->create(['is_admin' => true]);

        $this->actingAs($admin)->get('/admin/pages/nonsense')->assertNotFound();
    }

    public function test_admin_can_create_update_delete_blocks(): void
    {
        $admin = User::factory()->create(['is_admin' => true]);

        $this->actingAs($admin)->post('/content-blocks', [
            'page' => 'heating',
            'type' => 'section',
            'heading' => 'Test Section',
            'body' => 'Hello world.',
        ])->assertRedirect();

        $block = ContentBlock::where('page', 'heating')->first();
        $this->assertSame('Test Section', $block->heading);

        $this->actingAs($admin)->put("/content-blocks/{$block->id}", [
            'page' => 'heating',
            'type' => 'section',
            'heading' => 'Updated',
            'body' => 'Changed.',
        ])->assertRedirect();

        $this->assertSame('Updated', $block->fresh()->heading);

        $this->actingAs($admin)->delete("/content-blocks/{$block->id}")->assertRedirect();
        $this->assertNull(ContentBlock::find($block->id));
    }

    public function test_non_admin_cannot_mutate_blocks(): void
    {
        $user = User::factory()->create(['is_admin' => false]);

        $this->actingAs($user)->post('/content-blocks', [
            'page' => 'heating',
            'type' => 'section',
            'heading' => 'Nope',
        ])->assertForbidden();
    }
}
