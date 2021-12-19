/**обработка формы */
const myForm = document.querySelector('#myForm');
let sendFormButton = document.querySelector('#sendForm');

sendFormButton.addEventListener('click', function(e) {
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


    xhr.addEventListener('load', function() {
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