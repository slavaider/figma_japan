(function () {
    const header = document.querySelector('.header')
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header__active')
        } else {
            header.classList.remove('header__active')
        }
    }
    const menu = document.querySelector('.header__nav')
    // Burger Handler
    const burger = document.querySelector('.burger')
    burger.addEventListener('click', () => {
        menu.classList.add('header__nav_active')
    })
    // Close Handler
    const close = document.querySelector('.header__nav-close')
    close.addEventListener('click', () => {
        menu.classList.remove('header__nav_active')
    })
}());

