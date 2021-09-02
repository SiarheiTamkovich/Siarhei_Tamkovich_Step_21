//--jsTask3 Classwork Cycles while and for 

/* --Task № 1 repit #  --

let count = +prompt(`Введите количество повторов`);
let i = 0;
while (i <= count) {
    document.write ( `#` );
    i++
}

/* --Task № 2 chisla ot 0 do ...  --

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

/* --Task № 1 summa --

let a = +prompt('1'); //2 
let b = +prompt('2'); //5
let result = 0;
let start = a>b ? b : a;  //start = 2
let finish = a<b ? b : a; // finish = 5
while (start !== finish) {
    result = result + start;
    start = start + 1;
}
console.log(start);
console.log(result);

/* --Task № 2 naibol obschiy delitel --

let a = +prompt('1'); // 20
let b = +prompt('2'); // 40
let small = a<b? a: b; // 20
while(small>=1) {
if (a%small === 0) {
    if(b%small === 0) {
        console.log(small);
        break;
    }
}
small--;
}

/* --Task № 3 deliteli--

let a = +prompt('1'); 
let b = a; 
while(b>=1) {
    if (a%b === 0) {
        console.log(b);
    }
    b--;
}

/* ---------------------------Homework -----------------

/* --Task № 4 number of digits--

let a = +prompt('enter the number'); // 10
result = 0;
while(a>=1) {
    result++;
    a = a/10;
}

console.log (result);

/* --Task № 5 number processing--

let i = 10;
let pos = 0; // positive
let neg = 0; // negative
let zer = 0; // zero
let eve = 0; // even
let odd = 0; // odd
while (i) { 
    let a = +prompt(`Enter the number`);
    a > 0 ? pos++ : pos;
    a < 0 ? neg++ : neg;    
    a == 0 ? zer++ : zer;
    a%2 == 0 ? eve++ : eve;
    
/* if (a>0) {           // with IF
        pos = pos + 1;
    } 
    if (a<0) {
        neg = neg + 1;
    }
    if (a == 0) {
        zer = zer + 1;
    }
    if (a%2 == 0) {
        eve = eve + 1;
    } else {
        odd = odd + 1;
    }  
    i--;
}

alert (`Итого вы ввели:
    Положительных-${pos} 
    Отрицательных-${neg}
    Нулевых      -${zer}
    Четных       -${eve}
    Нечетных     -${odd}`
);

/* --Task № 6 calculator--

do { 
    let a = prompt(`Введите выражение, например (2 + 2)`);
    let rezult = eval(a);
    alert(`Ответ=${rezult}`);
} while (confirm(`Хотите продолжить вычисления?`));

/* --Task № 7 shift numbers--

let a = prompt(`Введите число`);
let cut = +prompt(`Введите количество знаков на кторое нужно сдвинуть`);
let a1 = a.substr(0,cut);
let a2 = a.substr(cut);
document.write(`было: ${a1}${a2} стало: ${a2}${a1}`);

/* --Task № 8 showing days of the week--

var arr = [`Понедельник`, `Вторник`, `Среда`, `Четверг`, `Пятница`, `Суббота`, `Воскресенье`];
let i = 0;
do {
	confirm(arr[i]);
    i++;
    if (i == 7) {
        i = 0;
    }
} while (confirm(`Хотите увидеть следующий день недели?`))

/* --Task № 9 multiplication table--

let a = 2;
let rez = 0;
let i = 1;
let ii = 1;
while (ii<=8) {
    while (i<=10) {
        rez = a * i;
        document.write(`${a} * ${i} = ${rez}` + `<br>`);
        i++;
    }
    document.write(`<br>`);
    i = 1;
    a++;
    ii++;
}

/* --Task № 10 guess the number game--

let a1 = 0; // start
let a2 = 200; // stop
let a3 = 0;
let z = 0;
let i = 1;
while (i) {
    a3 = a1 + (a2 - a1)/2;
    if (a3 > 100) {
        prompt(`Ошибка: превышен диапазон`); // N > 100
        break;
    }
    z = prompt(`Ваше число > или < или = ${a3}`); 
    if (z == `>`) {
        if (a3%2 !== 0) {
            a3--;
        }
        a1 = a3; 
    } else if (z == `<`) {
            if (a3%2 !== 0) {
                if (a3 == 1) {
                    prompt(`Число угадано = 0`); // N = 0
                    break;
                }
                a3++;
            }
        a2 = a3;  
    } else if (z == `=`) {
        prompt(`Число угадано = ${a3}`);
        break;
    }
    i++;
}

/* --Task № guess the number game--*/

