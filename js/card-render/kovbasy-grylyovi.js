import { cardRender } from './production-card-render.js';
document.addEventListener('partialsLoaded', () => {
    document.addEventListener('DOMContentLoaded', () => {
        import('./header.js');
        cardRender('../json/card-render/kovbasy-grylyovi.json', "Ковбаси Грильові");
    })
});