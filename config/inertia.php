<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Server Side Rendering
    |--------------------------------------------------------------------------
    |
    | These options configure if and how Inertia uses Server Side Rendering
    | to pre-render the initial visits made to the application's pages.
    |
    | This is what lets search engines and social-media scrapers (Facebook,
    | WhatsApp, LinkedIn, X) see real HTML + meta/OG tags on first load.
    |
    | `enabled` is driven by INERTIA_SSR_ENABLED so SSR can be switched off
    | in production without a redeploy if the Node SSR process ever has an
    | issue — the site then falls back to normal client-side rendering.
    |
    | https://inertiajs.com/server-side-rendering
    |
    */

    'ssr' => [
        'enabled' => env('INERTIA_SSR_ENABLED', true),
        'url' => env('INERTIA_SSR_URL', 'http://127.0.0.1:13714'),
    ],

    /*
    |--------------------------------------------------------------------------
    | Testing
    |--------------------------------------------------------------------------
    |
    | The values described here are used to locate Inertia components on the
    | filesystem. For instance, when using `assertInertia`, the assertion
    | attempts to locate the component as a file relative to any of the
    | paths AND with any of the extensions specified here.
    |
    */

    'testing' => [
        'ensure_pages_exist' => true,
        'page_paths' => [
            resource_path('js/Pages'),
        ],
        'page_extensions' => [
            'js',
            'jsx',
            'ts',
            'tsx',
            'vue',
        ],
    ],

];
