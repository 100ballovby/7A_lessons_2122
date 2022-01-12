function say_hello(name) {  // <- определение функции
    let msg = 'Hello, ' + name + '!'; // <- тело функции
    return msg  // <- возврат результата работы функции
}

// присваиваю результат работы функции переменной
let greet = say_hello('Demid'); // <- вызов функции
console.log(greet);


function power(num, pow=2) {
    let res = 1;
    for (let i = 0; i < pow; i++) {
        res *= num;
    }
    return res
}

let s = power(2, 5);
let s1 = power(5);
console.log(s);
console.log(s1);

