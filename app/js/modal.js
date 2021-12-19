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
        setContent(content, title) {
            contentElement.innerHTML = content;
            if (title) {
                contentTitle.innerHTML = title;
            }
        }
    };
}