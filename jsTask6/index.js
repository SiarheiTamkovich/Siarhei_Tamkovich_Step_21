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

/* --Task № 1 object car --*
let car = { 
    prod: `Mazda`,
    mod: 626,
    year: 1992,
    speed: 80,
}
function carInfo(a){
    document.write(`
        Марка ${a.prod} <br>
        Модель ${a.mod} <br>
        Год выпуска ${a.year} <br>
        Средняя скорость ${a.speed} <br>
    `)
}
function timeDist(a){
    let timeToRest = Math.floor((a / car.speed) / 4);
    document.write(` Чтобы преодолеть расстояние в
      ${a} км потребуется
      ${a / car.speed + timeToRest} часов c учетом времени на отдых
      ${timeToRest} часа
    `)
}
carInfo(car); // Task 1 part 1
console.log(car);
timeDist(800); // Task 1 part 2

/* --Task № 2 object drobi --*

let drobi = {
    chisl1: 1,
    znam1: 2,
    chisl2: 3,
    znam2: 4,
}
function summDrobi() { // Task 2 Part 1
    document.write(`
     ${drobi.chisl1}/
     ${drobi.znam1} +
     ${drobi.chisl2}/
     ${drobi.znam2}=
     ${drobi.chisl1 * drobi.znam2 + drobi.chisl2 * drobi.znam1}/
     ${Math.max(drobi.znam1, drobi.znam2)} <br>
    `)
}
function raznDrobi() { // Task 2 Part 2
    document.write(`
     ${drobi.chisl1}/
     ${drobi.znam1} -
     ${drobi.chisl2}/
     ${drobi.znam2}=
     ${drobi.chisl1 * drobi.znam2 - drobi.chisl2 * drobi.znam1}/
     ${Math.max(drobi.znam1, drobi.znam2)}  <br>
    `)
}
function umnDrobi() { // Task 2 Part 3
    document.write(`
     ${drobi.chisl1}/
     ${drobi.znam1} *
     ${drobi.chisl2}/
     ${drobi.znam2}=
     ${drobi.chisl1 * drobi.chisl2}/
     ${drobi.znam1 * drobi.znam2} <br>
    `)
}
function delDrobi() { // Task 2 Part 4
    document.write(`
     ${drobi.chisl1}/
     ${drobi.znam1} :
     ${drobi.chisl2}/
     ${drobi.znam2}=
     ${drobi.chisl1 * drobi.znam2}/
     ${drobi.znam1 * drobi.chisl2} <br>
    `)
}
function NOD (a, b) { // наибольший общий делитель - общий знаменатель
	if (b > a) return NOD(b, a);
	if (!b) return a;
	return NOD(b, a % b);
}
function sokrDrobi() { // Task 2 Part 5
    document.write(`
     ${drobi.chisl1 * drobi.znam2}/
     ${drobi.znam1 * drobi.chisl2} =
     ${drobi.chisl1 * drobi.znam2 / NOD (drobi.chisl1 * drobi.znam2, drobi.znam1 * drobi.chisl2)} /
     ${drobi.znam1 * drobi.chisl2 / NOD (drobi.chisl1 * drobi.znam2, drobi.znam1 * drobi.chisl2)} <br>
    `)
}
console.log(drobi)
summDrobi() 
raznDrobi()
umnDrobi() 
delDrobi()
sokrDrobi()

/* --Task № 3 object time --*/
let time = {
    hh: 11,
    mm: 56,
    ss: 23,
}
function dipTime() { // Task 3 part 1
    document.write(`Time:
     ${time.hh} hour
     ${time.mm} min
     ${time.ss} sec <br>
    `)
}
function cheSecTime(a) { // Task 3 part 2
    if (time.ss + a >= 60) {
        time.mm += Math.floor((time.ss + a) / 60)
        time.ss = (time.ss + a) - (Math.floor((time.ss + a) / 60) * 60);
    } else {
        time.ss += a;
    }
     document.write(`Change secunds=
     ${a}: <br>
     ${time.hh} hour
     ${time.mm} min
     ${time.ss} sec <br>
    `)
}
function cheMinTime(a) { // Task 3 part 3
    if (time.mm + a >= 60) {
        time.hh += Math.floor((time.mm + a) / 60)
 //       console.log(time.mm + a)
 //       console.log(Math.floor((time.mm + a) / 60) * 60)
        time.mm = (time.mm + a) - (Math.floor((time.mm + a) / 60) * 60);
    } else {
        time.mm += a;
    }
     document.write(`Change minutes=
     ${a}: <br>
     ${time.hh} hour
     ${time.mm} min
     ${time.ss} sec <br>
    `)
}
function cheHouTime(a) { // Task 3 part 4
    if (time.hh + a >= 24) {
        time.hh = (time.hh + a) - (Math.floor((time.hh + a) / 24) * 24);
    } else {
        time.hh += a;
    }
     document.write(`Change hours=
     ${a}: <br>
     ${time.hh} hour
     ${time.mm} min
     ${time.ss} sec <br>
    `)
}
dipTime()
cheSecTime(42)
cheMinTime(21)
cheHouTime(16)
