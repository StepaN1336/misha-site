document.querySelector('.header__burger').addEventListener('click', () => {
  this.classList.toggle('active');
  document.querySelector('.header__navigation-menu').classList.toggle('open');
});