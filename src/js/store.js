/**
 * Simple Observable Store for Vanilla JS
 */

class Store {
    constructor(initialState = {}) {
        this.state = initialState;
        this.subscribers = [];
    }

    getState() {
        return this.state;
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.notify();
    }

    subscribe(callback) {
        this.subscribers.push(callback);
        return () => {
            this.subscribers = this.subscribers.filter(sub => sub !== callback);
        };
    }

    notify() {
        this.subscribers.forEach(callback => callback(this.state));
    }
}

// Initial State from LocalStorage
const savedCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
const savedUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

export const appStore = new Store({
    cart: savedCart,
    user: savedUser,
    theme: localStorage.getItem('theme') || 'light',
    currentRoute: window.location.hash.substring(1) || '/'
});

// Auto-save to LocalStorage
appStore.subscribe((state) => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
    localStorage.setItem('user', JSON.stringify(state.user));
    localStorage.setItem('theme', state.theme);
    document.documentElement.setAttribute('data-theme', state.theme);
});

// Core Actions
export const actions = {
    addToCart: (product, restaurantId) => {
        const { cart } = appStore.getState();

        // Check if item from same restaurant
        if (cart.length > 0 && cart[0].restaurantId !== restaurantId) {
            if (!confirm('Start a new basket? You can only order from one restaurant at a time.')) {
                return;
            }
            appStore.setState({ cart: [{ ...product, quantity: 1, restaurantId }] });
            return;
        }

        const existing = cart.find(item => item.id === product.id);
        if (existing) {
            const newCart = cart.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            appStore.setState({ cart: newCart });
        } else {
            appStore.setState({ cart: [...cart, { ...product, quantity: 1, restaurantId }] });
        }
    },

    removeFromCart: (productId) => {
        const { cart } = appStore.getState();
        appStore.setState({ cart: cart.filter(item => item.id !== productId) });
    },

    clearCart: () => {
        appStore.setState({ cart: [] });
    },

    login: (user) => {
        appStore.setState({ user });
    },

    logout: () => {
        appStore.setState({ user: null });
    },

    toggleTheme: () => {
        const { theme } = appStore.getState();
        appStore.setState({ theme: theme === 'light' ? 'dark' : 'light' });
    }
};
