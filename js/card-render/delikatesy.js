import { cardRender } from './production-card-render.js';
document.addEventListener('partialsLoaded', () => {
    import('./header.js');
    cardRender('../json/products/delikatesy.json', 'Делікатеси');
});
