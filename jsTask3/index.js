//--jsTask3 Cycles while и for 

/* --Task № 1 repit #  --

let count = +prompt(`Введите количество повторов`);
let i = 0;
while (i <= count) {
    document.write ( `#` );
    i++
}

/* --Task № 2 chisla ot 0 do ...  --*

let count = +prompt(`Введите число`);
let i = 0;
while (i <= count) {
    document.write (`-${i}!`);
    i++
}

/* --Task № 3 chisla ot 0 do ...  --

let count = +prompt(`Введите число`);
let degree = +prompt(`Введите степень`);
let result = 1;
let i = 1;
while (i <= degree) {
    
    result *= count;
  //  document.write (`-${count}-`);
    i++
}

document.write (`--${result}--`);

/* --Task № 4 obschi delitel  --

let a1 = +prompt(`Введите первое число`);
let a2 = +prompt(`Введите второе число`);
let i = a1 > a2 ? a1 : a2;
while (i >= 1) {
    if (a1 % i === 0) {
       if (a2 % i === 0) {
           document.write (`${i}`);
        }
    }
    i--;
}

/* --Task № 5 factorial  --

let a1 = +prompt(`Введите число`);
let a2 = a1;
let result = 1;
let i = 1;
while (i <= a2) {
    result = result * a1;
    document.write ( `-${result}-` ); 
    a1--;
    i++;
}

document.write ( `
Итого факториал${a2}! = ${result}` );


/* --Task № 6 do while --

let num = 1000;
let count = 0;
do {
    num/2
} while (i)

/* --Task № 7 do while --

let a = +prompt(`1`);
let b = +prompt(`2`);
let start = a>b ? b : a;
let finish = a<b ? b : a;
let result = 0;
while (start !== finish) {
    result +=  + start;
    start = start + 1;
}

console.log(start)

/* --Task № 2 do while --*/

let a = +prompt(`1`); // 20
let b = +prompt(`2`); // 40
let start = a>b ? b : a;
