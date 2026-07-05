<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContentBlock extends Model
{
    /**
     * Pages that have editable content blocks (slug => display label).
     */
    public const PAGES = [
        'heating' => 'Heating',
        'cooling' => 'Cooling',
        'plumbing' => 'Plumbing',
        'electrical' => 'Electrical',
        'indoor-air-quality' => 'Indoor Air Quality',
        'drains' => 'Drains',
        'commercial' => 'Commercial',
    ];

    protected $fillable = [
        'page',
        'type',
        'heading',
        'body',
        'image_path',
        'position',
    ];

    protected $casts = [
        'position' => 'integer',
    ];

    /**
     * Blocks for a given page, in display order.
     */
    public function scopeForPage($query, string $page)
    {
        return $query->where('page', $page)->orderBy('position');
    }

    public function tags()
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }
}
