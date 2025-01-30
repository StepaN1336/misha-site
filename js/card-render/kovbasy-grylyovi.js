import { cardRender } from './production-card-render.js';
document.addEventListener('partialsLoaded', () => {
    import('./header.js');
    setTimeout(() => {
        cardRender('../json/card-render/kovbasy-grylyovi.json', "Ковбаси Грильові");
    }, 300);
});