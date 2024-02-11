import { cardRender } from './production-card-render.js';
document.addEventListener('partialsLoaded', () => {
    cardRender('../json/products/sosysky-sardelky.json', 'Сосиски, сардельки');
});
