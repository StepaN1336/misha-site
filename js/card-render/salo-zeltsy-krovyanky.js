import { cardRender } from './production-card-render.js';

document.addEventListener('partialsLoaded', () => {
    import('./header.js');
    cardRender('../json/card-render/salo-zeltsy-krovyanky.json', "Сало, Зельци, Кров'янки");
});