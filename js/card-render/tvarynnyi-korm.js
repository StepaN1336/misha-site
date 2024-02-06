import { cardRender } from './production-card-render.js';
document.addEventListener('partialsLoaded', () => {
    cardRender('../json/tvarynnyi-korm.json', "Тваринний корм");
});