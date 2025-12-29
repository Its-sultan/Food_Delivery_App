import { appStore, actions } from '../../js/store.js';

export const init = () => {
    const { user } = appStore.getState();
    if (!user) return;

    document.getElementById('profile-name').innerText = user.name;
    document.getElementById('profile-email').innerText = user.email;
    document.getElementById('profile-avatar').innerHTML = user.avatar
        ? `<img src="${user.avatar}" class="w-full h-full object-cover">`
        : user.name.charAt(0).toUpperCase();

    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            actions.logout();
            import('../../js/router.js').then(m => m.router.navigate('/'));
        });
    }

};
