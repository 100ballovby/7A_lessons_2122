/*
1. String(x) - приводит х к строчке
2. Number(x) - приводит х к числу
3. Boolean(x) - приводит х к логическому значению
*/

let x = true;
console.log('х сейчас: ' + typeof x);
x = String(x);
console.log('х преобразован: ' + typeof x);

let num1 = '65', num2 = 3;
console.log('num1:' + typeof num1);
num1 = Number(num1);
console.log('num1:' + typeof num1);
console.log(num1 + num2);

console.log(Number('я хочу число'))  // не все строки могут быть преобразованы в число
console.log(Number('4.56'))

console.log('1: ' + Boolean(1));  // true
console.log('0: ' + Boolean(0));  // false
console.log('467: ' + Boolean(467));  // true
console.log('-36: ' + Boolean(-36));  // true
