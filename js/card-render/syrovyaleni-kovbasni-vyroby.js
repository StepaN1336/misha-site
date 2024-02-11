import { cardRender } from './production-card-render.js';
document.addEventListener('partialsLoaded', () => {
    cardRender('../json/products/syrovyaleni-kovbasni-vyroby.json', "Сиров'ялені ковбасні вироби");
});