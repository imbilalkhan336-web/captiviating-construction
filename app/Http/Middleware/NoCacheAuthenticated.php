<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class NoCacheAuthenticated
{
    /**
     * Prevent any shared cache (CDN/proxy) or the browser's back-forward
     * cache from storing pages rendered for a logged-in user.
     *
     * Every Inertia page embeds the shared `auth.user` prop in its HTML, and
     * with SSR that user data is baked into the server response. Without this,
     * a cached authenticated page could be shown to another visitor — the
     * "old / someone else's content sometimes shows" problem. Anonymous
     * responses are left untouched so public pages stay cacheable for SEO.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);

        if ($request->user()) {
            $response->headers->set('Cache-Control', 'no-store, no-cache, private, max-age=0, must-revalidate');
        }

        return $response;
    }
}
