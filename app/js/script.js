/*бургер меню*/
var hamburgerMenu = document.querySelector('#hamburgerMenu'); /**находим само меню */
var hamburgerButton = document.querySelector('#hamburgerButton'); /**находим кнопку меню */

openingMenu(hamburgerMenu,hamburgerButton);  /**мы можем вызвать нашу функцию до описания */

function openingMenu(menu, button) {   /**обозначаем функцию открытия/закрытия нешего меню*/
  
  function toggleMenu(menu,button) {      /**модуль функции открытия закрытия */
    menu.classList.toggle('active');      /**передаём аргументом наше меню, добавляем/снимаем активный класс */
    button.classList.toggle('is-active'); /**тоже самое с кнопкой */
    menu.classList.remove('fadeOut');     /**и снятие класса анимации закрытия */
  }
  
  button.addEventListener('click', function () {  /** добавляем обработчик события нажатия на кнопку */
    if(this.classList.contains('is-active')) {     /**если наша кнопка имеет класс is-active то*/
      menu.classList.add('fadeOut');                /** добавляем анимацию закрытия */
      setTimeout(() => {                          /** и через короткую паузу */
        toggleMenu(menu,button);                  /**запускаем функцию  toggleMenu описанную ранее*/
      }, 400);                                    /**пауза равна 400 мс */
    } else {                                  /**если же у нашей кнопки нет активного класса */
      toggleMenu(menu,button);                /**то мы добавляем при помощи функции toggleMenu описанной ранее*/
    }
  });
  
  menu.addEventListener('click', function(event) {    /**так же мы следим за кликами внутри меню */
    event.preventDefault();                         /**запрещаем действие по-умолчанию чтоб не работало стандартное поведение ссылок */
    var target = event.target;                      /**создаём переменную target которой присваиваем  */
    
    if(target.classList.contains('header-menu__link') && menu.classList.contains('active')) {   /**ЕСЛИ целью клика является ссылка меню И если наше меню активно(имеет класс active в данном случае) ТО*/
      menu.classList.add('fadeOut');                /**мы добавляем меню класс закрывающей анимации */
      setTimeout(() => {                        /**ставим задержку чтоб наша анимация успела пройти */
        menu.classList.remove('active');        /**снимаем с меню и кнопки активные классы */
        button.classList.remove('is-active');   /**тем самым как бы закрывая меню */
      }, 400);                                    /**и это происходит через 400мс после клика */
    }
  });
}






/**вертикальный аккордеон */

let teamList = document.querySelector('.team__list');

verticalAccordeon(teamList);

function verticalAccordeon(element) {
  
  element.addEventListener('click', function (e) {
    e.preventDefault();
    let teamCards = document.querySelectorAll('.team__card');
    let targetIsPicture = e.target.classList.contains('team__pic');
    let targetIsName = e.target.classList.contains('team__name');
    let teamCardParent = e.target.closest('.team__card');
    let teamCardDesc = teamCardParent.lastElementChild;
    let teamCardDescHeight = teamCardDesc.scrollHeight;
    
    if (targetIsPicture || targetIsName) {
      
      if(teamCardParent.classList.contains("active")) {
        teamCardParent.classList.remove('active');
        teamCardDesc.style.height = 0 + 'px';
      } else {
        for (let i = 0; i < teamCards.length; i++) {
          const teamCard = teamCards[i];
          teamCard.classList.remove('active');
          teamCard.lastElementChild.style.height = 0 + 'px';
        }
        teamCardParent.classList.add('active');
        teamCardDesc.style.height = teamCardDescHeight + 'px';
      }
    } 
    
  });
}


/**горизонтальный аккордеон */

let menuAcco = document.querySelector('.menu__acco');

horizontalAccordeon(menuAcco);

function horizontalAccordeon(element) {
  element.addEventListener('click', function (e) {
    e.preventDefault();
    
    let menuItems = document.querySelectorAll('.menu__item');
    let menuItemParent = e.target.closest('.menu__item');
    let isMenuButton = e.target.classList.contains('menu__button');
    let isMenuButtonText = e.target.classList.contains('menu__button-text');
    
    if(isMenuButton || isMenuButtonText) {
      
      if (menuItemParent.classList.contains('active')) {
        menuItemParent.classList.remove('active')
      } else {
        for (let i = 0; i < menuItems.length; i++) {
          const menuItem = menuItems[i];
          menuItem.classList.remove('active');
          
        }
        menuItemParent.classList.add('active');
      }
      
    }
  });
}

/**слайдшоу комментарии */


let commentsControls = document.querySelectorAll('.comments__avatar');
let comments = document.querySelectorAll('.comment');
let currentComment = 0;
let slideInterval = setInterval(nextComment,4000);




function nextComment() {
  goToComment(currentComment + 1);
}

for (let i = 0; i < commentsControls.length; i++) {
  const commentsControl = commentsControls[i];
  commentsControl.setAttribute('data-index',[i]);
  commentsControl.addEventListener('click', function () {
    this.classList.add('active');
    goToComment(commentsControl.getAttribute('data-index'));
  });
}

function goToComment(n) {  
  comments[currentComment].classList.remove('active');
  comments[currentComment].style.display = 'none';
  commentsControls[currentComment].classList.remove('active');
  currentComment = (n + comments.length)%comments.length;
  comments[currentComment].style.display = 'flex';
  commentsControls[currentComment].classList.add('active');
  setTimeout(() => {
    comments[currentComment].classList.add('active');
  }, 100);
}



/**слайдер */

slider();

