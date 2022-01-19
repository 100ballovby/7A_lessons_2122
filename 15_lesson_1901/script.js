function change_bg() {
    // заменим цвет фона страницы
    document.body.style.background = 'red';

    // через 3 секунды вернем фон обратно
    setTimeout(() => document.body.style.background = '', 3000)
}


function light_up(selector, color) {
    let elem = document.querySelector(selector);
    // ^ ищу на странице элемент с селектором selector
    elem.style.background = color;
}

function number_validation(tag) {
    let div = document.createElement('div');
    // ^ createElement - создает на странице новый тег с названием div
    div.classList.add('alert'); // добавляю новому элементу класс

    let check = document.querySelector(tag).value;
    // забираю текст из поля для ввода
    let msg;

    if (check === '') {
        msg = 'Вы не ввели значение!';
    } else if (check >= 1 && check <= 10) {
        msg = 'Спасибо, все верно!';
    } else {
        msg = 'Число не соответствует условиям!';
    }

    div.innerHTML = msg;
    // innerHTML добавляет текст внутрь блока
    let container = document.querySelector('.container');
    container.appendChild(div);
}


