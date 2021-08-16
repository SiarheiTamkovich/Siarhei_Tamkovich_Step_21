//--jsTask6 Classwork Functions---

/* --Task № 1  factorial --

function factorial (n){
    return n ? n * factorial (--n) : 1;
}
console.log(factorial(5));

/* --Task № 2  vivod chisel --

function poryadoknb(n, b){
    return n === b ? 1 : poryadoknb(++n, b);
}
function poryadokbn (n, b){
    return n === b ? 1 : poryadoknb(n, --b);
}
console.log(poryadoknb(3, 10));
console.log(poryadokbn(3, 10));

/* --Task № 3  vivod naoborot --

function napered(n){
    document.write(n ? n % 10 : ``);
    if (n > 1) {
        napered(Math.floor(n * 0.1));
    }
}
console.log(napered(21234567));

/* --Task № 4  summa cifr --

let result = 0;
function summaCifr(n){
    let a = n % 10;
    result = result + a;
    if (n >= 1) {
        summaCifr(Math.floor(n * 0.1));
    }
}
console.log(summaCifr(21234567));

/* --Task № 5  scobki --

let a = `()`;
function skobki(n){
    if (n !== 1) {
        a = `(` + a + `)`;
        skobki(--n);
    }
    console.log(a)
}
skobki(4);

/* --Task № 1 object pramoygolnic --*/

let koordinaty = { 
    ax: 5,
    ay: 20,
    bx: 40,
    by: 5
}
function prymougolnic(a){
    console.log(`Верхняя левая ${a.ax}, ${a.ay} Нижняя правая ${a.bx}, ${a.by}`);
}
prymougolnic(koordinaty);

/* --Task № 2 object pramoygolnic --

let koordinat = { 
    ax: 5,
    ay: 20,
    bx: 40,
    by: 5
}
function prymougolnic(a){
    console.log(${a.bx - a.ax});
}
prymougolnic(koordinat)

/* --Task № 3 object pramoygolnic --*/

/* --Task № 4 object pramoygolnic ploschad --*/

/* --Task № 5 object pramoygolnic perimetr --*/

/* --Task № 6 object pramoygolnic izmenit shirinu --*/

/* --Task № 7 object pramoygolnic izmenit visotu --

let koordinat = { 
    ax: 5,
    ay: 20,
    bx: 40,
    by: 5
}
function prymougolnic(a){
    console.log(`${a.ay + h} ${a.ax + h}`);
}
let h = 5;
prymougolnic(koordinat);

/* --Task № 8 object pramoygolnic izmenit visotu --*/




