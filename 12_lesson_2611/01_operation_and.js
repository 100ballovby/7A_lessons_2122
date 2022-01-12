// Операция И: &&

let password = '12345'
let login = 'zodiac'

if (login === 'zodiac' && password === '1234') {
    console.log('Добро пожаловать!')
} else {
    console.log('Неправильные данные!')
}

/*И «&&» находит первое ложное значение
При нескольких подряд операторах И
Оператор && выполняет следующие действия:

1) Вычисляет операнды слева направо.
2) Каждый операнд преобразует в логическое
значение. Если результат false, останавливается
и возвращает исходное значение этого операнда.
3) Если все операнды были истинными, возвращается
последний.
Другими словами, И возвращает первое ложное
значение. Или последнее, если ничего не найдено.

Вышеуказанные правила схожи с поведением ИЛИ.
Разница в том, что И возвращает первое ложное
значение, а ИЛИ первое истинное.*/