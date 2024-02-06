import { cardRender } from './production-card-render.js';
document.addEventListener('partialsLoaded', () => {
    cardRender('../json/sosysky-sardelky.json', 'Сосиски, сардельки');
});
