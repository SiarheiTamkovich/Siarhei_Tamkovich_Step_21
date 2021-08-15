//--jsTask5 Classwork Functions---

/* --Task № 1  --

function checkNumber(a, b) {
    return Math.min(a,b)
}
document.write (checkNumber(5, 7));

/* --Task № 2 chislo v stepen  --

function calc(num, stepen){
    return Math.pow(num, stepen)
}
console.log(calc(5, 7))

/* --Task № 3 calculator --

function calc(num1, num2, znak){
    switch(znak) {
        case `+`:
            return num1 + num2;
        case `-`:
            return num1 - num2;
        case `*`:
            return num1 * num2;
        case `/`:
            return num1 / num2;
        default:
            return `Недоступен этот знак`;
    }
}

console.log(calc(5, 7, `+`));

/* --Task № 4 Simple --


function SimpleNomber (a){
    var del = 0;
    let flag = true;
    for(let i= 2; i< a; i++) {
        if (a%i === 0) {
            del = i;
            document.write(`${a} делится на ${del} без остатка <br>`);
            flag = false;
        } 
    }
flag ? document.write(`<br> Итог: ${a} простое число`): 
document.write(`<br> Итог: ${a} не простое число`);
}
let a = +prompt(`Введите число `);
SimpleNomber(a);

/* --Task № 5 multiplication table --

function multiTable(start, stop){
    let rez = 0;
    for (var ii = 1; ii<=stop; ii++){
        for (var i = 1; i<=10; i++){
          rez = start * i;
          document.write(`${start} * ${i} = ${rez}` + `<br>`);
        }
        document.write(`<br>`);
        start++;
    }
}
multiTable(2, 9)

/* --Task № 6 ostatok ot delenia --

function ostDel(chislo, percent ){
//    console.log(chislo % percent);
    return Math.trunc(((chislo / percent) - Math.trunc(chislo / percent)) * percent);
}

console.log(ostDel(1134, 10));

/* --Task № 7 summa --

function sumN(a1, a2 = 0, a3 = 0, a4 = 0, a5 = 0){
    return a1 + a2 + a3 + a4 + a5;
}
console.log(sumN (1, 2, 3));

/* --Task № 8 sravnenie --

function maxN(a1, a2 = 0, a3 = 0, a4 = 0, a5 = 0){
    return Math.max(a1, a2, a3, a4, a5);
}
console.log(maxN (1, 2, 3));

/* --Task № 9 chetnye i nechetnie --

function chetNechet(start, end, bool){
    for (let i = start; i<=end; i++){
        i%2 ? bool : document.write(`${i} - четная <br>`);
    }
}
chetNechet(2, 9, true);

/* --Task № 10 nextDate --

function visYar(day, mon, yar) {
    if ((mon == 2) && (yar%400 === 0 || yar%4 === 0 && yar%100 != 0)) { // високосный год
        console.log('43434')
        if (day == 29) {
            nextday = 1; 
            nextmon = mon + 1;
            nextyar = yar;
        } else {
            nextday = day + 1;
            nextmon = mon;
            nextyar = yar;
        } 
        return `${nextday} ${nextmon} ${nextyar}`;
    }
}
function nextDate (date){
    day = Number(date.substr(0,2)); // день вырезаем из текста и преобразуем в число
    mon = Number(date.substr(3,2)); // месяц вырезаем из текста и преобразуем в число
    yar = Number(date.substr(6));   // год вырезаем из текста и преобразуем в число
//   alert(`Выбрана дата: число=${day}, месяц=${mon}, год=${yar}`); //проверка
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
    if ((day == 31) && (mon == 12)) { // новый год
        nextday = 1;
        nextmon = 1;
        nextyar = yar + 1;
    }
    visYar(day, mon, yar);
    document.write(`следующая дата будет: <br> ${nextday}.${nextmon}.${nextyar}`); 
}

let date = prompt(`Введите дату в формате DD.MM.YYYY`);
nextDate(date);

//---------------------------Homework ---------------------------------
   
/* --Task № 1  function check Number  --

function checkNumber(a, b) {
    let r = 0;
    a < b ? r-- : r++;
    a === b ? r = 0 : 0;
    return r;
}
let a = 4;
let b = 5;
alert(checkNumber(a, b));

/* --Task №  2 function factorial  --

function factorial(n){
    var r = 1;
    while(n){
        r *= n--;
    }
    return r;
}
let n = +prompt(`Enter the number `);
alert(factorial(n));

/* --Task № 3 collect the number  --

function collectNamber(a, b, c){
     return String(a) + String(b) + String(c);
}
let a = 4;
let b = 5;
let c = 6;
alert(collectNamber(a, b, c));

/* --Task № 4 square area  --

function areaSquare(a, b = 1){
    return b !== 1 ? r = a * b : r = a * a;
}
let a = 4;
let b = 5;
//alert(areaSquare(a));
alert(areaSquare(a, b));

/* --Task № 5 perfect number  --

function perfectNumber(a){
    let r = 0;
    for (var i = 1; i <= a/2; i++){
 //       console.log(i);
        a % i == 0 ? r += i : 0;
    }
    r == a ? alert(`Nomber is perfect`) : alert(`Nomber is imperfect`);
}
let a = +prompt(`Enter number`);
perfectNumber(a);

/* --Task № 6 all perfect number  --

function perfectNumber(min, max){
    for (min; min <= max; min++){
        var r = 0;
        for (var i = 1; i <= min/2; i++){
            if (min % i == 0) { 
                r = r + i;
//                console.log(`min=${min} i=${i} r=${r}`);
                r == min ? document.write(`${r} <br>`) : 0;
            }       
        }   
    }
}
let min = +prompt(`Enter min number`);
let max = +prompt(`Enter max number`);
perfectNumber(min, max);

/* --Task № 7 time  --

function timeToStr(h, m = `00`, c = `00`){
    document.write(`${h}:${m}:${c}`);
}
let h = `05`;
//let h = `10`; let m = `43`; let c = `56`
//timeToStr(h, m, c);
timeToStr(h);


/* --Task № 8 time into seconds--

function timeToSec(h, m, c) {
    return h * 3600 + m * 60 + c;
}
document.write(timeToSec(10, 43, 56));

/* --Task № 9 seconds into time --

function secToTime(c) {
    return `${Math.floor(c / 3600)}:${Math.floor(c / 60) - Math.floor(c / 3600) * 60}:${c % 60}`
}
document.write(secToTime(100000));
/* --Task № 10 difference between date --

<<<<<<< HEAD
/* --Task № 10 difference between date --

=======
>>>>>>> 1162f25e3dd81da8a60a788cc43441323c7a30c2
function timeToSec(h, m, c){ // chasov minut secund
    return h * 3600 + m * 60 + c;;
}
function secToTime(sec) {
    return `${Math.floor(sec / 3600)}:${Math.floor(sec / 60) - Math.floor(sec / 3600) * 60}:${sec % 60}`
}
let time1 = timeToSec(82, 34, 47);
let time2 = timeToSec(12, 22, 05);
let sec = Math.max(time1, time2) - Math.min(time1, time2);
console.log(sec);
document.write(secToTime(sec));

/* --Task № 11  time after youre birthday --*/

function dateToSec(dd, mm, yyyy){ 
    return Math.floor(new Date(`${mm},${dd},${yyyy}`) / 1000);
}
function secToTime(diff) {
    return `${Math.floor(diff / 31536000)} лет
    ${Math.floor(diff / 86400) - Math.floor(diff / 31536000) * 365.25} дней
    ${Math.floor(diff / 3600) - Math.floor(diff / 86400) * 24} часов 
    ${Math.floor(diff / 60) - Math.floor(diff / 3600) * 60} минут
    ${diff % 60} секунд`;
}
let datebirth = dateToSec(07, 02, 1971); // kolichestvo secund s 01 yanvarya 1970 goda
let now = (Math.floor(new Date() / 1000)); 
let diff = now - datebirth;
//console.log(now);
//console.log(datebirth);
//console.log(diff);
document.write(secToTime(diff));

