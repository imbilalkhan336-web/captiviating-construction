<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $fillable = [
        'name',
        'body',
        'rating',
        'avatar_color',
        'is_published',
    ];

    protected $casts = [
        'rating' => 'integer',
        'is_published' => 'boolean',
    ];

    public function scopePublished($query)
    {
        return $query->where('is_published', true)->latest();
    }

    public function getInitialsAttribute(): string
    {
        return strtoupper(substr($this->name, 0, 1));
    }
}
