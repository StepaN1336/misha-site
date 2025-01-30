import { cardRender } from './production-card-render.js';
document.addEventListener('partialsLoaded', () => {
    import('./header.js');
    setTimeout(() => {
        cardRender('../json/card-render/kopcheno-vareni.json', "Копчено Варені");
    }, 2000);
});