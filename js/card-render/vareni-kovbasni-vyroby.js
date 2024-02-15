import { cardRender } from './production-card-render.js';
document.addEventListener('partialsLoaded', () => {
    import('./header.js');
    cardRender('../json/products/vareni-kovbasni-vyroby.json', "Варені ковбасні вироби");
});