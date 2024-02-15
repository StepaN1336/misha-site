const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__navigation-links');
const body = document.body;

headerBurger.addEventListener('click', () => {
  headerBurger.classList.toggle('active');
  headerMenu.classList.toggle('open');
  body.classList.toggle('lock')
});