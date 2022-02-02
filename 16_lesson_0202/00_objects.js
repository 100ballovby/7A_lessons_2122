let user = {
    first_name: 'John',
    last_name: 'Doe',
    email: 'example@example.com',
    city: 'Washington'
};

console.log(user.first_name + ' ' + user['last_name']);  // вывести значения по ключам
console.log(user); // вывести весь объект

for (let key in user) {  // для каждого ключа в объекте user
    console.log('Ключ: ' + key);
    console.log('Значение: ' + user[key]);
}

let users = [
    {
        first_name: 'John',
        last_name: 'Doe',
        email: 'example@example.com',
        city: 'Washington'
    },
    {
        first_name: 'Mary',
        last_name: 'Doe',
        email: 'marydoe@example.com',
        city: 'Orlando'
    },
    {
        first_name: 'Julia',
        last_name: 'Doe',
        email: 'juliadoe@example.com',
        city: 'Warsaw'
    }
];

for (let obj = 0; obj < users.length; obj++) {  // перебираю массив объектов
    console.log(users[obj].first_name + ' ' + users[obj].last_name);  // обращаюсь к каждому из объектов через индекс
    console.log('Город: ' + users[obj].city);
}



