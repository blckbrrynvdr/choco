const buttonLeft = document.querySelector('#sliderLeft');
const buttonRight = document.querySelector('#sliderRight');
const itemsList = document.querySelector("#slider");
const items = document.querySelectorAll(".assortment__item");

let step = items[0].getBoundingClientRect().width;
const minRight = 0;
let maxRight = (items.length - 1) * step;

let currentRight = 0;
let currentStep = 0;

const listStyles = getComputedStyle(itemsList);
const initialTransition = `${listStyles["transition-property"]} ${listStyles["transition-duration"]}`;


itemsList.style.right = currentRight;

function updateSlider() {
    itemsList.style.transition = 'none';
    step = items[0].getBoundingClientRect().width;
    maxRight = (items.length - 1) * step;
    currentRight = step * currentStep;
    itemsList.style.right = `${currentRight}px`;
}

window.addEventListener("resize", updateSlider);

buttonRight.addEventListener("click", e => {
    e.preventDefault();
    itemsList.style.transition = initialTransition;
    // Когда текущее смещение вправо РАВНО максимально возможному
    // Возвращаемся в начало
    if (currentRight === maxRight) {
        currentRight = minRight;
        itemsList.style.right = `${currentRight}px`;
        currentStep = 0;
        return;
    }

    // Если текущее смещение вправо меньше максимально возможного
    // То смещаем слайды вправо
    if (currentRight < maxRight) {
        currentRight += step;
        itemsList.style.right = `${currentRight}px`;
        currentStep++;
    }
});


buttonLeft.addEventListener("click", e => {
    e.preventDefault();
    itemsList.style.transition = initialTransition;
    // Если текущее смещение влево РАВНО минимально возможному
    // Смещаемся в конец
    if (currentRight === minRight) {
        currentRight = maxRight;
        itemsList.style.right = `${currentRight}px`;
        currentStep = items.length - 1;
        return;
    }

    // Если текущее смещение влево меньше минимально возможного
    // То смещаем слайды влево
    if (currentRight > minRight) {
        currentRight -= step;
        itemsList.style.right = `${currentRight}px`;
        currentStep--;
    }
});