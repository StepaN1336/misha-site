import { cardRender } from './production-card-render.js';
document.addEventListener('partialsLoaded', () => {
    cardRender('../json/products/kovbasy-liverni-krovyani-hlibtsi-zeltsy.json', "Ковбаси ліверні, кров'яні, хлібці, зельци");
});
