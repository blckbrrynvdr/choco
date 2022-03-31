const commentAvatars = document.querySelector("#commentAvatars");

// функиця показа нужного отзыва по имени
const findReview = (reviewName) => {
  // находим текущий отображаемый отзыв (у него должен быть активный класс)
  const activeReview = document.querySelector(".comment.active");
  // снимаем с текущего отображаемого отзыва активный класс
  activeReview.classList.remove("active");
  // находим нужный отзыв по имени (по селектору дата атрибута)
  let currentItem = document.querySelector(`.comment[data-item="${reviewName}"]`);
  // и ставим на него активный класс (фактически показываем нужный отзыв)
  currentItem.classList.add("active");
};
// при кликах на список аватарок
commentAvatars.addEventListener("click", (e) => {
  e.preventDefault();
  // находим по какому именно элементу кликнули
  const target = e.target;
  // если кликнули на картинку
  if (target.classList.contains("comments__image")) {
    // ищем текущую активную аватарку
    const activeListItem = document.querySelector(".comments__avatar.active");
    // если нашли
    if (activeListItem) {
      // убираем с неё активный класс (зеленую рамку)
      activeListItem.classList.remove("active");
    }
    // у картинки есть родитель - кнопка
    const button = target.parentElement;
    // а у кнопки есть родитель <li>
    const listElement = button.parentElement;
    // берем у кнопки имя нужного для показа отзыва
    const id = button.getAttribute("data-open");
    // с <li> снимаем активный класс 
    listElement.classList.add("active");
    // запускаем функцию показа отзыва и передаем полученное с кнопки имя отзыва 
    findReview(id);
  }
});
