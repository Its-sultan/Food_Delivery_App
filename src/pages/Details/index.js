import { appStore, actions } from '../../js/store.js';
import { MOCK_RESTAURANTS } from '../../js/data.js';

export const render = async (params) => {
    const restaurant = MOCK_RESTAURANTS.find(r => r.id === params.id);
    if (!restaurant) return '<div class="container py-20 text-center"><h1>Restaurant Not Found</h1></div>';

    return `
        <div class="detail-page">
            <div class="relative h-[300px] md:h-[450px] w-full overflow-hidden">
                <img src="${restaurant.banner || restaurant.image}" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-transparent"></div>
                
                <div class="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white container">
                    <h1 class="text-5xl md:text-7xl font-black mb-6 tracking-tighter">${restaurant.name}</h1>
                    <div class="flex items-center gap-4">
                        <span class="bg-primary px-4 py-2 rounded-2xl font-bold flex items-center gap-2">
                             <i class="fa-solid fa-star text-sm"></i> ${restaurant.rating}
                        </span>
                        <span class="bg-white/20 backdrop-blur-md px-4 py-2 rounded-2xl font-bold uppercase tracking-widest text-xs border border-white/20">
                            ${restaurant.tags.join(' • ')}
                        </span>
                    </div>
                </div>
            </div>

            <div class="container py-16">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div class="lg:col-span-2 space-y-10">
                        <h2 class="text-4xl font-black mb-10 tracking-tighter">Explore the <span class="text-primary italic">Menu</span></h2>
                        <div class="space-y-6">
                            ${restaurant.menu.map(item => `
                                <div class="menu-item flex flex-col sm:flex-row gap-6 p-6 glass rounded-[2.5rem] hover:shadow-xl transition-all">
                                    <div class="w-full sm:w-40 h-40 rounded-2xl overflow-hidden flex-shrink-0">
                                        <img src="${item.image}" class="w-full h-full object-cover">
                                    </div>
                                    <div class="flex-1 flex flex-col">
                                        <div class="flex justify-between items-start mb-2">
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
                            `).join('')}
                        </div>
                    </div>
                    
                    <aside class="sticky top-28 h-fit">
                        <div id="side-cart-container" class="glass p-10 rounded-[3rem] shadow-2xl">
                            <!-- Cart UI will be injected here via store subscription -->
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    `;
};

export const init = (params) => {
    const restaurant = MOCK_RESTAURANTS.find(r => r.id === params.id);
    if (!restaurant) return;

    // Handle Add to Cart
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const itemId = e.target.getAttribute('data-id');
            const item = restaurant.menu.find(m => m.id === itemId);
            if (item) {
                actions.addToCart(item, restaurant.id);
            }
        });
    });

    // Side Cart View Logic
    const cartContainer = document.getElementById('side-cart-container');
    const updateSideCart = (state) => {
        if (!cartContainer) return;
        const { cart } = state;
        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

        cartContainer.innerHTML = `
            <h3 class="text-3xl font-black mb-8 flex items-center gap-3">
                <i class="fa-solid fa-cart-shopping text-primary"></i> Your Cart
            </h3>
            ${cart.length === 0 ? `
                <p class="text-muted-foreground font-medium italic">Your bag is empty. Time to fill it with joy!</p>
            ` : `
                <div class="space-y-4 mb-8">
                    ${cart.map(item => `
                        <div class="flex justify-between items-center text-sm font-bold">
                            <span>${item.quantity}x ${item.name}</span>
                            <span>$${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    `).join('')}
                    <div class="border-t border-border pt-4 flex justify-between font-black text-xl">
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
