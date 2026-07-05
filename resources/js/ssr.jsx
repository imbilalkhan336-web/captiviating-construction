import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import ReactDOMServer from 'react-dom/server';

const appName = process.env.VITE_APP_NAME || 'Guardian Air';

// Server-side render entry. This runs in Node (via `php artisan inertia:start-ssr`)
// to produce the initial HTML for each page. It deliberately does NOT import
// `./bootstrap` or the CSS — those touch `window` and belong only to the client.
createServer((page) =>
    createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
        title: (title) => `${title} - ${appName}`,
        resolve: (name) =>
            resolvePageComponent(
                `./Pages/${name}.jsx`,
                import.meta.glob('./Pages/**/*.jsx'),
            ),
        setup: ({ App, props }) => <App {...props} />,
    }),
);
