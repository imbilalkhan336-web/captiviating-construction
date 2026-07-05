<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Support\SiteStructure;
use Illuminate\Http\Response;

class SitemapController extends Controller
{
    /**
     * Generate sitemap.xml covering every public, indexable URL.
     */
    public function index(): Response
    {
        $base = rtrim(config('app.url'), '/');
        $paths = [];

        // Core pages
        foreach (['/', '/about', '/services', '/contact', '/offers', '/resources', '/blog', '/service-areas', '/cost-guides', '/commercial-hvac', '/commercial-plumbing', '/terms', '/privacy'] as $p) {
            $paths[] = $p;
        }

        // Trades, their sub-services, and trade-in-location pages
        $locations = array_keys(SiteStructure::locationLookup());
        foreach (SiteStructure::trades() as $trade => $config) {
            $paths[] = "/{$trade}";
            foreach (array_keys($config['services']) as $service) {
                $paths[] = "/{$trade}/{$service}";
            }
            foreach ($locations as $loc) {
                $paths[] = "/{$trade}/{$loc}";
            }
        }

        // Service-area county hubs + flat city hubs
        foreach ($locations as $loc) {
            $paths[] = "/service-areas/{$loc}";
        }

        // Cost guides
        foreach (array_keys(SiteStructure::costGuides()) as $slug) {
            $paths[] = "/cost-guides/{$slug}";
        }

        // Published blog posts
        foreach (Post::published()->pluck('slug') as $slug) {
            $paths[] = "/blog/{$slug}";
        }

        $paths = array_values(array_unique($paths));

        $xml = '<?xml version="1.0" encoding="UTF-8"?>'."\n";
        $xml .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'."\n";
        foreach ($paths as $path) {
            $loc = htmlspecialchars($base.$path, ENT_XML1);
            $priority = $path === '/' ? '1.0' : '0.7';
            $xml .= "  <url><loc>{$loc}</loc><changefreq>weekly</changefreq><priority>{$priority}</priority></url>\n";
        }
        $xml .= '</urlset>';

        return response($xml, 200, ['Content-Type' => 'application/xml']);
    }
}
