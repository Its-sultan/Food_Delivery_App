import { MOCK_RESTAURANTS, CATEGORIES } from '../../js/data.js';

export const render = async () => {
    return `
        <div class="home-page">
            <!-- Hero Section -->
            <section class="hero bg-primary text-white py-24 relative overflow-hidden">
                <div class="absolute inset-0 opacity-10">
                    <div class="absolute top-10 right-10 text-8xl">🍕</div>
                    <div class="absolute bottom-10 left-10 text-8xl">🍔</div>
                </div>
                <div class="container relative z-10 text-center">
                    <h1 class="text-6xl md:text-8xl font-black mb-6 animate-fade-in tracking-tighter">
                        Fastest Food <br/> <span class="text-orange-950/30 italic">Delivery!</span>
                    </h1>
                    <p class="text-xl md:text-2xl font-bold mb-10 opacity-90 max-w-2xl mx-auto italic">
                        Delicious meals from your favorite restaurants, delivered right to your doorstep in minutes.
                    </p>
                    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="/restaurants" data-link class="bg-white text-primary px-10 py-5 rounded-2xl font-black uppercase tracking-widest shadow-2xl hover:scale-105 transition-all">
                            Order Now
                        </a>
                        <button class="bg-white/20 backdrop-blur-md px-10 py-5 rounded-2xl font-black uppercase tracking-widest border border-white/20 hover:bg-white/30 transition-all">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

            <!-- Categories -->
            <section class="container py-20">
                <h2 class="text-4xl font-black mb-12 text-center">Popular Categories</h2>
                <div class="grid grid-cols-2 md:grid-cols-5 gap-6">
                    ${CATEGORIES.map(cat => `
                        <div class="category-card p-8 glass rounded-[2.5rem] text-center hover:scale-105 transition-all cursor-pointer">
                            <span class="text-5xl mb-4 block">${cat.icon}</span>
                            <span class="font-black uppercase tracking-tight text-sm">${cat.name}</span>
                        </div>
                    `).join('')}
                </div>
            </section>

            <!-- Featured Restaurants -->
            <section class="container py-20 bg-muted/30 rounded-[3rem]">
                <div class="flex items-center justify-between mb-12">
                    <h2 class="text-4xl font-black tracking-tighter">Featured <span class="text-primary italic">Spots</span></h2>
                    <a href="/restaurants" data-link class="text-primary font-black uppercase tracking-widest text-sm hover:underline">View All</a>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    ${MOCK_RESTAURANTS.slice(0, 3).map(res => `
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
                                <span class="flex items-center gap-1.5 font-bold text-sm bg-muted px-3 py-1.5 rounded-xl">
                                    <i class="fa-solid fa-clock text-xs"></i> ${res.deliveryTime}
                                </span>
                                <span class="font-black text-primary bg-primary/10 px-3 py-1.5 rounded-xl">
                                    ${res.rating} <i class="fa-solid fa-star text-xs"></i>
                                </span>
                            </div>
                        </a>
                    `).join('')}
                </div>
            </section>
        </div>
    `;
};

export const init = () => {
    console.log('Home page initialized');
};
