import { appStore, actions } from '../../js/store.js';

export const init = () => {
    const container = document.getElementById('checkout-container');
    const { cart, user } = appStore.getState();
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    if (!user) {
        container.innerHTML = `
            <div class="text-center py-20 glass rounded-[3rem]">
                <h2 class="text-3xl font-black mb-6 text-foreground">Please Login to Checkout</h2>
                <a href="/login" data-link class="bg-primary text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest shadow-lg inline-block">Login Now</a>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2 space-y-8">
                <!-- Shipping -->
                <div class="glass p-12 rounded-[3.5rem] shadow-xl">
                    <h3 class="text-3xl font-black mb-10 flex items-center gap-4 text-foreground">
                        <div class="p-3 bg-primary/10 rounded-2xl">
                            <i class="fa-solid fa-location-dot text-primary w-8 h-8"></i>
                        </div>
                        Shipping Details
                    </h3>
                    <div class="space-y-6">
                        <div class="space-y-2">
                            <label class="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">Full Name</label>
                            <input type="text" placeholder="John Doe" class="checkout-input" value="${user.name}">
                        </div>
                        <div class="space-y-2">
                            <label class="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">Delivery Address</label>
                            <input type="text" placeholder="123 Gourmet Lane" class="checkout-input">
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="space-y-2">
                                <label class="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">City</label>
                                <input type="text" placeholder="Flavor Town" class="checkout-input">
                            </div>
                            <div class="space-y-2">
                                <label class="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">Zip Code</label>
                                <input type="text" placeholder="10001" class="checkout-input">
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Payment -->
                <div class="glass p-12 rounded-[3.5rem] shadow-xl text-foreground">
                    <h3 class="text-3xl font-black mb-10 flex items-center gap-4">
                        <div class="p-3 bg-primary/10 rounded-2xl">
                            <i class="fa-solid fa-credit-card text-primary w-8 h-8"></i>
                        </div>
                        Payment Method
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <label class="group relative flex flex-col items-start gap-4 p-8 glass border-2 border-transparent rounded-[2.5rem] cursor-pointer hover:border-primary/50 transition-all has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                            <input type="radio" name="payment" checked class="absolute top-6 right-6 w-6 h-6 accent-primary">
                            <i class="fa-solid fa-wallet text-primary text-4xl mb-2"></i>
                            <div>
                                <h4 class="font-black text-xl mb-1">Credit Card</h4>
                                <p class="text-sm font-medium text-muted-foreground">Visa, Mastercard, Amex</p>
                            </div>
                        </label>
                        <label class="group relative flex flex-col items-start gap-4 p-8 glass border-2 border-transparent rounded-[2.5rem] cursor-pointer hover:border-primary/50 transition-all has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                            <input type="radio" name="payment" class="absolute top-6 right-6 w-6 h-6 accent-primary">
                            <i class="fa-solid fa-money-bill-1 text-primary text-4xl mb-2"></i>
                            <div>
                                <h4 class="font-black text-xl mb-1">Cash</h4>
                                <p class="text-sm font-medium text-muted-foreground">Pay when you eat</p>
                            </div>
                        </label>
                    </div>
                </div>
            </div>

            <aside>
                <div class="glass p-10 rounded-[3rem] sticky top-28 shadow-2xl text-foreground">
                    <h3 class="text-2xl font-black mb-8">Summary</h3>
                    <div class="space-y-4 mb-8 font-bold text-muted-foreground">
                        <div class="flex justify-between">
                            <span>Items Total</span>
                            <span class="text-foreground">$${total.toFixed(2)}</span>
                        </div>
                        <div class="flex justify-between">
                            <span>Delivery</span>
                            <span class="text-green-500 font-black">FREE</span>
                        </div>
                        <div class="border-t border-border pt-4 flex justify-between text-2xl font-black text-foreground">
                            <span>Total</span>
                            <span class="text-primary">$${total.toFixed(2)}</span>
                        </div>
                    </div>
                    <button id="place-order-btn" class="w-full bg-primary text-white py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all">
                        Place Order
                    </button>
                </div>
            </aside>
        </div>
    `;

    const btn = document.getElementById('place-order-btn');
    if (btn) {
        btn.addEventListener('click', () => {
            btn.innerHTML = '<span class="animate-pulse">Processing Feast...</span>';
            btn.disabled = true;
            setTimeout(() => {
                alert('Order placed successfully! Redirecting to tracking...');
                actions.clearCart();
                import('../../js/router.js').then(m => m.router.navigate('/tracking'));
            }, 2000);
        });
    }

};
