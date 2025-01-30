import { cardRender } from './production-card-render.js';
document.addEventListener('partialsLoaded', () => {
    import('./header.js');
    setTimeout(() => {
        cardRender('../json/card-render/myasni-delikatesy.json', "М'ясні Делікатеси");
    }, 300);
});