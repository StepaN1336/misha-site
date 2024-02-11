import { cardRender } from './production-card-render.js';
document.addEventListener('partialsLoaded', () => {
    cardRender('../json/products/vareni-kovbasni-vyroby.json', "Варені ковбасні вироби");
});