import { appStore, actions } from '../../js/store.js';

export const init = () => {
    const { user } = appStore.getState();
    const container = document.getElementById('settings-view-container');
    if (!container) return;

    let activeTab = 'profile';

    const render = () => {
        container.innerHTML = `
            <div class="max-w-6xl mx-auto text-foreground animate-in fade-in slide-in-from-bottom-4 duration-700">
                <!-- Header -->
                <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 px-4">
                    <div>
                        <div class="flex items-center gap-3 mb-4">
                            <span class="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-primary/20">Control Center</span>
                        </div>
                        <h1 class="text-6xl md:text-7xl font-black tracking-tighter leading-none">
                            Account <span class="text-primary italic">Settings</span>
                        </h1>
                        <p class="text-muted-foreground font-medium italic mt-4 max-w-md">Fine-tune your experience, manage privacy, and customize notifications.</p>
                    </div>
                </div>
                
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <!-- Modern Vertical Tab Bar -->
                    <div class="lg:col-span-4 space-y-4 px-4 h-fit sticky top-24">
                        ${[
                { id: 'profile', label: 'Personal Info', icon: 'fa-user', desc: 'Avatar, Name, Email' },
                { id: 'notifications', label: 'Notifications', icon: 'fa-bell', desc: 'Alerts, SMS, Updates' },
                { id: 'privacy', label: 'Privacy & Security', icon: 'fa-shield-halved', desc: 'Password, Access' }
            ].map(tab => `
                            <button class="tab-btn w-full text-left p-6 rounded-4xl transition-all duration-300 flex items-center gap-6 group scale-hover ${activeTab === tab.id ? 'bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-primary/20 ring-1 ring-primary/5' : 'hover:bg-muted/50 text-muted-foreground'}" data-tab="${tab.id}">
                                <div class="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${activeTab === tab.id ? 'bg-primary text-white rotate-6' : 'bg-muted group-hover:bg-primary/10 group-hover:text-primary'}">
                                    <i class="fa-solid ${tab.icon} text-xl"></i>
                                </div>
                                <div>
                                    <span class="block font-black text-sm uppercase tracking-widest ${activeTab === tab.id ? 'text-foreground' : ''}">${tab.label}</span>
                                    <span class="text-[11px] font-bold opacity-50">${tab.desc}</span>
                                </div>
                            </button>
                        `).join('')}

                        <div class="pt-8 mt-8 border-t border-border/50">
                             <a href="/orders" data-link class="w-full text-left p-6 hover:bg-muted rounded-4xl flex items-center gap-6 group transition-all text-muted-foreground">
                                <div class="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-all duration-500">
                                    <i class="fa-solid fa-box-open text-xl"></i>
                                </div>
                                <div>
                                    <span class="block font-black text-sm uppercase tracking-widest group-hover:text-foreground">Order History</span>
                                    <span class="text-[11px] font-bold opacity-50">View past orders</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <!-- Dynamic Content Area -->
                    <div class="lg:col-span-8 px-4 pb-20">
                        ${renderTabContent(activeTab, user)}
                    </div>
                </div>
            </div>
        `;

        // Attach Event Listeners
        container.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                activeTab = btn.dataset.tab;
                render();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });

        const profileForm = document.getElementById('profile-settings-form');
        if (profileForm) {
            profileForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const newName = document.getElementById('setting-name').value;
                const state = appStore.getState();
                if (state.user) {
                    appStore.setState({ user: { ...state.user, name: newName } });
                    // Trigger a re-render to reflect changes if needed, 
                    // though for name update only a success message is fine here
                    const toast = document.createElement('div');
                    toast.className = 'fixed bottom-10 right-10 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black shadow-2xl animate-in fade-in slide-in-from-right-10 duration-500 z-[100]';
                    toast.innerText = 'Profile Updated! 🍊';
                    document.body.appendChild(toast);
                    setTimeout(() => toast.remove(), 3000);
                }
            });
        }
    };

    render();
};

