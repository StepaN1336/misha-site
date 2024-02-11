import { cardRender } from './production-card-render.js';
document.addEventListener('partialsLoaded', () => {
    cardRender('../json/products/napiv-kopcheni-kovbasni-vyroby-card-render.json', 'Копчено-варені, напів копчені ковбасні вироби');
});
