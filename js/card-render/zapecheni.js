import { cardRender } from './production-card-render.js';

document.addEventListener('partialsLoaded', () => {
    import('./header.js');
    cardRender('../json/card-render/zapecheni.json', "Запечені Вироби");
});