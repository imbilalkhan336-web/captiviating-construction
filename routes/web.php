<?php

use App\Http\Controllers\ContentBlockController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\SeoController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\SubmissionController;
use App\Models\ContentBlock;
use App\Models\PageSeo;
use App\Models\Post;
use App\Models\Review;
use App\Models\Tag;
use App\Support\SiteStructure;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

$getReviews = fn () => Review::published()->latest()->get();
$seo = fn (string $page) => PageSeo::resolve($page);

// Scans public/image/gellory and returns web URLs for the project photos.
// Skips "(1)"/"(2)" duplicate exports. Pass a limit for a preview subset.
$galleryImages = function (?int $limit = null) {
    $dir = public_path('image/gellory');
    if (! is_dir($dir)) {
        return [];
    }

    $files = collect(scandir($dir))
        ->filter(fn ($f) => preg_match('/\.webp$/i', $f))
        ->reject(fn ($f) => preg_match('/\(\d+\)/', $f))
        ->sort(SORT_NATURAL | SORT_FLAG_CASE)
        ->map(fn ($f) => '/image/gellory/'.rawurlencode($f))
        ->values();

    return ($limit ? $files->take($limit) : $files)->values()->all();
};

Route::get('/', function () use ($getReviews, $seo, $galleryImages) {
    return Inertia::render('Home', [
        'reviews' => $getReviews(),
        'posts' => \App\Models\Post::latest()->take(3)->get(['title', 'slug', 'excerpt', 'image_path', 'created_at']),
        'seo' => $seo('home'),
        'gallery' => $galleryImages(8),
    ]);
});

Route::get('/portfolio', function () use ($getReviews, $seo, $galleryImages) {
    return Inertia::render('Portfolio', [
        'reviews' => $getReviews(),
        'seo' => $seo('portfolio'),
        'gallery' => $galleryImages(),
    ]);
})->name('portfolio');

Route::get('/free-3d-design', function () use ($getReviews, $seo, $galleryImages) {
    return Inertia::render('Free3dDesign', [
        'reviews' => $getReviews(),
        'seo' => $seo('free-3d-design'),
        'gallery' => $galleryImages(12),
    ]);
})->name('free-3d-design');

Route::get('/about', function () use ($getReviews, $seo) {
    return Inertia::render('About', ['reviews' => $getReviews(), 'seo' => $seo('about')]);
})->name('about');

Route::get('/services', function () use ($getReviews, $seo) {
    return Inertia::render('Services', ['reviews' => $getReviews(), 'seo' => $seo('services')]);
})->name('services');

// Individual service detail pages (data-driven ServiceDetail component).
Route::get('/services/{slug}', function (string $slug) use ($getReviews, $seo) {
    return Inertia::render('ServiceDetail', [
        'slug' => $slug,
        'reviews' => $getReviews(),
        'seo' => $seo('service-'.$slug),
    ]);
})
    ->where('slug', 'build-on-your-lot-in-nj|nj-kitchen-renovations|luxury-home-builder-nj|full-home-remodel-new-construction-nj|basement-services-nj|additions')
    ->name('service-detail');

Route::get('/test', function () use ($getReviews) {
    return Inertia::render('Test', ['reviews' => $getReviews()]);
})->name('test');

Route::get('/contact', function () use ($getReviews, $seo) {
    return Inertia::render('Contact', ['reviews' => $getReviews(), 'seo' => $seo('contact')]);
})->name('contact');

Route::get('/faqs', function () use ($getReviews, $seo) {
    return Inertia::render('Faqs', ['reviews' => $getReviews(), 'seo' => $seo('faqs')]);
})->name('faqs');

Route::post('/submissions', [SubmissionController::class, 'store'])->name('submissions.store');

Route::get('/heating', function () use ($getReviews, $seo) {
    return Inertia::render('Heating', [
        'blocks' => ContentBlock::forPage('heating')->with('tags')->get(),
        'tags' => Tag::orderBy('name')->get(),
        'reviews' => $getReviews(),
        'seo' => $seo('heating'),
    ]);
})->name('heating');

Route::get('/cooling', function () use ($getReviews, $seo) {
    return Inertia::render('Cooling', [
        'blocks' => ContentBlock::forPage('cooling')->with('tags')->get(),
        'tags' => Tag::orderBy('name')->get(),
        'reviews' => $getReviews(),
        'seo' => $seo('cooling'),
    ]);
})->name('cooling');

