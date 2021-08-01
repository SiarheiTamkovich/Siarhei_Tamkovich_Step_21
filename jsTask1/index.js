//const mile = 0.621371;
// let km = +prompt('Введите км');
//alert(`mile: ${km*mile}`);

//let firstNumber = +prompt('введите первое число');
//let secondNumber = +prompt('введите второе число');
//alert(`${firstNumber + secondNumber}`)

//let tecHour = +prompt(`Введите текущий час`);
//let tecMinut = +prompt(`введите текущие минуты`);
//alert(`До следующего дня ${23 - tecHour} часов ${60 - tecMinut} минут`)

//let nomber = +prompt(`введите трехзначное число`);
//alert(`вторая цифра введенного числа = ${(nomber%100 - nomber%10)/10});

//let nomber = +prompt(`введите пятизначное число`);
//alert(`последняя цифра числа ${nomber%10} новое число ${nomber%10*10000+nomber%10000}`);

//let allprofit = +prompt(`Введите общую сумму выручки от продаж $:`);
//alert(`Ваша зарплата в этом месяце составила 250$ + 10% от ${allprofit} = ${allprofit/10} Итого: ${allprofit/10+250}$`)

let data = +prompt(`Введите целое число`);
if (data === 0) {
    alert(`Введенное число равно нулю`)
} else if (data > 0) {
    alert(`Введенное число больше нуля`)
} else if (data < 0) {
    alert(`Введенное число меньше нуля`)
}