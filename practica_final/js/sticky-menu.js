function observeNavigationMenu() {
    var mainNavigation = document.querySelector('.main-navigation');
    var navigationSentinel = document.querySelector('.navigation-sentinel');

    var observer = new IntersectionObserver(function (entries) {
        if (!entries[0].isIntersecting) {
            mainNavigation.classList.add('main-navigation--is-stuck');
        } else {
            mainNavigation.classList.remove('main-navigation--is-stuck');
        }
    },
        {
            root: null, // relative to document viewport
            rootMargin: '-145px', // margin around root. Values are similar to css property. Unitless values not allowed
        });

    observer.observe(navigationSentinel);
}

document.addEventListener('DOMContentLoaded', function (event) {
    if ('IntersectionObserver' in window) {
        observeNavigationMenu();
    }
});