Route::get('/plumbing', function () use ($getReviews, $seo) {
    return Inertia::render('Plumbing', [
        'blocks' => ContentBlock::forPage('plumbing')->with('tags')->get(),
        'tags' => Tag::orderBy('name')->get(),
        'reviews' => $getReviews(),
        'seo' => $seo('plumbing'),
    ]);
})->name('plumbing');

Route::get('/indoor-air-quality', function () use ($getReviews, $seo) {
    return Inertia::render('AirQuality', [
        'blocks' => ContentBlock::forPage('indoor-air-quality')->with('tags')->get(),
        'tags' => Tag::orderBy('name')->get(),
        'reviews' => $getReviews(),
        'seo' => $seo('indoor-air-quality'),
    ]);
})->name('air-quality');

Route::get('/drains', function () use ($getReviews, $seo) {
    return Inertia::render('Drains', [
        'blocks' => ContentBlock::forPage('drains')->with('tags')->get(),
        'tags' => Tag::orderBy('name')->get(),
        'reviews' => $getReviews(),
        'seo' => $seo('drains'),
    ]);
})->name('drains');

Route::get('/commercial-hvac', function () use ($getReviews, $seo) {
    return Inertia::render('Commercial', [
        'blocks' => ContentBlock::forPage('commercial')->with('tags')->get(),
        'tags' => Tag::orderBy('name')->get(),
        'reviews' => $getReviews(),
        'seo' => $seo('commercial'),
    ]);
})->name('commercial');

// Legacy /commercial path → /commercial-hvac (preserves link equity).
Route::permanentRedirect('/commercial', '/commercial-hvac');

// Standalone commercial plumbing page.
Route::get('/commercial-plumbing', function () use ($getReviews) {
    $service = SiteStructure::commercialPlumbing();
    $siblings = collect(SiteStructure::trades()['commercial-hvac']['services'])
        ->map(fn ($v, $k) => ['slug' => $k, 'name' => $v['name'], 'href' => "/commercial-hvac/{$k}"])
        ->values();

    return Inertia::render('ServiceSubpage', [
        'trade' => ['slug' => 'commercial-hvac', 'label' => 'Commercial HVAC'],
        'service' => $service,
        'siblings' => $siblings,
        'reviews' => $getReviews(),
    ]);
})->name('commercial-plumbing');

Route::get('/blog', function () use ($seo) {
    return Inertia::render('Blog', [
        'posts' => Post::published()->with('tags')->get(),
        'seo' => $seo('blog'),
    ]);
})->name('blog');

Route::get('/blog/{post:slug}', function (Post $post) {
    abort_unless($post->is_published, 404);

    return Inertia::render('BlogShow', [
        'post' => $post->load('tags'),
        'related' => Post::published()->where('id', '!=', $post->id)->with('tags')->take(3)->get(),
    ]);
})->name('blog.show');

// Service areas index — lists every county and its (flat) city hubs.
Route::get('/service-areas', function () use ($getReviews) {
    $counties = collect(SiteStructure::counties())->map(fn ($c) => [
        'slug' => $c['slug'],
        'name' => $c['name'],
        'description' => $c['description'],
        'cities' => collect($c['cities'])->map(fn ($name, $slug) => [
            'slug' => $slug,
            'name' => $name,
            'href' => "/service-areas/{$slug}",
        ])->values(),
    ])->values();

    return Inertia::render('ServiceAreasIndex', ['counties' => $counties, 'reviews' => $getReviews()]);
})->name('service-areas');

// Service-area hub — one route serves both county hubs and flat city hubs.
Route::get('/service-areas/{location}', function (string $location) use ($getReviews) {
    $locations = SiteStructure::locationLookup();
    abort_unless(isset($locations[$location]), 404);
    $loc = $locations[$location];

    // Trades that have a per-location page, linked from the hub.
    $trades = collect(SiteStructure::trades())
        ->map(fn ($t, $slug) => ['slug' => $slug, 'label' => $t['label'], 'href' => "/{$slug}/{$location}"])
        ->values();

    if ($loc['type'] === 'county') {
        $county = SiteStructure::counties()[$location];
        $area = [
            'slug' => $county['slug'],
            'name' => $county['name'],
            'title' => $county['title'],
            'description' => $county['description'],
            'intro' => $county['intro'] ?? [],
            'faqs' => $county['faqs'] ?? [],
            'towns' => array_values($county['cities']),
        ];
        $cities = collect($county['cities'])->map(fn ($name, $slug) => [
            'slug' => $slug,
            'name' => $name,
            'href' => "/service-areas/{$slug}",
        ])->values();

        return Inertia::render('ServiceArea', [
            'area' => $area,
            'cities' => $cities,
            'trades' => $trades,
            'reviews' => $getReviews(),
        ]);
    }

    return Inertia::render('ServiceAreaCity', [
        'city' => [
            'slug' => $loc['slug'],
            'name' => $loc['name'],
            'intro' => SiteStructure::cityContent()[$location] ?? null,
            'faqs' => SiteStructure::cityFaqs()[$location] ?? [],
        ],
        'county' => ['slug' => $loc['county_slug'], 'name' => $loc['county_name']],
        'trades' => $trades,
        'reviews' => $getReviews(),
    ]);
})->name('service-area');

