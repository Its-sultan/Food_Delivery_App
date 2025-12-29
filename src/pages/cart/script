import { appStore, actions } from '../../js/store.js';

export const init = () => {
    const container = document.getElementById('cart-content-container');

    const renderCart = (state) => {
        if (!container) return;
        const { cart } = state;
        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

        if (cart.length === 0) {
            container.innerHTML = `
                <div class="text-center py-20 glass rounded-[3rem]">
                    <span class="text-8xl mb-6 block">🛒</span>
                    <h2 class="text-3xl font-black mb-4 text-foreground">Your bag is empty</h2>
                    <p class="text-muted-foreground font-medium mb-8">Looks like you haven't added anything yet. Hunger is a terrible companion!</p>
                    <a href="/restaurants" data-link class="bg-primary text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-primary/20 inline-block">Find Food</a>
                </div>
            `;
        } else {
            container.innerHTML = `
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div class="lg:col-span-2 space-y-6">
                        ${cart.map(item => `
                            <div class="flex items-center gap-6 p-6 glass rounded-[2.5rem]">
                                <img src="${item.image}" class="w-24 h-24 rounded-2xl object-cover">
                                <div class="flex-1 text-foreground">
                                    <h3 class="text-xl font-black">${item.name}</h3>
                                    <p class="text-primary font-bold">$${item.price}</p>
                                </div>
                                <div class="flex items-center gap-4 text-foreground">
                                    <button class="qty-btn" data-id="${item.id}" data-delta="-1">-</button>
                                    <span class="font-black text-xl w-8 text-center">${item.quantity}</span>
                                    <button class="qty-btn" data-id="${item.id}" data-delta="1">+</button>
                                </div>
                                    <i class="fa-solid fa-trash-can"></i>
                            </div>
                        `).join('')}
                    </div>
                    
                    <aside>
                        <div class="glass p-10 rounded-[3rem] shadow-xl text-foreground">
                            <h3 class="text-3xl font-black mb-8">Order Summary</h3>
                            <div class="space-y-4 mb-8 font-bold text-muted-foreground">
                                <div class="flex justify-between">
                                    <span>Subtotal</span>
                                    <span class="text-foreground">$${total.toFixed(2)}</span>
                                </div>
                                <div class="flex justify-between">
                                    <span>Delivery Fee</span>
                                    <span class="text-green-500 font-black">FREE</span>
                                </div>
                                <div class="border-t border-border pt-4 flex justify-between text-2xl font-black text-foreground">
                                    <span>Total</span>
                                    <span class="text-primary">$${total.toFixed(2)}</span>
                                </div>
                            </div>
                            <a href="/checkout" data-link class="block w-full bg-primary text-white text-center py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all">
                                Checkout Now
                            </a>
                        </div>
                    </aside>
                </div>
            `;
        }

        // Event Listeners
        container.querySelectorAll('.qty-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                const delta = parseInt(e.target.getAttribute('data-delta'));
                const { cart } = appStore.getState();
                const newCart = cart.map(item => {
                    if (item.id === id) return { ...item, quantity: Math.max(1, item.quantity + delta) };
                    return item;
                });
                appStore.setState({ cart: newCart });
            });
        });

        container.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.currentTarget.getAttribute('data-id');
                actions.removeFromCart(id);
            });
        });

    };

    appStore.subscribe(renderCart);
    renderCart(appStore.getState());
};
