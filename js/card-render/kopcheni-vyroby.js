import { cardRender } from './production-card-render.js';
document.addEventListener('partialsLoaded', () => {
    cardRender('../json/products/kopcheni-vyroby.json', 'Копчені вироби');
});
