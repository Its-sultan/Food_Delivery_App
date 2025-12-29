import { router } from './js/router.js';
import { Navbar } from './components/navbar/script.js';
import { Footer } from './components/footer/script.js';
import { appStore } from './js/store.js';

async function init() {
    // Initialize Global Components (Template-based)
    await Navbar.init();
    await Footer.init();

    // Start Router
    router.handleRoute();
}

document.addEventListener('DOMContentLoaded', init);
