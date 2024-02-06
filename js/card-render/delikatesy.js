import { cardRender } from './production-card-render.js';
document.addEventListener('partialsLoaded', () => {
    cardRender('../json/delikatesy.json', 'Делікатеси');
});
