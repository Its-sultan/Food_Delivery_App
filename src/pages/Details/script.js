import { appStore, actions } from '../../js/store.js';
import { MOCK_RESTAURANTS } from '../../js/data.js';

export const init = (params) => {
    const restaurant = MOCK_RESTAURANTS.find(r => r.id === params.id);
    if (!restaurant) return;

    // Inject Restaurant Info
    document.getElementById('res-name').innerText = restaurant.name;
    document.getElementById('res-banner').src = restaurant.banner || restaurant.image;
    document.getElementById('res-rating').innerHTML = `<i class="fa-solid fa-star text-sm"></i> ${restaurant.rating}`;
    document.getElementById('res-tags').innerText = restaurant.tags.join(' • ');

    // Inject Menu
    const menuGrid = document.getElementById('menu-items-grid');
    if (menuGrid) {
        menuGrid.innerHTML = restaurant.menu.map(item => `
            <div class="menu-item flex flex-col sm:flex-row gap-6 p-6 glass rounded-[2.5rem] hover:shadow-xl transition-all">
                <div class="w-full sm:w-40 h-40 rounded-2xl overflow-hidden flex-shrink-0">
                    <img src="${item.image}" class="w-full h-full object-cover">
                </div>
                <div class="flex-1 flex flex-col">
                    <div class="flex justify-between items-start mb-2 text-foreground">
                        <h3 class="text-2xl font-black">${item.name}</h3>
                        <span class="text-2xl font-black text-primary">$${item.price}</span>
                    </div>
                    <p class="text-muted-foreground font-medium text-sm flex-grow mb-6">${item.description}</p>
                    <button 
                        class="add-to-cart-btn bg-primary/10 text-primary font-black py-3 px-8 rounded-xl hover:bg-primary hover:text-white transition-all uppercase tracking-widest text-xs"
                        data-id="${item.id}"
                        data-restaurant-id="${restaurant.id}"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        `).join('');

        menuGrid.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const itemId = e.target.getAttribute('data-id');
                const item = restaurant.menu.find(m => m.id === itemId);
                if (item) actions.addToCart(item, restaurant.id);
            });
        });
    }

    // Side Cart View Logic
    const cartContainer = document.getElementById('side-cart-container');
    const updateSideCart = (state) => {
        if (!cartContainer) return;
        const { cart } = state;
        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

        cartContainer.innerHTML = `
            <h3 class="text-3xl font-black mb-8 flex items-center gap-3 text-foreground">
                <i class="fa-solid fa-cart-shopping text-primary"></i> Your Cart
            </h3>
            ${cart.length === 0 ? `
                <p class="text-muted-foreground font-medium italic">Your bag is empty. Time to fill it with joy!</p>
            ` : `
                <div class="space-y-4 mb-8">
                    ${cart.map(item => `
                        <div class="flex justify-between items-center text-sm font-bold text-foreground">
                            <span>${item.quantity}x ${item.name}</span>
                            <span>$${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    `).join('')}
                    <div class="border-t border-border pt-4 flex justify-between font-black text-xl text-foreground">
                        <span>Total</span>
                        <span class="text-primary">$${total.toFixed(2)}</span>
                    </div>
                </div>
                <a href="/cart" data-link class="block w-full bg-primary text-white text-center font-black py-4 rounded-xl shadow-lg shadow-primary/20 hover:scale-105 transition-all uppercase tracking-widest">
                    Checkout Now
                </a>
            `}
        `;
    };

    appStore.subscribe(updateSideCart);
    updateSideCart(appStore.getState());
};
