import { actions } from '../../js/store.js';

export const init = () => {
    const form = document.getElementById('signup-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            actions.login({ name, email, avatar: null });
            import('../../js/router.js').then(m => m.router.navigate('/'));
        });
    }

};
