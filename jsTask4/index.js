//--jsTask4 Classwork Cycles While and For 

/* --Task № 1  --

let num = +prompt(`Введите число `);
while (num) {
    document.write(`${num--} <br>`);
}

/* --Task № 2  Summa --

function sumAllDigits () {
    let sum = 0;
    while (num) {
        sum += num;
        document.write(`${num} <br>`);
        num--;
    }
document.write(`Summa =${sum} <br>`);
}
let num = +prompt(`Введите число `);
sumAllDigits(num);

/* --Task № 2  For --

let num = +prompt(`Введите число `);
for(let i= 1; i<= 100; i++) {
    if (i% num === 0) {
        document.write(` ${i}`)
    }
}

/* --Task № 3  function factorial --


function factorial(n){
    var result = 1;
    while(n){
        result *= n--;
    }
    return result;
    document.write(result);
}

let n = +prompt(`Введите число `);
factorial(n);

/* --Task № 4  kratno 4 --

let a = +prompt(`Введите минимальное число `);
let b = +prompt(`Введите максимальное число `);
for(let i= 1; i<= b; i++) {
    a += 4;
    document.write(` ${a}`)
}

/* --Task № 5  prostoe chislo --*/

let a = +prompt(`Введите минимальное число `);
var del = 0;
let flag = true;
for(let i= 2; i< a; i++) {
    if (a%i === 0) {
        del = i;
        document.write(`${a} делится на ${del} без остатка <br>`);
        flag = false;
    } 
}
flag ? document.write(`<br> Итог: ${a} простое число`): document.write(`<br> Итог: ${a} не простое число`);
   


    











