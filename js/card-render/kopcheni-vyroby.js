import { cardRender } from './production-card-render.js';
document.addEventListener('partialsLoaded', () => {
    cardRender('../json/kopcheni-vyroby.json', 'Копчені вироби');
});
