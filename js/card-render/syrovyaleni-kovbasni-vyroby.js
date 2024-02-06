import { cardRender } from './production-card-render.js';
document.addEventListener('partialsLoaded', () => {
    cardRender('../json/syrovyaleni-kovbasni-vyroby.json', "Сиров'ялені ковбасні вироби");
});