import { MOCK_RESTAURANTS } from '../../js/data.js';

export const init = () => {
    const grid = document.getElementById('restaurants-grid');
    const searchInput = document.getElementById('restaurant-search');

    const renderGrid = (list) => {
        if (!grid) return;
        grid.innerHTML = list.map(res => `
            <a href="/restaurants/${res.id}" data-link class="restaurant-card group glass rounded-[3rem] overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all">
                <div class="relative h-60 overflow-hidden">
                    <img src="${res.image}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                    <div class="absolute top-6 left-6 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                        ${res.deliveryTime}
                    </div>
                </div>
                <div class="p-8">
                    <div class="flex justify-between items-start mb-2 text-foreground">
                        <h3 class="text-2xl font-black">${res.name}</h3>
                        <span class="flex items-center gap-1 font-bold text-green-600 bg-green-500/10 px-3 py-1 rounded-lg">
                            ${res.rating} <i class="fa-solid fa-star text-[10px]"></i>
                        </span>
                    </div>
                    <p class="text-muted-foreground font-bold text-sm mb-6">${res.tags.join(' • ')}</p>
                    <div class="flex items-center justify-between pt-6 border-t border-border/50 text-xs font-black uppercase tracking-widest text-muted-foreground">
                        <span>Min: $${res.minOrder}</span>
                        <span class="text-primary group-hover:translate-x-2 transition-transform">View Menu &rarr;</span>
                    </div>
                </div>
            </a>
        `).join('');
    };

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const filtered = MOCK_RESTAURANTS.filter(res =>
                res.name.toLowerCase().includes(query) ||
                res.tags.some(tag => tag.toLowerCase().includes(query))
            );
            renderGrid(filtered);
        });
    }

    renderGrid(MOCK_RESTAURANTS);
};
