import { appStore } from '../../js/store.js';

export const init = () => {
    const { user } = appStore.getState();
    const container = document.getElementById('orders-list-container');

    if (!user) {
        if (container) container.innerHTML = `<div class="text-center py-20 glass rounded-[3rem] text-foreground"><h2 class="text-3xl font-black mb-4">Please login to see your orders</h2><a href="/login" data-link class="bg-primary text-white px-8 py-3 rounded-xl font-bold uppercase tracking-widest shadow-xl inline-block mt-4">Login</a></div>`;
        return;
    }

    // Mock Orders
    const orders = [
        {
            id: 'ORD-001',
            date: 'March 20, 2024',
            status: 'Delivered',
            total: 34.99,
            items: [
                { name: 'Whopper Burger', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80' },
                { name: 'French Fries', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&q=80' }
            ]
        },
        {
            id: 'ORD-002',
            date: 'March 18, 2024',
            status: 'Delivered',
            total: 22.50,
            items: [
                { name: 'Pepperoni Pizza', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&q=80' }
            ]
        },
    ];

    if (container) {
        container.innerHTML = orders.map(order => `
            <div class="order-card p-10 glass rounded-[3rem] hover:shadow-2xl transition-all border border-border/50 text-foreground">
                <div class="flex flex-col md:flex-row justify-between mb-8 gap-4">
                    <div>
                        <h3 class="text-2xl font-black mb-1">${order.id}</h3>
                        <p class="text-muted-foreground font-bold italic">${order.date}</p>
                    </div>
                    <div class="flex items-center gap-4">
                        <span class="px-5 py-2 rounded-full bg-green-500/10 text-green-600 font-black uppercase tracking-widest text-[10px]">
                            ${order.status}
                        </span>
                        <span class="text-2xl font-black text-primary">$${order.total}</span>
                    </div>
                </div>
                
                <div class="flex flex-wrap gap-6 mb-8">
                    ${order.items.map(item => `
                        <div class="flex items-center gap-3 bg-muted/30 p-2 pr-4 rounded-2xl border border-border/10">
                            <img src="${item.image}" class="w-12 h-12 rounded-xl object-cover shadow-sm">
                            <span class="font-bold text-sm text-foreground">${item.name}</span>
                        </div>
                    `).join('')}
                </div>

                <div class="flex gap-4">
                    <button class="bg-primary text-white px-8 py-3 rounded-xl font-black uppercase tracking-widest text-xs shadow-lg shadow-primary/20">Reorder</button>
                    <a href="/tracking" data-link class="bg-muted text-muted-foreground px-8 py-3 rounded-xl font-black uppercase tracking-widest text-xs flex items-center justify-center">Track It</a>
                </div>
            </div>
        `).join('');
    }

};
