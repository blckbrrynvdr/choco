const hamburgerButton = document.getElementById('hamburgerButton');
const hamburgerMenu = document.getElementById('hamburgerMenu');

hamburgerButton.addEventListener('click', function (e) {
    e.preventDefault();
    hamburgerButton.classList.toggle('is-active');
    hamburgerMenu.classList.toggle('active');
});

hamburgerMenu.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.classList.contains('header-menu__link')) {
        hamburgerButton.classList.remove('is-active');
        hamburgerMenu.classList.remove('active');
    }
})