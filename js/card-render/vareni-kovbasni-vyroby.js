import { cardRender } from './production-card-render.js';
document.addEventListener('partialsLoaded', () => {
    cardRender('../json/vareni-kovbasni-vyroby.json', "Варені ковбасні вироби");
});