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

/* --Task № 10 nextDate --*/

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