Route::get('/resources', function () use ($getReviews, $seo) {
    return Inertia::render('Resources', ['reviews' => $getReviews(), 'seo' => $seo('resources')]);
})->name('resources');

Route::get('/offers', function () use ($getReviews, $seo) {
    return Inertia::render('Offers', ['reviews' => $getReviews(), 'seo' => $seo('offers')]);
})->name('offers');

// Testimonials (also reachable at /reviews).
Route::get('/testimonials', function () use ($getReviews) {
    return Inertia::render('Testimonials', ['reviews' => $getReviews()]);
})->name('testimonials');
Route::permanentRedirect('/reviews', '/testimonials');

// Careers / Join Our Team.
Route::get('/careers', fn () => Inertia::render('Careers'))->name('careers');

// Legal pages.
Route::get('/terms', fn () => Inertia::render('Terms'))->name('terms');
Route::get('/privacy', fn () => Inertia::render('Privacy'))->name('privacy');

// XML sitemap for search engines.
Route::get('/sitemap.xml', [\App\Http\Controllers\SitemapController::class, 'index'])->name('sitemap');

// Human-readable HTML sitemap.
Route::get('/sitemap', function () {
    $groups = [];

    // One group per trade: overview + sub-services.
    foreach (SiteStructure::trades() as $slug => $t) {
        $links = [['label' => $t['label'].' Overview', 'href' => "/{$slug}"]];
        foreach ($t['services'] as $sub => $s) {
            $links[] = ['label' => $s['name'], 'href' => "/{$slug}/{$sub}"];
        }
        if ($slug === 'commercial-hvac') {
            $links[] = ['label' => 'Commercial Plumbing', 'href' => '/commercial-plumbing'];
        }
        $groups[] = ['title' => $t['label'], 'links' => $links];
    }

    // Service areas: hub + counties + cities.
    $areaLinks = [['label' => 'All Service Areas', 'href' => '/service-areas']];
    foreach (SiteStructure::counties() as $cslug => $c) {
        $areaLinks[] = ['label' => $c['name'], 'href' => "/service-areas/{$cslug}"];
        foreach ($c['cities'] as $citySlug => $name) {
            $areaLinks[] = ['label' => $name, 'href' => "/service-areas/{$citySlug}"];
        }
    }
    $groups[] = ['title' => 'Service Areas', 'links' => $areaLinks];

    // Cost guides.
    $guideLinks = [['label' => 'All Cost Guides', 'href' => '/cost-guides']];
    foreach (SiteStructure::costGuides() as $g => $gd) {
        $guideLinks[] = ['label' => $gd['name'], 'href' => "/cost-guides/{$g}"];
    }
    $groups[] = ['title' => 'Cost Guides', 'links' => $guideLinks];

    // Company & legal.
    $groups[] = ['title' => 'Company', 'links' => [
        ['label' => 'Home', 'href' => '/'],
        ['label' => 'About', 'href' => '/about'],
        ['label' => 'Services', 'href' => '/services'],
        ['label' => 'Blog', 'href' => '/blog'],
        ['label' => 'Offers', 'href' => '/offers'],
        ['label' => 'Testimonials', 'href' => '/testimonials'],
        ['label' => 'Join Our Team', 'href' => '/careers'],
        ['label' => 'Contact', 'href' => '/contact'],
    ]];
    $groups[] = ['title' => 'Legal', 'links' => [
        ['label' => 'Terms & Conditions', 'href' => '/terms'],
        ['label' => 'Privacy Policy', 'href' => '/privacy'],
    ]];

    return Inertia::render('Sitemap', ['groups' => $groups]);
})->name('sitemap.html');

