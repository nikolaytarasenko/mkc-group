// import $ from 'jquery';
import AOS from 'aos';

const initStickyHeader = e => {
  const header = document.querySelector('.header');
  const scrollY = window.scrollY;

  header.classList.toggle('sticky', scrollY > 0);
  document.body.classList.toggle('scrolled', scrollY > 0);
}

const hidePreloader = () => {
  const preloaderWrapper = document.querySelector('.preloader-wrapper');

  preloaderWrapper.classList.add('hide');
}

const resizeHandler = () => {

}

const domContentLoadedHandler = () => {
  window.addEventListener('scroll', initStickyHeader);
}

const loadHandler = () => {
  AOS.init({
    duration: 500,
    easing: "ease-in-out",
    once: true,
    mirror: false,
    disable: window.innerWidth < 768
  });

  hidePreloader();
}

window.addEventListener('resize', resizeHandler);
window.addEventListener('DOMContentLoaded', domContentLoadedHandler);
window.addEventListener('load', loadHandler);