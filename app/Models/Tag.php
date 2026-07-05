<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Tag extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'image_path',
        'link',
    ];

    public static function booted(): void
    {
        static::saving(function (Tag $tag) {
            if (empty($tag->slug) && ! empty($tag->name)) {
                $tag->slug = static::uniqueSlug($tag->name, $tag->id);
            }
        });
    }

    public static function uniqueSlug(string $name, ?int $ignoreId = null): string
    {
        $base = Str::slug($name) ?: 'tag';
        $slug = $base;
        $i = 2;

        while (static::where('slug', $slug)->when($ignoreId, fn ($q) => $q->where('id', '!=', $ignoreId))->exists()) {
            $slug = $base.'-'.$i++;
        }

        return $slug;
    }

    public function posts()
    {
        return $this->morphedByMany(Post::class, 'taggable');
    }

    public function contentBlocks()
    {
        return $this->morphedByMany(ContentBlock::class, 'taggable');
    }
}
