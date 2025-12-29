import { appStore } from '../../js/store.js';

export const Navbar = {
    async init() {
        const container = document.getElementById('navbar-container');
        if (!container) return;

        const response = await fetch('/src/components/navbar/page.html');
        const html = await response.text();
        container.innerHTML = html;

        this.update();
        appStore.subscribe(() => this.update());

        // Header Scroll Effect
        window.addEventListener('scroll', () => {
            const header = container.querySelector('header');
            if (window.scrollY > 20) {
                header.classList.add('py-2');
            } else {
                header.classList.remove('py-2');
            }
        });
    },

    update() {
        const { user, cart } = appStore.getState();
        const badge = document.getElementById('cart-badge');
        if (badge) badge.innerText = cart.reduce((acc, item) => acc + item.quantity, 0);

        const authContainer = document.getElementById('auth-nav-container');
        if (authContainer) {
            if (user) {
                authContainer.innerHTML = `
                    <a href="/profile" data-link class="flex items-center gap-3 p-1.5 pr-4 bg-muted rounded-2xl hover:bg-primary/5 transition-all group">
                        <div class="w-10 h-10 rounded-[1rem] bg-primary flex items-center justify-center text-white font-black shadow-lg">
                            ${user.avatar ? `<img src="${user.avatar}" class="w-full h-full object-cover rounded-[1rem]">` : user.name.charAt(0).toUpperCase()}
                        </div>
                        <span class="text-sm font-black hidden lg:block text-foreground">${user.name}</span>
                    </a>
                `;
            } else {
                authContainer.innerHTML = `
                    <a href="/login" data-link class="bg-primary text-white px-8 py-3 rounded-2xl font-black uppercase tracking-widest text-xs shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                        Login
                    </a>
                `;
            }
        }
    }
};
