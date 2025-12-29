import { MOCK_RESTAURANTS, CATEGORIES } from '../../js/data.js';

export const init = () => {
    // Inject Categories
    const catGrid = document.getElementById('categories-grid');
    if (catGrid) {
        catGrid.innerHTML = CATEGORIES.map(cat => `
            <div class="category-card p-10 glass rounded-[3rem] text-center cursor-pointer group">
                <div class="icon-wrapper">
                    <span class="text-5xl">${cat.icon}</span>
                </div>
                <span class="font-black uppercase tracking-widest text-xs text-muted-foreground group-hover:text-primary transition-colors">${cat.name}</span>
            </div>
        `).join('');
    }

    // Inject Featured Restaurants
    const resGrid = document.getElementById('featured-grid');
    if (resGrid) {
        resGrid.innerHTML = MOCK_RESTAURANTS.slice(0, 3).map(res => `
            <a href="/restaurants/${res.id}" data-link class="group relative overflow-hidden rounded-[2.5rem] border bg-card shadow-sm hover:shadow-2xl transition-all hover:-translate-y-2">
                <div class="aspect-video w-full overflow-hidden relative">
                    <img src="${res.image}" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div class="absolute bottom-4 left-4 text-white">
                        <h3 class="font-black text-2xl">${res.name}</h3>
                        <p class="text-xs font-bold opacity-80 uppercase tracking-widest">${res.tags.join(' • ')}</p>
                    </div>
                </div>
                <div class="p-5 flex items-center justify-between">
                    <span class="flex items-center gap-1.5 font-bold text-sm bg-muted px-3 py-1.5 rounded-xl text-muted-foreground">
                        <i class="fa-solid fa-clock text-[10px]"></i> ${res.deliveryTime}
                    </span>
                    <span class="font-black text-primary bg-primary/10 px-3 py-1.5 rounded-xl">
                        ${res.rating} <i class="fa-solid fa-star text-[10px]"></i>
                    </span>
                </div>
            </a>
        `).join('');
    }

};
