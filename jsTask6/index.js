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

/* --Task № 1 object rectangle --
let koordinaty = { 
    ax: 5,
    ay: 20,
    bx: 40,
    by: 5
}
function prymougolnic(a){
    document.write(`Верхняя левая ${a.ax}, ${a.ay} Нижняя правая ${a.bx}, ${a.by}`);
}
prymougolnic(koordinaty);
console.log(koordinaty);

/* --Task № 2 object rectangle width --
let koordinat = { 
    ax: 5,
    ay: 20,
    bx: 40,
    by: 5
}
function prymougolnic(a){
    document.write(`width=${a.bx - a.ax}`);
    console.log(koordinaty);
}
prymougolnic(koordinat)

/* --Task № 3 object rectangle hight --
let rectangle = { 
    ax: 5,
    ay: 20,
    bx: 40,
    by: 5
}
function extractCoordinates(a){
    document.write(`height=${a.ay - a.ax}`);
}
extractCoordinates(rectangle)
console.log(rectangle);

/* --Task № 4 object rectangle square --
let rectangle = { 
    ax: 5,
    ay: 20,
    bx: 40,
    by: 5
}
function extCord(a){
    document.write(`squre=${(a.bx - a.ax) * (a.ay - a.by)}`);
}
extCord(rectangle)
console.log(rectangle);

/* --Task № 5 object rectangle perimetr --
let rectangle = { 
    ax: 5,
    ay: 20,
    bx: 40,
    by: 5
}
function extCord(a){
    document.write(`perimeter=${(a.bx - a.ax) + (a.ay - a.by)}`);
}
extCord(rectangle)
console.log(rectangle);

/* --Task № 6 object rectangle chenge widh --
let rectangle = { 
    ax: 5,
    ay: 20,
    bx: 40,
    by: 5
}
function echengeCord(a, b){
    a.bx += b;
}
echengeCord(rectangle, 5)
console.log(rectangle);

/* --Task № 7 object rectangle chennge hight --
let rectangle = { 
    ax: 5,
    ay: 20,
    bx: 40,
    by: 5
}
function echengeCord(a, b){
    a.ay += b;
}
echengeCord(rectangle, 5)
console.log(rectangle);

/* --Task № 8 object rectangle chennge hight and width  --
let rectangle = { 
    ax: 5,
    ay: 20,
    bx: 40,
    by: 5
}
function echengeCord(a, h, w){
    a.ay += h;
    a.bx += w;
}
echengeCord(rectangle, 5, 10)
console.log(rectangle);

* --Task № 9 object rectangle move x  --
let rectangle = { 
    ax: 5,
    ay: 20,
    bx: 40,
    by: 5,
}
function echengeCord(a, m){
    a.ax += m;
    a.bx += m;
}
echengeCord(rectangle, 5,)
console.log(rectangle);

* --Task № 10 object rectangle move y  --
let rectangle = { 
    ax: 5,
    ay: 20,
    bx: 40,
    by: 5,
}
function echengeCord(a, m){
    a.ay += m;
    a.by += m;
}
echengeCord(rectangle, 5);
console.log(rectangle);

* --Task № 11 object rectangle move x y  --
let rectangle = { 
    ax: 5,
    ay: 20,
    bx: 40,
    by: 5,
}
function echengeCord(a, x, y){
    a.bx += x;
    a.ax += x;
    a.ay += y;
    a.by += y;
}
echengeCord(rectangle, 5, 10);
console.log(rectangle);

/* --Task № 12 object rectangle point coordinates  --
let rectangle = { 
    ax: 5,
    ay: 20,
    bx: 40,
    by: 5,
}
function echengeCord(a, px, py){
    px >= a.ax && px <= a.bx &&
    py >= a.by && py <= a.ay ? 
    console.log(`point inside rectangle`) : 
    console.log(`point outside rectangle`);
}
echengeCord(rectangle, 15, 10);
console.log(rectangle);

//---------------------------Homework ---------------------------------

/* --Task № 1 object automobile --*/
let automobile= { 
    prod: 5,
    ay: 20,
    bx: 40,
    by: 5,
}
function echengeCord(a, px, py){
    px >= a.ax && px <= a.bx &&
    py >= a.by && py <= a.ay ? 
    console.log(`point inside rectangle`) : 
    console.log(`point outside rectangle`);
}
echengeCord(rectangle, 15, 10);
console.log(rectangle);