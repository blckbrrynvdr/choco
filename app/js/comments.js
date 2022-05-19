const myNodeList = document.querySelectorAll('.team__card');
const myHtmlCollection = document.getElementsByClassName('team__card');
const teamList1 = document.querySelector('.team__list');
const newCard = `<li class="team__card">
<div class="team__photo">
    <img src="./images/team/boris.jpg" alt="Борис" class="team__pic">
</div>
<a href="#" class="team__name">Борис Федорович</a>
<div class="team__desc">
    <div class="team__content">
        <div class="team__photo team__photo_hidden">
            <img src="./images/team/boris.jpg" alt="Борис" class="team__pic">
        </div>
        <div class="team__position">Главный технолог</div>
        <div class="team__text">Отвечает за вкусовые качества и калорийность.</div>
    </div>
</div>
</li>`;

console.log('myNodeList', myNodeList);
console.log('myHtmlCollection', myHtmlCollection);

teamList1.innerHTML += newCard;


console.log('myNodeList', myNodeList);
console.log('myHtmlCollection', myHtmlCollection);

// [1,2,3,4].forEach(element => console.log(element));

// myNodeList.forEach(element => console.log(element));

// myHtmlCollection.forEach(element => {
//     console.log('myHtmlCollection.forEach(element', element);
// });

// for (let index = 0; index < myHtmlCollection.length; index++) {
//     const element = myHtmlCollection[index];
    
// }












const teamList = document.querySelector('.team__list');

function openItem(button) {
    const contentWrap = button.nextElementSibling;
    const content = contentWrap.firstElementChild;
    const currentHeight = content.offsetHeight;

    contentWrap.style.height = currentHeight + 'px';
    button.classList.add('team__name--active');
}

function closeItem(button) {
    if (!button) return;
    const contentWrap = button.nextElementSibling;
    contentWrap.style.height = 0;
    button.classList.remove('team__name--active');
}

teamList.addEventListener('click', function (event) {
    event.preventDefault();

    const target = event.target;
    const activeItem = document.querySelector('.team__name--active');
  
    if (target.classList.contains('team__name')) {
        if (target.classList.contains('team__name--active')) {
            closeItem(target);
        } else {
            closeItem(activeItem);
            openItem(target);
        }
    }

})