export const Footer = {
    async init() {
        const container = document.getElementById('footer-container');
        if (!container) return;

        const response = await fetch('/src/components/footer/page.html');
        const html = await response.text();
        container.innerHTML = html;

    }
};
