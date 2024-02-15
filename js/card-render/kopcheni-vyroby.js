import { cardRender } from './production-card-render.js';
document.addEventListener('partialsLoaded', () => {
    import('./header.js');
    cardRender('../json/products/kopcheni-vyroby.json', 'Копчені вироби');
});
