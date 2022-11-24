const teamList = document.querySelector('.team__list');

// функция открытия описания карточки
function openItem(button) {
    const contentWrap = button.nextElementSibling;
    const content = contentWrap.firstElementChild;
    const currentHeight = content.offsetHeight;

    contentWrap.style.height = currentHeight + 'px';
    button.classList.add('team__name--active');
}

// функция закрытия карточки
function closeItem(button) {
    const contentWrap = button.nextElementSibling;
    contentWrap.style.height = 0;
    button.classList.remove('team__name--active');
}

teamList.addEventListener('click', function (e) {
    e.preventDefault();
    const target = e.target;

    const activeItem = document.querySelector('.team__name--active');

    if (activeItem) {
        closeItem(activeItem);
    }

    if (activeItem === target) return;

    if (target.classList.contains('team__name')) {
        openItem(target);
    }
})

