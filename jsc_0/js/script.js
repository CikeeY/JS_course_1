let receiveBtn = document.getElementById('receive'),
    nameInput = document.getElementsByClassName('contactform_name')[0],
    phoneInput = document.getElementsByClassName('contactform_phone')[1],
    closeBtn = document.querySelector('.close'),
    modal = document.querySelector('.modal'),
    text = document.getElementsByName('message')[0];


receiveBtn.addEventListener('click', function () {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});

nameInput.addEventListener('input', function () {
    if (phoneInput.value == '') {
        text.value = 'Вас зовут ' + nameInput.value + '.';
    } else {
        text.value = 'Вас зовут ' + nameInput.value + '. Ваш номер ' + phoneInput.value + '.';
    }
    if (nameInput.value == '') {
        if (phoneInput.value == '') {
            text.value = '';
        } else {
            text.value = 'Ваш номер ' + phoneInput.value + '.';
        }
    }
});

phoneInput.addEventListener('input', function () {

    if (nameInput.value != "") {
        text.value = 'Вас зовут ' + nameInput.value + '. Ваш номер ' + phoneInput.value + '.';
    } else {
        text.value = 'Ваш номер ' + phoneInput.value + '.';
    }
    if (phoneInput.value == '') {

        if (nameInput.value == '') {
            text.value = '';
        } else {
            text.value = 'Вас зовут ' + nameInput.value + '.';
        }
    }
});