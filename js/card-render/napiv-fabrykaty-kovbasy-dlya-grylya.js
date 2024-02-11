import { cardRender } from './production-card-render.js';
document.addEventListener('partialsLoaded', () => {
    cardRender('../json/products/napiv-fabrykaty-kovbasy-dlya-grylya.json', 'Напів фабрикати, ковбаси для гриля');
});