function slider() {
  const sliderLeftButton = document.querySelector('.assortment__control--left');
  const sliderRightButton = document.querySelector('.assortment__control--right');
  const slider = document.querySelector('#slider');
  const slides = document.querySelectorAll('.assortment__item');
  const slide = document.querySelector('.assortment__item');
  
  let minRight = 0;
  let maxRight = (slides.length - 1) * slide.offsetWidth;
  let step = slide.offsetWidth;
  let currentRight = 0;
  
  slider.style.right = currentRight;
  
  function leftMove() {
    if (currentRight > minRight) {
      currentRight -= step;
      slider.style.right = currentRight + "px";
    } else {
      currentRight = maxRight;
      slider.style.right = maxRight + 'px';
    }
  }
  
  function rightMove() {
    if (currentRight < maxRight) {
      currentRight += step;
      slider.style.right = currentRight + "px";
    }  else {
      currentRight = minRight;
      slider.style.right = minRight + 'px';
    }
  }
  
  sliderLeftButton.addEventListener('click', e => {
    e.preventDefault();
    leftMove();
  });
  
  sliderRightButton.addEventListener('click', e => {
    e.preventDefault();
    rightMove();
  });
  
}


/**отзывы burger */

// let reviewButtons = document.querySelectorAll('.review-btn');
let reviews = document.querySelector('#reviews');

reviews.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('review-btn')) {
    let title = e.target.closest('.reviews__hover-block').children[0].innerHTML;
    let content  = e.target.closest('.reviews__hover-block').children[1].firstElementChild.textContent;
    
    overlay.open();
    overlay.setContent(content,title);
    console.log(e.target.closest('.reviews__hover-block').children[0]);
    
  }
})


/**модальное окно */

const openButton = document.querySelector(".openOverlay");
const template = document.querySelector("#overlayTemplate").innerHTML;
const overlay = createOverlay(template);

// openButton.addEventListener("click", function() {
//   overlay.open();
//   overlay.setContent("Спасибо, данные сохранены");
// });

function createOverlay(template) {
  let fragment = document.createElement('div');
  
  fragment.innerHTML = template;
  
  const overlayElement = fragment.querySelector(".overlay");
  const contentElement = fragment.querySelector(".overlay__content");
  const contentTitle = fragment.querySelector(".overlay__title");
  const closeElement = fragment.querySelector(".overlay__close");
  
  fragment = null;
  
  overlayElement.addEventListener("click", e => {
    if (e.target === overlayElement) {
      closeElement.click();
    }
  });
  
  closeElement.addEventListener("click", e => {
    e.preventDefault();
    document.body.removeChild(overlayElement);
    document.body.classList.remove('locked');
  });
  
  return {
    open() {
      document.body.appendChild(overlayElement);
      document.body.classList.add('locked');
    },
    close() {
      closeElement.click();
    },
    setContent(content,title) {
      contentElement.innerHTML = content;
      if(title) {
        contentTitle.innerHTML = title;
      }
    }
  };
}


/**обработка формы */
const myForm = document.querySelector('#myForm');
let sendFormButton = document.querySelector('#sendForm');

sendFormButton.addEventListener('click', function (e) {
  e.preventDefault();
  
  let formData = new FormData();
  
  formData.append("name", myForm.elements.name.value);
  formData.append("phone", myForm.elements.phone.value);
  formData.append("comment", myForm.elements.comment.value);
  formData.append("to", "v8a8rt@gmail.com");   
  
  let url = "https://webdev-api.loftschool.com/sendmail/";
  
  const xhr = new XMLHttpRequest();
  
  xhr.responseType = "json";
  xhr.open("POST", url);
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xhr.send(formData);
  
  
  xhr.addEventListener('load', function () {
    console.log(xhr);
    
    if (xhr.status >= 400) {
      overlay.open();
      overlay.setContent('Что-то пошло не так');
    } else {
      overlay.open();
      overlay.setContent(xhr.response.message);
    }
  })
})



/**OPS */

const sections = $('.section');
const display = $('.maincontent');
let inscroll = false;

const switchActiveClassSideMenu = menuItemIndex => {
  $('.page-dots__item')
    .eq(menuItemIndex)
    .addClass('active')
    .siblings()
    .removeClass('active');
}

const performTransition = sectionEq => {
  if (inscroll) return;
  
  inscroll = true;
  
  const position = `${sectionEq * -100}%`;
  
  sections
  .eq(sectionEq)
  .addClass("active")
  .siblings()
  .removeClass("active");
  
  display.css({
    transform: `translateY(${position})`
  });
  
  setTimeout(() => {
    switchActiveClassSideMenu(sectionEq);
    inscroll = false;
  }, 1000 + 300); //время transition + время за которое успокоется инерция
};

const scrollToSection = direction => {
  const activeSection = sections.filter(".active");
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();
  
  if (direction === "next" && nextSection.length) {
    performTransition(nextSection.index());
  }
  
  if (direction === "prev" && prevSection.length) {
    performTransition(prevSection.index());
  }
};

$('.wrapper').on('wheel', e => {
  const deltaY = e.originalEvent.deltaY;
  
  if(deltaY > 0) {
    scrollToSection("next");
  }
  
  if(deltaY < 0) {
    scrollToSection("prev");
  }
})

$(document).on("keydown", e => {
  switch(e.keyCode) {
    case 38:
    scrollToSection('prev');
    break;
    case 40:
    scrollToSection('next');
    break;
  }
})

$("[data-scroll-to]").on('click', e => {
  e.preventDefault();

  const target = $(e.currentTarget).attr('data-scroll-to');

  performTransition(target);
});

$(window).swipe({
  swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
   const nextOrPrev = direction === "up" ? "next" : "prev";
    scrollToSection(nextOrPrev);
    
  }
})