const renderTabContent = (tab, user) => {
    switch (tab) {
        case 'profile':
            return `
                <div class="space-y-12 animate-in fade-in slide-in-from-right-8 duration-500">
                    <!-- Profile Card -->
                    <div class="glass p-10 md:p-14 rounded-5xl shadow-2xl border border-white/40 overflow-hidden relative">
                        <div class="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                        
                        <div class="flex flex-col md:flex-row items-center gap-10 mb-14">
                            <div class="relative group">
                                <div class="w-32 h-32 rounded-3xl bg-primary flex items-center justify-center text-white text-4xl font-black shadow-2xl rotate-3 group-hover:rotate-6 transition-transform duration-500">
                                    ${user && user.avatar ? `<img src="${user.avatar}" class="w-full h-full object-cover rounded-3xl">` : (user ? user.name.charAt(0).toUpperCase() : '?')}
                                </div>
                                <button type="button" id="trigger-avatar" class="absolute -bottom-2 -right-2 p-3 bg-white text-primary rounded-xl shadow-xl hover:scale-110 transition-all border border-border">
                                    <i class="fa-solid fa-camera text-sm"></i>
                                </button>
                                <input type="file" id="avatar-input" class="hidden" accept="image/*">
                            </div>
                            <div class="text-center md:text-left">
                                <h3 class="text-3xl font-black tracking-tight mb-2">${user ? user.name : 'Guest User'}</h3>
                                <p class="text-muted-foreground font-bold italic">${user ? user.email : 'Log in to track orders'}</p>
                            </div>
                        </div>

                        <form id="profile-settings-form" class="space-y-10">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div class="space-y-4">
                                    <label class="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground ml-2">Full Name</label>
                                    <input type="text" id="setting-name" class="settings-input h-16 w-full px-8 bg-muted/40 border-none rounded-2xl font-bold focus:ring-4 focus:ring-primary/10 transition-all" value="${user ? user.name : ''}" ${!user ? 'disabled' : ''}>
                                </div>
                                <div class="space-y-4">
                                    <label class="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground ml-2">Display Name</label>
                                    <input type="text" class="settings-input h-16 w-full px-8 bg-muted/40 border-none rounded-2xl font-bold focus:ring-4 focus:ring-primary/10 transition-all" value="${user ? user.name.split(' ')[0] : ''}" ${!user ? 'disabled' : ''}>
                                </div>
                            </div>
                            <div class="space-y-4">
                                <label class="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground ml-2">Email Address</label>
                                <div class="relative">
                                    <input type="email" class="settings-input h-16 w-full px-8 bg-muted/20 border border-dashed border-border/50 rounded-2xl font-bold text-muted-foreground cursor-not-allowed" value="${user ? user.email : ''}" disabled>
                                    <i class="fa-solid fa-lock absolute right-6 top-1/2 -translate-y-1/2 text-muted-foreground/30"></i>
                                </div>
                            </div>
                            
                            <div class="pt-6">
                                <button type="submit" class="w-full bg-slate-900 text-white py-6 rounded-3xl font-black uppercase tracking-widest text-sm shadow-2xl hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all" ${!user ? 'disabled' : ''}>
                                    Save Profile Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            `;
        case 'notifications':
            return `
                <div class="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
                    <div class="glass p-10 md:p-14 rounded-5xl shadow-2xl border border-white/40">
                        <h3 class="text-4xl font-black mb-4 tracking-tighter">Stay <span class="text-primary italic">Notified</span></h3>
                        <p class="text-muted-foreground font-medium italic mb-12">Control how and when we reach out to you.</p>
                        
                        <div class="space-y-6">
                            ${[
                    { title: 'Order Status updates', desc: 'Real-time updates on your delivery progress.', active: true },
                    { title: 'Promotional Offers', desc: 'Get notified about exclusive discounts and flash sales.', active: false },
                    { title: 'Flavor Recommendations', desc: 'Personalized food suggestions based on your history.', active: true },
                    { title: 'Newsletter', desc: 'Monthly roundup of top restaurants and news.', active: false }
                ].map(item => `
                                <div class="flex items-center justify-between p-8 bg-muted/30 rounded-4xl border border-transparent hover:border-primary/20 transition-all group cursor-pointer">
                                    <div class="max-w-[70%]">
                                        <h4 class="font-black text-xl mb-1 group-hover:text-primary transition-colors">${item.title}</h4>
                                        <p class="text-sm font-medium text-muted-foreground italic">${item.desc}</p>
                                    </div>
                                    <div class="relative inline-flex items-center cursor-pointer">
                                        <div class="w-14 h-8 transition-all duration-500 rounded-full ${item.active ? 'bg-primary' : 'bg-muted-foreground/20'}"></div>
                                        <div class="absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-all duration-500 ${item.active ? 'translate-x-6' : ''} shadow-lg"></div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        case 'privacy':
            return `
                <div class="space-y-12 animate-in fade-in slide-in-from-right-8 duration-500">
                    <div class="glass p-10 md:p-14 rounded-5xl shadow-2xl border border-white/40">
                         <h3 class="text-4xl font-black mb-10 tracking-tighter">Security <span class="text-primary italic">Vault</span></h3>
                         
                         <div class="space-y-6">
                             <button class="w-full flex items-center justify-between p-8 bg-muted/40 rounded-4xl hover:bg-white hover:shadow-xl transition-all group">
                                <div class="flex items-center gap-6 text-left">
                                    <div class="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                        <i class="fa-solid fa-key"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-black text-lg">Change Password</h4>
                                        <p class="text-xs font-bold text-muted-foreground opacity-60">Last updated 3 months ago</p>
                                    </div>
                                </div>
                                <i class="fa-solid fa-chevron-right text-muted-foreground group-hover:translate-x-1 transition-transform"></i>
                             </button>

                             <button class="w-full flex items-center justify-between p-8 bg-muted/40 rounded-4xl hover:bg-white hover:shadow-xl transition-all group">
                                <div class="flex items-center gap-6 text-left">
                                    <div class="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                        <i class="fa-solid fa-shield-halved"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-black text-lg">Two-Factor Authentication</h4>
                                        <p class="text-xs font-bold text-green-600 opacity-80 uppercase tracking-widest">Highly Recommended</p>
                                    </div>
                                </div>
                                <span class="bg-muted px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest">Off</span>
                             </button>
                         </div>

                         <div class="mt-16 pt-10 border-t border-border/50">
                             <h4 class="font-black text-red-500 text-2xl tracking-tight mb-4 flex items-center gap-3">
                                <i class="fa-solid fa-triangle-exclamation"></i> Danger Zone
                             </h4>
                             <p class="text-sm font-medium text-muted-foreground italic mb-10">Permanently delete your account and all associated data. This action cannot be reversed.</p>
                             <button class="px-10 py-5 border-2 border-red-500/20 text-red-500 rounded-3xl font-black uppercase tracking-widest text-[10px] hover:bg-red-500 hover:text-white hover:border-red-500 hover:shadow-xl hover:shadow-red-500/20 transition-all">
                                 Deactivate Account
                             </button>
                         </div>
                    </div>
                </div>
            `;
        default:
            return `<div class="p-12 text-center text-muted-foreground font-black uppercase italic tracking-widest">Loading...</div>`;
    }
};
