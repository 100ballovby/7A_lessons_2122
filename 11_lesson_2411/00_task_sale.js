// Найти минимум из 3 чисел. Числа вводятся пользователем

let num1, num2, num3;
num1 = Number(prompt('Число 1: ', ''));
num2 = Number(prompt('Число 2: ', ''));
num3 = Number(prompt('Число 3: ', ''));

if (num1 < num2 && num1 < num3) {
    alert('Наименьшее: ' + num1);
} else if (num2 < num1 && num2 < num3) {
    alert('Наименьшее: ' + num2);
} else {
    alert('Наименьшее: ' + num3);
}
