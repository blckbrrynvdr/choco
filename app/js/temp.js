/*бургер меню*/

var hamburgerMenu = document.querySelector('#hamburgerMenu');
var hamburgerButton = document.querySelector('#hamburgerButton');

function toggleMenu(menu,button) {
  menu.classList.toggle('active');
  button.classList.toggle('is-active');
}

function openingMenu(menu, button) {
  button.addEventListener('click', function () {
    toggleMenu(menu,button);
  });
  
  menu.addEventListener('click', function(event) {
    event.preventDefault();
    var target = event.target;
    
    if(target.classList.contains('header-menu__link') && menu.classList.contains('active')) {
      menu.classList.remove('active');
      button.classList.remove('is-active');
    }
  });
}

openingMenu(hamburgerMenu,hamburgerButton);


