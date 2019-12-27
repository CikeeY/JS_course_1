let menuItem = document.getElementsByClassName('menu-item'),
    menuItem5 = document.createElement('li'),
    column = document.getElementsByClassName('column')[1],
    opinion = prompt('Что вы думаете о apple');

menuItem[1].innerHTML = "Второй пункт";
menuItem[2].innerHTML = "Третий пункт";

menuItem5.classList.add('menu-item');
document.querySelector('.menu').appendChild(menuItem5);
menuItem5.innerHTML = 'Пятый пункт';

document.body.style.background = 'url(img/apple_true.jpg)';

document.querySelector('#title').innerHTML = 'Мы продаем только подлинную технику Apple';

column.removeChild(document.querySelector('.adv'));

document.querySelector('#prompt').innerHTML = opinion;