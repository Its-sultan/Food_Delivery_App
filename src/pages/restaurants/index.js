import { MOCK_RESTAURANTS } from '../../js/data.js';

export const render = async () => {
    return `
        <div class="restaurants-page container py-20">
            <div class="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
                <h1 class="text-5xl font-black tracking-tighter">All <span class="text-primary italic">Restaurants</span></h1>
                
                <div class="search-box relative w-full md:w-96">
                    <i class="fa-solid fa-magnifying-glass absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground"></i>
                    <input type="text" placeholder="Search for food..." class="w-full pl-16 pr-6 py-4 glass rounded-full font-bold outline-none border border-border focus:border-primary transition-all shadow-sm">
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                ${MOCK_RESTAURANTS.map(res => `
                    <a href="/restaurants/${res.id}" data-link class="restaurant-card group glass rounded-[3rem] overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all">
                        <div class="relative h-60 overflow-hidden">
                            <img src="${res.image}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                            <div class="absolute top-6 left-6 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                                ${res.deliveryTime}
                            </div>
                        </div>
                        <div class="p-8">
                            <div class="flex justify-between items-start mb-2">
                                <h3 class="text-2xl font-black">${res.name}</h3>
                                <span class="flex items-center gap-1 font-bold text-green-600 bg-green-500/10 px-3 py-1 rounded-lg">
                                    ${res.rating} <i class="fa-solid fa-star text-xs"></i>
                                </span>
                            </div>
                            <p class="text-muted-foreground font-bold text-sm mb-6">${res.tags.join(' • ')}</p>
                            <div class="flex items-center justify-between pt-6 border-t border-border/50 text-xs font-black uppercase tracking-widest text-muted-foreground">
                                <span>Min: $${res.minOrder}</span>
                                <span class="text-primary group-hover:translate-x-2 transition-transform">View Menu &rarr;</span>
                            </div>
                        </div>
                    </a>
                `).join('')}
            </div>
        </div>
    `;
};

export const init = () => {
    console.log('Restaurants page initialized');
};