// Cost guides.
Route::get('/cost-guides', function () {
    $guides = collect(SiteStructure::costGuides())->map(fn ($g, $slug) => [
        'slug' => $slug,
        'name' => $g['name'],
        'description' => $g['description'],
        'href' => "/cost-guides/{$slug}",
        'service' => $g['serviceLink'] ?? null,
    ])->values();

    return Inertia::render('CostGuidesIndex', [
        'guides' => $guides,
        'faqs' => SiteStructure::costGuidesHub()['faqs'],
    ]);
})->name('cost-guides');

Route::get('/cost-guides/{slug}', function (string $slug) use ($getReviews) {
    $guides = SiteStructure::costGuides();
    abort_unless(isset($guides[$slug]), 404);

    return Inertia::render('CostGuide', [
        'guide' => array_merge(['slug' => $slug], $guides[$slug]),
        'reviews' => $getReviews(),
    ]);
})->name('cost-guide');

// 301 redirect for the legacy /hvac-commercial URL referenced in older nav/links.
Route::permanentRedirect('/hvac-commercial', '/commercial-hvac');

// Trade sub-pages: /{trade}/{slug} resolves to either a sub-service page
// or a trade-in-location page (county or city). The trade constraint keeps
// this from shadowing other two-segment routes.
Route::get('/{trade}/{slug}', function (string $trade, string $slug) use ($getReviews) {
    $trades = SiteStructure::trades();
    abort_unless(isset($trades[$trade]), 404);
    $t = $trades[$trade];

    // 1) Defined sub-service page.
    if (isset($t['services'][$slug])) {
        $siblings = collect($t['services'])
            ->reject(fn ($v, $k) => $k === $slug)
            ->map(fn ($v, $k) => ['slug' => $k, 'name' => $v['name'], 'href' => "/{$trade}/{$k}"])
            ->values();

        return Inertia::render('ServiceSubpage', [
            'trade' => ['slug' => $trade, 'label' => $t['label']],
            'service' => array_merge(['slug' => $slug], $t['services'][$slug]),
            'siblings' => $siblings,
            'reviews' => $getReviews(),
        ]);
    }

    // 2) Trade-in-location page (county or city).
    $locations = SiteStructure::locationLookup();
    abort_unless(isset($locations[$slug]), 404);
    $loc = $locations[$slug];

    $otherTrades = collect($trades)
        ->reject(fn ($v, $k) => $k === $trade)
        ->map(fn ($v, $k) => ['slug' => $k, 'label' => $v['label'], 'href' => "/{$k}/{$slug}"])
        ->values();

    // Two nearby same-trade location pages (other cities in the same county).
    $county = SiteStructure::counties()[$loc['county_slug']];
    $nearby = collect($county['cities'])
        ->reject(fn ($name, $citySlug) => $citySlug === $slug)
        ->map(fn ($name, $citySlug) => ['slug' => $citySlug, 'name' => $name, 'href' => "/{$trade}/{$citySlug}"])
        ->take(2)
        ->values();

    $info = SiteStructure::tradeLocationInfo()[$trade] ?? ['issues' => []];

    // Hand-written per-location copy beats the templated fallback.
    $custom = SiteStructure::tradeLocationCopy($trade)[$slug] ?? null;

    // Fill the :city / :county placeholders in the per-trade copy.
    $fill = fn (string $s) => str_replace([':city', ':county'], [$loc['name'], $loc['county_name']], $s);

    return Inertia::render('TradeLocation', [
        'trade' => [
            'slug' => $trade,
            'label' => $t['label'],
            'locationName' => $t['locationName'],
            'issues' => $info['issues'],
            'intro' => $custom['intro'] ?? array_map($fill, $info['intro'] ?? []),
            'why' => $custom['why'] ?? array_map($fill, $info['why'] ?? []),
            'hasCustomCopy' => $custom !== null,
        ],
        'location' => $loc,
        'otherTrades' => $otherTrades,
        'nearby' => $nearby,
        'reviews' => $getReviews(),
    ]);
})
    ->where('trade', 'heating|cooling|plumbing|commercial-hvac|indoor-air-quality|drains')
    ->where('slug', '[a-z0-9-]+')
    ->name('trade-subpage');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Private pages — noindex for search engines
