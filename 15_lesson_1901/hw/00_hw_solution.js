function salary(money) {
    let tax = 0.35;
    if (money > 10000) {
        tax = 0.45;
    }
    let res = money - (money * tax);
    return res;
}


console.log(salary(1500));

