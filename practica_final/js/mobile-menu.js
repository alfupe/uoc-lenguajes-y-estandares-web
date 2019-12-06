document.addEventListener('DOMContentLoaded', function (event) {
    var burger = document.querySelector('.burger');
    var mobileMenu = document.querySelector('.main-navigation-mobile > .main-navigation__items');

    burger.addEventListener('click', function (event) {
        mobileMenu.classList.toggle('main-navigation__items--is-open');
        burger.classList.toggle('burger--is-open');
    });
});
