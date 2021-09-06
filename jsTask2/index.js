
//--jsTask2

/* --задача № 1 возрастные группы--

let age = +prompt(`Введите свой возраст`);
if (age<=0){
    alert(`Вы ввели недопустимое значение для возраста`);
} else if (age<=12) {
    alert(`Вы еще ребенок`);
} else if (age > 12 && age <= 18) {
    alert(`Вы подросток`);
} else if (age > 18 && age <= 60) {
    alert(`Вы уже взрослый человек`);
} else if (age > 60 && age <= 100) {
    alert(`Вы наверно пенсионер`)
} else {
    alert(`Вы ввели недопустимое значение для возраста`)
}

/*--задача № 2 спецсимвол по цифре--

let a = +prompt(`Введите цифру от 0 до 9`);
switch (a) {
    case 0:
        alert(`0-)`);
    break;
    case 1:
        alert(`1-!`);
    break;
    case 2:
        alert(`2-@`);
    break;
    case 3:
        alert(`3-#`);
    break;
    case 4:
        alert(`4-$`);
    break;
    case 5:
        alert(`5-%`);
    break;
    case 6:
        alert(`6-^`);
    break;
    case 7:
        alert(`7-&`);
    break;
    case 8:
        alert(`8-*`);
    break;
    case 9:
        alert(`9-(`);
    break;
    default:
        alert(`Нет такого значения`)
}

/*--задача № 3 проверка одинаковых цифр--

let a = +prompt(`Введите трехзначное число`);
let a1 = Math.trunc (a/100);    // первая цифра
let a2 = Math.trunc (a%100/10); // вторая цифра
let a3 = a%10;                  // третья цифра         
let result = (a1 == a2 || a1 == a3 || a2 == a3) ? //сравним друг с другом
alert(`В числе есть одинаковые цифры`) :
alert(`В числе нет одинаковых цифр`);



/*--задача № 4 прверка високосного года--

let a = +prompt(`Введите год YYYY`);
let result = (a%400 === 0 || a%4 === 0 && a%100 != 0) ? // проверка кратности
alert(`${a}/400=${a%400} или ${a}/4=${a%4} и не кратен ${a}/100=${a%100} -Год високосный`) :
alert(`${a}/400=${a%400} или ${a}/4=${a%4} и кратен ${a}/100=${a%100} -Год не високосный`);


/*--задача № 5 проверка числа на полиндром--

let a = +prompt(`Введите пятизначное число`);
let a1 = Math.trunc (a/10000);    // первая цифра
let a2 = Math.trunc (a%10000/1000);  // вторая цифра
let a4 = Math.trunc (a%100/10);   // четвертая цифра
let a5 = a%10;                    // пятая цифра   
let result = (a1 == a5 && a2 == a4) ? //сравние 1 с 5 и 2 с 4
alert(`${a1} ${a2} = ${a4} ${a5} это число полиндром`) :
alert(`${a1} ${a2} не = ${a4} ${a5} это число не полиндром`);

/*--задача № 6 конвертер валют--

let a = +prompt(`Введите сумму USD`)
let val = prompt(`Введите валюту в которую нужно перевести EUR, UAN или AZN`)
switch (val) {
    case `EUR`:
        alert(`${a}USD = ${a*0.8418}EUR`);
    break;
    case `UAN`:
        alert(`${a}USD = ${a*26.8242}UAN`);
    break;
    case `AZN`:
        alert(`${a}USD = ${a*1.7}AZN`);
    default:
        alert(`Введено неверное значение валюты`)
}

/*--задача № 7 расчет оплаты со скидкой--

let a = +prompt (`Введите сумму покупки`);
if (a > 0 && a < 200) {
    alert (`Сумма оплаты =${a} скидка =0`);
} else if (a >= 200 && a < 300) {
    alert (`Сумма оплаты =${a - a/100*3} скидка 3% = ${a/100*3}`);
} else if (a >= 300 && a < 500) {
    alert (`Сумма оплаты =${a - a/100*5} скидка 5% = ${a/100*5}`);
} else if (a >= 500) {
    alert (`Сумма оплаты =${a - a/100*7} скидка 7% = ${a/100*7}`);
} else if (a <= 0) {
    alert (`Вы ввели нулевое либо отрицательное значение`)
}

/*--задача № 8 квадрат в окружности--

let okr = +prompt(`Введите длину окружности (мм.)`);
let kv = +prompt(`Введите периметр квадрата (мм.)`);
let result = (okr/Math.PI <= kv/4) ? //сравним диаметр со стороной

alert(`Квадрат поместится в окружность!
Чтобы окружность поместилась в квадрат её диаметр 
должен быть меньше либо равен длине стороны квадрата
Диаметр окружности      = ${Math.trunc (okr/Math.PI)}
Длина стороны квадрата = ${kv/4}`):

alert(`Квадрат не поместится в окружность!
Чтобы окружность поместилась в квадрат её диаметр 
должен быть меньше либо равен длине стороны квадрата
Диаметр окружности      = ${Math.trunc (okr/Math.PI)} 
Длина стороны квадрата = ${kv/4}`);

/*--задача № 9 тестирование--

let a1 = +prompt(`               Что называется сервером? 
Выберите верный ответ:
1 - Компьютер, который запрашивает информацию.
2 - Компьютер, который хранит и отдает информацию.
3 - Программа для отправки информации.`);

let a2 = +prompt(`               Что такое IP-адрес? 
Выберите верный ответ:
1 - Текстовый идентификатор компьютера.
2 - Набор правил, на котором компьютеры взаимодействуют друг с другом.
3 - Числовой уникальный идентификатор компьютера.`);

let a3 = +prompt(`               Что такое домен? 
Выберите верный ответ:
1 - Уникальный идентификатор компьтера в интернете.
2 - Программа для получения данных.
3 - Сервер для отправки данных пользователю.`);

b = 0;
if (a1 == 2){
    b = b + 2;
} 

if (a2 == 3){
    b = b + 2;
} 

if (a3 == 1){
    b = b + 2;
}

alert(`Вы набрали ${b} баллов`);


/*--задача № 10 определить следующую дату--*/

