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

// $(window).swipe({
//   swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
//    const nextOrPrev = direction === "up" ? "next" : "prev";
//     scrollToSection(nextOrPrev);
    
//   }
// })


let video;
let durationControl; 
let soundControl;
let intervalId;

//

// документ полностью загружен
$(document).ready(function(){

    video = document.getElementById("player"); 

    // вешаем обработчик события onclick на тег video
    video.addEventListener('click', playStop);

    // обработчики событий для кнопок play
    let playButtons = document.querySelectorAll(".play");
    for (let i = 0; i < playButtons.length;i++){
        playButtons[i].addEventListener('click',playStop);
    }

    // обработчик событий для кнопки динамик
    let micControl = document.getElementById("mic");
    micControl.addEventListener('click',soundOf);
    
    // обработчики событий для ползунка продолжительности видео
    durationControl = document.getElementById("durationLevel");    
    durationControl.addEventListener('click',setVideoDuration);
    durationControl.addEventListener('onmousemove',setVideoDuration);
    durationControl.addEventListener('mousedown', stopInterval); 
    durationControl.min = 0;
    durationControl.value = 0;    

    // обработчики событий для ползунка громокости
    soundControl = document.getElementById("micLevel");    
    soundControl.addEventListener('click', changeSoundVolume);
    soundControl.addEventListener('onmousemove', changeSoundVolume);

    // задаем максимальные и минимальные значения громокости
    soundControl.min = 0;
    soundControl.max = 10;
    // soundControl.step = 1;
    // присваиваем ползунку максимальное значение
    soundControl.value = soundControl.max;
    

    //обрабатываем окончание видео
    video.addEventListener('ended', function () {
        $(".video__player-img").toggleClass("video__player-img--active");
        video.currentTime = 0;
        $('.duration__img').removeClass('active');
    });
});

/*
 Воспроизведение видео
*/
function playStop(){
    // показывает или скрывает белую кнопку play
    $(".video__player-img").toggleClass("video__player-img--active");  
    // присваиваем ползунку продолжительности максимальное значение равное продолжительности нашего видео (в секундах)
    durationControl.max = video.duration;

    // проверим стоит ли видео на паузе, если да то продолжим воспроизведение. Если, наоборот, проигрыавыется, то остановим.
    if (video.paused){
        // запускаем видео
        video.play();
        intervalId = setInterval(updateDuration,1000/60);
        $('.duration__img').addClass('active');
    }else{
        // останавливаем видео
        video.pause();  
        clearInterval(intervalId);
        $('.duration__img').removeClass('active');
    }
}

function stopInterval(){
    video.pause();
    clearInterval(intervalId);
}

/*
    Реализует возможность перемотки нашего видео
*/
function setVideoDuration(){
    if (video.paused){
        video.play();
        $(".video__player-img").addClass("video__player-img--active");
        $('.duration__img').addClass('active');
    }else{
        video.pause();  
        $(".video__player-img").removeClass("video__player-img--active");
        $('.duration__img').removeClass('active');
    }
    video.currentTime = durationControl.value;  
    intervalId = setInterval(updateDuration,1000/60);
}


/*
  Функция для обновления позиции ползунка продолжительности видео.   
*/
function updateDuration(){    
    durationControl.value = video.currentTime;
}


/*
    Управление звуком
*/
function soundOf(){    
    /*
        Делаем проверку уровня громкости. 
        Если у нас нашего видео есть звук, то мы его выключаем. 
        Предварительно запомнив текущую позицию громкости в переменную soundLevel
    */
    if (video.volume === 0){
        video.volume = soundLevel;
        soundControl.value = soundLevel*10;
        $('.sound').removeClass('active');
    }else{
        /*
            Если у нашего видео нет звука, то выставляем уровень громкости на прежний уровень.
            Хранится в перменной soundLevel
        */
       soundLevel = video.volume;
       video.volume = 0;
       soundControl.value = 0;
       $('.sound').addClass('active');

    }    
}

/*
    Управление звуком видео
*/
function changeSoundVolume(){
    /*
        Св-во volume может принимать значения от 0 до 1
        Делим на 10 для того что бы, была возможность более точной регулировки видео. 
   video.volume 0 .... 1 
   soundControl 0 .... 10
        */
       
   
    video.volume = soundControl.value/10; 
    if(video.volume == 0) {
        $('.sound').addClass('active');
    } else {
        $('.sound').removeClass('active');
    }
    console.log('значение volume у видео '+video.volume);
    console.log('значение value у micLevel '+soundControl.value/10);
    /**У ползунка изначально задано минимальное значение 0 и максимальное 10 чтоб дать нам 10 положений
     * регулировки
     */
}