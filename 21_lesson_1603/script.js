let data = [
    {
        'browser': 'Mozilla',
        'per_day': 487,
        'whole': 1292
    },
    {
        'browser': 'Chrome',
        'per_day': 887,
        'whole': 3679
    },
    {
        'browser': 'Opera',
        'per_day': 342,
        'whole': 762
    },
    {
        'browser': 'Safari',
        'per_day': 788,
        'whole': 4732
    },
]

function fill_table(array) {
    let table = document.querySelector('tbody'); // нахожу тег содержимого таблицы
    for (let i = 0; i < array.length; i++) {
        let tr = document.createElement('tr');  // создаю строчку таблицы
        for (let key in array[i]) {  // перебираю элементы массива
            let td = document.createElement('td');  // создаю ячейку таблицы
            td.innerHTML = array[i][key];  // записываю в ячейку текст из объекта
            tr.appendChild(td);  // добавляю ячейку в строку
        }
        table.appendChild(tr);  // добавляю строку в таблицу
    }
}

fill_table(data);