let date = prompt(`Введите дату в формате DD.MM.YYYY`);
day = Number(date.substr(0,2)); // день вырезаем из текста и преобразуем в число
mon = Number(date.substr(3,2)); // месяц вырезаем из текста и преобразуем в число
yar = Number(date.substr(6));   // год вырезаем из текста и преобразуем в число
//alert(`Выбрана дата: число=${day}, месяц=${mon}, год=${yar}`); //проверка

nextday = 0;
nextmon = 0;
nextyar = 0;
if (mon == 1 || mon == 3 || mon == 5 || mon == 7 || mon == 8 || mon == 10 || mon == 12) { // месяцы с 31 днем
    if (day == 31) {
        nextday = 1; 
        nextmon = mon + 1;
        nextyar = yar;
    } else {
        nextday = day + 1;
        nextmon = mon;
        nextyar = yar;
    } 
}

if (mon == 4 || mon == 6 || mon == 9 || mon == 11) { // месяцы с 30 днями
    if (day == 31) {
        alert(`Введена не корректная дата`)
    }
    if (day == 30) {
        nextday = 1; 
        nextmon = mon + 1;
        nextyar = yar;
    } else {
        nextday = day + 1;
        nextmon = mon;
        nextyar = yar;
    } 
}

if (mon == 2) { // февраль
    if (day == 28) {
        nextday = 1; 
        nextmon = mon + 1;
        nextyar = yar;
    } else {
        nextday = day + 1;
        nextmon = mon;
        nextyar = yar;
    } 
}

if ((mon == 2) && (yar%400 === 0 || yar%4 === 0 && yar%100 != 0)) { // високосный год
    if (day == 29) {
        nextday = 1; 
        nextmon = mon + 1;
        nextyar = yar;
    } else {
        nextday = day + 1;
        nextmon = mon;
        nextyar = yar;
    } 
}


if ((day == 31) && (mon == 12)) { // новый год
    nextday = 1;
    nextmon = 1;
    nextyar = yar + 1;
}


if ((nextday <= 9) && (nextmon <= 9)){
    alert(`следующая дата будет 0${nextday}.0${nextmon}.${nextyar}`);
}