Route::middleware(['auth', 'robots'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Admin-only content management
Route::middleware(['auth', 'admin'])->group(function () {
    Route::post('/content-blocks', [ContentBlockController::class, 'store'])->name('content-blocks.store');
    Route::put('/content-blocks/{contentBlock}', [ContentBlockController::class, 'update'])->name('content-blocks.update');
    Route::delete('/content-blocks/{contentBlock}', [ContentBlockController::class, 'destroy'])->name('content-blocks.destroy');
    Route::post('/content-blocks/reorder', [ContentBlockController::class, 'reorder'])->name('content-blocks.reorder');

    // Blog posts
    Route::post('/posts', [PostController::class, 'store'])->name('posts.store');
    Route::put('/posts/{post:id}', [PostController::class, 'update'])->name('posts.update');
    Route::delete('/posts/{post:id}', [PostController::class, 'destroy'])->name('posts.destroy');
});

// Admin panel
Route::middleware(['auth', 'admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/', function () {
        $pages = collect(ContentBlock::PAGES)->map(fn ($label, $slug) => [
            'slug' => $slug,
            'label' => $label,
            'count' => ContentBlock::where('page', $slug)->count(),
        ])->values();

        return Inertia::render('Admin/Dashboard', ['pages' => $pages]);
    })->name('dashboard');

    Route::get('/pages/{page}', function (string $page) {
        abort_unless(array_key_exists($page, ContentBlock::PAGES), 404);

        return Inertia::render('Admin/PageEditor', [
            'page' => $page,
            'label' => ContentBlock::PAGES[$page],
            'blocks' => ContentBlock::forPage($page)->with('tags')->get(),
            'tags' => Tag::orderBy('name')->get(),
        ]);
    })->name('pages.edit');

    // Blog manager — list, create, edit, and delete posts.
    Route::get('/blog', [PostController::class, 'index'])->name('blog');
    Route::get('/blog/create', [PostController::class, 'create'])->name('blog.create');
    Route::get('/blog/{post:id}/edit', [PostController::class, 'edit'])->name('blog.edit');

    // FAQ manager — lists all FAQ blocks for a page with add/edit/delete.
    Route::get('/pages/{page}/faqs', function (string $page) {
        abort_unless(array_key_exists($page, ContentBlock::PAGES), 404);

        return Inertia::render('Admin/FaqManager', [
            'page' => $page,
            'label' => ContentBlock::PAGES[$page],
            'faqs' => ContentBlock::forPage($page)->where('type', 'faq')->get(),
        ]);
    })->name('faqs');

    // Dedicated full-page editor for a single block (section / faq / image).
    Route::get('/pages/{page}/blocks/{contentBlock}/edit', function (string $page, ContentBlock $contentBlock) {
        abort_unless(array_key_exists($page, ContentBlock::PAGES), 404);

        return Inertia::render('Admin/BlockEditor', [
            'page' => $page,
            'label' => ContentBlock::PAGES[$page],
            'block' => $contentBlock->load('tags'),
            'tags' => Tag::orderBy('name')->get(),
        ]);
    })->name('blocks.edit');

    // Submissions manager
    Route::get('/submissions', [SubmissionController::class, 'index'])->name('submissions');
    Route::post('/submissions/{submission}/read', [SubmissionController::class, 'markAsRead'])->name('submissions.read');
    Route::post('/submissions/{submission}/unread', [SubmissionController::class, 'markAsUnread'])->name('submissions.unread');
    Route::delete('/submissions/{submission}', [SubmissionController::class, 'destroy'])->name('submissions.destroy');

    // SEO manager — edit per-page meta (title, description, OG, canonical, robots).
    Route::get('/seo', [SeoController::class, 'index'])->name('seo');
    Route::get('/seo/{page}/edit', [SeoController::class, 'edit'])->name('seo.edit');
    Route::put('/seo/{page}', [SeoController::class, 'update'])->name('seo.update');

    // Global site settings (reviews count, rating, phone).
    Route::get('/settings', [SettingsController::class, 'edit'])->name('settings');
    Route::put('/settings', [SettingsController::class, 'update'])->name('settings.update');
});

// Review manager — accessible to all authenticated users (not just admins)
Route::middleware('auth')->prefix('admin')->name('admin.')->group(function () {
    Route::get('/reviews', [ReviewController::class, 'index'])->name('reviews');
    Route::post('/reviews', [ReviewController::class, 'store'])->name('reviews.store');
    Route::put('/reviews/{review}', [ReviewController::class, 'update'])->name('reviews.update');
    Route::delete('/reviews/{review}', [ReviewController::class, 'destroy'])->name('reviews.destroy');
});

require __DIR__.'/auth.php';
