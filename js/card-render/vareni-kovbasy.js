import { cardRender } from './production-card-render.js';
document.addEventListener('partialsLoaded', () => {
    import('./header.js');
    setTimeout(() => {
        cardRender('../json/card-render/vareni-kovbasy.json', "Варені Ковбаси");
    }, 300);
});