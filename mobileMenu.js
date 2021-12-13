let mobileMenu = document.querySelector('.mobile-menu');
let hamburgerMenu = document.querySelector('.hamburger-menu');
let close = document.querySelector('.close');

hamburgerMenu.addEventListener('click', (event) => {
  mobileMenu.setAttribute('style', 'display:block');
})

close.addEventListener('click', (event) => {
  mobileMenu.setAttribute('style', 'display: none');
})