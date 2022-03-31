const menu = document.querySelector("#horizontalMenu");
const items = document.querySelectorAll(".menu__item");

// фунция вычисления ширины
const getItemWidth = (item) => {
  // ширина для десктопов
  let resultWidth = 524;

  // вычислить ширину экрана
  const windowWidth = window.innerWidth;
  // вычислить ширину кнопки
  const itemWidth = item.offsetWidth;

  // посмотреть не мобильные ли у нас устройства
  const isTablet = window.matchMedia("(max-width: 768px)").matches;
  const isMobile = window.matchMedia("(max-width: 480px)").matches;
  // если планшет
  if (isTablet) {
    // то ширина будет (ширинаЭкрана - ширинаКнопки * количествоКнопок)
    resultWidth = windowWidth - itemWidth * items.length;
  }
  // если телефон
  if (isMobile) {
    // то ширина будет (ширинаЭкрана - ширинаКнопки)
    resultWidth = windowWidth - itemWidth;
  }
  // после расчетов возвращаем что насчитали
  return resultWidth;
};

// установитьШирину (кнопка, ширина)
const setItemWidth = (item, width) => {
  // находим у кнопки соседа снизу
  const itemContent = item.nextElementSibling;
  // потом у этотого соседа находим первого потомка
  const itemText = itemContent.firstElementChild;
  // устанавливам им ширину
  itemContent.style.width = `${width}px`;
  itemText.style.width = `${width}px`;
};

// закрытьЭлемент
const closeItem = (item) => {
  // находим ближайшего родителя кнопки
  const itemParent = item.parentElement;
  // снимаем у него активный класс
  itemParent.classList.remove("menu__item--active");
  // снимаем у кнопки активный класс
  item.classList.remove("menu__button--active");
  // устанавливаем для элемента нулевую ширину
  setItemWidth(item, 0);
};

// открытьЭлемент
const openItem = (item) => {
  // находим ближайшего родителя кнопки
  const itemParent = item.parentElement;
  // добавляем ему активный класс
  itemParent.classList.add("menu__item--active");
  // добавляем самой кнопке активный класс
  item.classList.add("menu__button--active");
  // вычисляем ширину для элемента
  const width = getItemWidth(item);
  // устанавливаем ширину
  setItemWidth(item, width);
};

// при клике на список меню
menu.addEventListener("click", (e) => {
  e.preventDefault();
  // находим цвет клика
  const target = e.target;
  // узнаём, есть ли на этой цели активный класс
  const isActive = target.classList.contains("menu__button--active");
  // находим есть ли вообще на странице активный класс
  const activeElement = document.querySelector(".menu__button--active");

  // если мы кликнули по кнопке уже открытого элемента
  if (target.classList.contains("menu__button") && isActive) {
    // и если этот активный элемент вообще есть
    if (activeElement) {
      // то закрываем его
      closeItem(activeElement);
    }
  }
  // если мы кликнули по кнопке закрытого открытого элемента
  if (target.classList.contains("menu__button") && !isActive) {
    // и если есть активный элемент 
    if (activeElement) {
      // то сначала закрываем его
      closeItem(activeElement);
    }
    // а потом открываем тот, по кнопке которого нажали
    openItem(target);
  }
});

// при изменении размеров окна
window.addEventListener("resize", () => {
  // находим кнопку открытого элемента
  const activeButton = document.querySelector(".menu__button--active");
  // если она есть
  if (activeButton) {
    // то закрываем этот элемент
    closeItem(activeButton);
  }
});
