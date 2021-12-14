const hamburgerMenu = document.querySelector('.hamburger-menu');
const close = document.querySelector('.close');
const mobileMenu = document.querySelector('.mobile-menu');
const menuItems = document.querySelectorAll('.mobile-menu li');

const closeMenu = () => {
  mobileMenu.setAttribute('style', 'display: none');
};

hamburgerMenu.addEventListener('click', () => {
  mobileMenu.setAttribute('style', 'display:flex');
});

close.addEventListener('click', closeMenu);

Array.from(menuItems).forEach((node) => {
  node.addEventListener('click', closeMenu);
});