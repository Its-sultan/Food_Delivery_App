import { actions } from '../../js/store.js';

export const init = () => {
    const form = document.getElementById('login-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const name = email.split('@')[0];
            actions.login({ name, email, avatar: null });
            import('../../js/router.js').then(m => m.router.navigate('/'));
        });
    }

};
