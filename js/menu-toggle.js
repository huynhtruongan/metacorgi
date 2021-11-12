const menuHidden = document.querySelector('.menu-hidden');
const menu = document.querySelector('.menu--toggle');
const first = document.querySelector('.first');
const mid = document.querySelector('.mid');
const end = document.querySelector('.end');
const normal = document.querySelectorAll('.normal');
menuHidden.addEventListener('click', fn);
const scrollTopDiv = document.querySelector('.scroll-top');
function fn() {
  menu.classList.toggle('actived');
  first.classList.toggle('menu-icon-first');
  mid.classList.toggle('menu-icon-mid');
  end.classList.toggle('menu-icon-end');
}
