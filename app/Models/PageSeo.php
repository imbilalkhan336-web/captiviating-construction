<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PageSeo extends Model
{
    protected $table = 'page_seo';

    protected $fillable = [
        'page',
        'title',
        'description',
        'og_title',
        'og_description',
        'og_image',
        'canonical',
        'robots',
    ];

    /**
     * Public pages whose SEO meta is editable in the admin panel.
     *
     * slug => [label, path]. The path is used as the default canonical URL.
     */
    public const PAGES = [
        'home' => ['label' => 'Home', 'path' => '/'],
        'about' => ['label' => 'About', 'path' => '/about'],
        'services' => ['label' => 'Services', 'path' => '/services'],
        'contact' => ['label' => 'Contact', 'path' => '/contact'],
        'heating' => ['label' => 'Heating', 'path' => '/heating'],
        'cooling' => ['label' => 'Cooling', 'path' => '/cooling'],
        'plumbing' => ['label' => 'Plumbing', 'path' => '/plumbing'],
        'indoor-air-quality' => ['label' => 'Indoor Air Quality', 'path' => '/indoor-air-quality'],
        'drains' => ['label' => 'Drains', 'path' => '/drains'],
        'commercial' => ['label' => 'Commercial', 'path' => '/commercial'],
        'resources' => ['label' => 'Resources', 'path' => '/resources'],
        'offers' => ['label' => 'Offers', 'path' => '/offers'],
        'blog' => ['label' => 'Blog', 'path' => '/blog'],
    ];

    /**
     * Sensible default meta for each page, used when no DB override exists.
     */
    public const DEFAULTS = [
        'home' => [
            'title' => 'NJ Custom Home Builders | Captivating Construction Group',
            'description' => 'Captivating Construction Group is a full-service New Jersey custom home builder with over 30 years of experience — new home construction, renovations, additions, and basement finishing built with luxury craftsmanship.',
        ],
        'about' => [
            'title' => "About Guardian Air — NJ's Trusted HVAC & Plumbing Pros",
            'description' => 'Locally owned Guardian Air delivers honest HVAC, plumbing, and drain service across Monmouth, Middlesex, and Ocean counties — licensed, insured, no upsells.',
        ],
        'services' => [
            'title' => 'Our Services — HVAC, Plumbing & Drains NJ | Guardian Air',
            'description' => 'Heating, cooling, plumbing, drains, indoor air quality, and commercial service across New Jersey — licensed technicians, upfront pricing, and same-day response.',
        ],
        'contact' => [
            'title' => 'Contact Guardian Air | Schedule HVAC & Plumbing Service',
            'description' => 'Get in touch with Guardian Air to schedule heating, cooling, or plumbing service across Monmouth, Middlesex, and Ocean counties, NJ. Fast, friendly, 24/7.',
        ],
        'heating' => [
            'title' => 'Furnace Repair & Heating Services in NJ | Guardian Air',
            'description' => 'Need furnace repair in NJ? Guardian Air offers same-day, licensed & insured heating repair across Monmouth, Middlesex & Ocean counties. Call today!',
        ],
        'cooling' => [
            'title' => 'AC Repair & Air Conditioning Services in NJ | Guardian Air',
            'description' => 'Need AC repair in NJ? Guardian Air delivers same-day, licensed & insured air conditioning repair across Monmouth, Middlesex & Ocean counties. Call now!',
        ],
        'plumbing' => [
            'title' => 'Licensed Plumber NJ — 24/7 Plumbing Service | Guardian Air',
            'description' => 'Need a licensed plumber in NJ? Guardian Air offers 24/7 insured plumbing repair across Monmouth, Middlesex & Ocean counties. Call now for fast service!',
        ],
        'indoor-air-quality' => [
            'title' => 'Air Quality Testing & IAQ Solutions in NJ | Guardian Air',
            'description' => "Worried about your home's air? Guardian Air provides licensed indoor air quality testing across Monmouth, Middlesex & Ocean counties, NJ. Call today!",
        ],
        'drains' => [
            'title' => 'Drain Cleaning & Sewer Services in NJ | Guardian Air',
            'description' => 'Need drain cleaning in NJ? Guardian Air offers licensed, insured drain & sewer service across Monmouth, Middlesex & Ocean counties. Call today!',
        ],
        'commercial' => [
            'title' => 'Commercial HVAC Services in NJ | Guardian Air',
            'description' => 'Commercial HVAC in NJ — Guardian Air keeps offices, restaurants & retail comfortable across Monmouth, Middlesex & Ocean counties. Licensed & insured — call!',
        ],
        'resources' => [
            'title' => 'HVAC & Plumbing Resources | Guardian Air',
            'description' => 'Helpful guides, tips, and resources to keep your home heating, cooling, and plumbing systems running their best — from the Guardian Air team in New Jersey.',
        ],
        'offers' => [
            'title' => 'HVAC & Plumbing Specials & Coupons NJ | Guardian Air',
            'description' => 'HVAC coupons in NJ — current Guardian Air specials on heating, cooling & plumbing across Monmouth, Middlesex & Ocean counties. Licensed & insured. Save now!',
        ],
        'blog' => [
            'title' => 'HVAC, Plumbing & Home Comfort Blog | Guardian Air',
            'description' => 'HVAC tips for NJ homeowners — heating, cooling, plumbing, and indoor air quality guides from the licensed Guardian Air team in central New Jersey.',
        ],
    ];

    /**
     * Resolve the SEO meta for a page: DB overrides merged over defaults.
     */
    public static function resolve(string $page): array
    {
        $config = self::PAGES[$page] ?? ['label' => $page, 'path' => '/'.$page];
        $defaults = self::DEFAULTS[$page] ?? ['title' => null, 'description' => null];
        $record = self::where('page', $page)->first();

        $title = $record?->title ?: ($defaults['title'] ?? null);
        $description = $record?->description ?: ($defaults['description'] ?? null);

        return [
            'page' => $page,
            'title' => $title,
            'description' => $description,
            'og_title' => $record?->og_title ?: $title,
            'og_description' => $record?->og_description ?: $description,
            'og_image' => $record?->og_image ?: null,
            'canonical' => $record?->canonical ?: $config['path'],
            'robots' => $record?->robots ?: 'index, follow',
        ];
    }
}
