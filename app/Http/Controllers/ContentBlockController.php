<?php

namespace App\Http\Controllers;

use App\Models\ContentBlock;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class ContentBlockController extends Controller
{
    /**
     * Create a new block, appended to the end of the page.
     */
    public function store(Request $request)
    {
        $data = $this->validateBlock($request);
        $tagIds = $request->input('tag_ids', []);

        $data['position'] = (int) ContentBlock::where('page', $data['page'])->max('position') + 1;

        $block = ContentBlock::create($data);
        $block->tags()->sync($tagIds);

        // When created from the admin panel, jump straight to its edit page so
        // the admin can add images and content right away.
        if ($request->boolean('edit_after_create')) {
            return redirect()->route('admin.blocks.edit', [$block->page, $block]);
        }

        return back();
    }

    /**
     * Update an existing block.
     */
    public function update(Request $request, ContentBlock $contentBlock)
    {
        $data = $this->validateBlock($request);
        $tagIds = $request->input('tag_ids', []);

        $contentBlock->update($data);
        $contentBlock->tags()->sync($tagIds);

        // The dedicated edit page sends where to return to after saving.
        if ($request->filled('return_to')) {
            return redirect($request->input('return_to'))->with('status', 'Changes saved.');
        }

        return back();
    }

    /**
     * Delete a block.
     */
    public function destroy(ContentBlock $contentBlock)
    {
        $contentBlock->delete();

        return back();
    }

    /**
     * Persist a new ordering. Expects an ordered array of block IDs.
     */
    public function reorder(Request $request)
    {
        $validated = $request->validate([
            'ids' => ['required', 'array'],
            'ids.*' => ['integer', 'exists:content_blocks,id'],
        ]);

        foreach ($validated['ids'] as $position => $id) {
            ContentBlock::where('id', $id)->update(['position' => $position]);
        }

        return back();
    }

    private function validateBlock(Request $request): array
    {
        $validated = $request->validate([
            'page' => ['required', 'string', 'max:100'],
            'type' => ['required', Rule::in(['section', 'faq', 'image'])],
            'heading' => ['nullable', 'string', 'max:500'],
            'body' => ['nullable', 'string'],
            'image_path' => ['nullable', 'string', 'max:500'],
            'image' => ['nullable', 'image', 'max:5120'], // uploaded file, up to 5 MB
            'tag_ids' => ['nullable', 'array'],
            'tag_ids.*' => ['integer', 'exists:tags,id'],
        ]);

        // If an image file was uploaded, store it on the public disk and use
        // its public URL as the block's image_path.
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('content-blocks', 'public');
            $validated['image_path'] = '/storage/'.$path;
        }

        // 'image' is the raw upload, not a column — drop it before persisting.
        unset($validated['image']);

        return $validated;
    }
}
