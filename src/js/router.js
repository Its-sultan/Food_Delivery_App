import { appStore } from './store.js';

const routes = {
    '/': 'home',
    '/restaurants': 'restaurants',
    '/restaurants/:id': 'detail',
    '/cart': 'cart',
    '/checkout': 'checkout',
    '/login': 'login',
    '/signup': 'signup',
    '/profile': 'profile',
    '/orders': 'orders',
    '/tracking': 'tracking',
    '/settings': 'settings'
};

class Router {
    constructor() {
        this.appElement = document.getElementById('app');
        this.pageStyles = {};

        window.addEventListener('hashchange', () => this.handleRoute());
        document.body.addEventListener('click', e => {
            const link = e.target.closest('[data-link]');
            if (link) {
                e.preventDefault();
                this.navigate(link.getAttribute('href'));
            }
        });
    }

    async navigate(url) {
        window.location.hash = url;
    }

    async handleRoute() {
        const path = window.location.hash.substring(1) || '/';

        // Updates store
        appStore.setState({ currentRoute: path });
        let matchedRoute = null;
        let params = {};

        // Match routes with params
        for (const route in routes) {
            const pattern = new RegExp('^' + route.replace(/:[^\s/]+/g, '([\\s\\w-]+)') + '$');
            const match = path.match(pattern);
            if (match) {
                matchedRoute = routes[route];
                const paramNames = route.match(/:[^\s/]+/g);
                if (paramNames) {
                    paramNames.forEach((name, index) => {
                        params[name.substring(1)] = match[index + 1];
                    });
                }
                break;
            }
        }

        if (!matchedRoute) {
            this.appElement.innerHTML = '<h1>404 Not Found</h1>';
            return;
        }

        try {
            // Fetching HTML Template
            const htmlPath = `/src/pages/${matchedRoute}/page.html`;
            const response = await fetch(htmlPath);
            if (!response.ok) throw new Error(`Could not fetch ${htmlPath}`);
            const html = await response.text();

            // Injecting HTML
            this.appElement.innerHTML = html;

            // Loads and Initializes JS Module
            const jsPath = `/src/pages/${matchedRoute}/script.js`;
            const pageModule = await import(jsPath);
            if (pageModule.init) await pageModule.init(params);

            window.scrollTo(0, 0);

        } catch (err) {
            console.error('Error loading page:', err);
            this.appElement.innerHTML = `<div class="container py-20 text-center text-red-500"><h1>Error loading page</h1><p>${err.message}</p></div>`;
        }
    }
}

export const router = new Router();
