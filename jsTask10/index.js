//--jsTask10 Classwork Classes ---

/* --Task № 1 Circle --*
class Circle {
    constructor(){
        this.radius = 5;
    }
    get getRadius(){
        return this.radius;
    }
    set setRadius(rad) {
        this.radius = rad;
    }
    get diametr(){
        return this.radius + this.radius;
    }
    ploshad(){
        console.log(2 * Math.PI * Math.pow(this.radius, 2));
    }
}
let c = new Circle();
c.ploshad();

/* --Task № 1 Class Button --*
class Button {
    constructor() {
      this.text = 'Button';
      this.height = '100px';
      this.width = '200px';
    }
    showBtn() {
      let button = document.createElement('button');
      button.id = 'qwe';
      console.log(button);
      button.innerHTML = this.text;
      document.body.append(button);
      button.style.height = this.height;
      button.style.width = this.width;
      //document.write(<button id='btn' style="height:${this.height}; width:${this.width}">${this.text}</button>)
    }
    hideBtn() {
        let element = document.querySelector('#btn');
        element.style.backgroundColor = "red";
    } 

/* --Task № 2 Class Figura --*

class Figure {
    constructor(name,storonaA,storonaB,storonaC){
        this.name = name;
        this.storonaA = storonaA;
        this.storonaB = storonaB;
        this.storonaC = storonaC;
    }   
    get fullName(){
        return this.name;
    }
    showInfo() {
        document.write('Информация');
    }
    ploshad(){
        document.write('Площадь')
    }
    perimetr(){
        document.write('Периметр')
    }
}

class Kvadrat extends Figure{
    showInfo(){
        super.showInfo();
        document.write('Сторона квадрата=',this.storonaA)
    }
    ploshad(){
        super.ploshad();
        document.write('Площадь квадрата=',`${this.storonaA * this.storonaA}`)
    }
    perimetr(){
        super.perimetr();
        document.write(`Периметр квадрата=`, this.storonaA + this.storonaA)
    }
}

class Pryamoygolnik extends Figure{
    showInfo(){
        super.showInfo();
        document.write('Cторона прямоугольника=',this.storonaA)
    }
    ploshad(){
        super.ploshad();
        document.write('Площадь прямоугольника=', this.storonaA * this.storonaB)
    }
    perimetr(){
        super.perimetr();
        document.write(this.storonaA + this.storonaB)
    }
}

class Triangle extends Figure{
    showInfo(){
        super.showInfo();
        document.write('Сторона треугольника=',this.storonaA)
    }
    ploshad(){
        super.ploshad();
        document.write(this.storonaA * this.storonaB / 2)
    }
    perimetr(){
        super.perimetr();
        document.write(this.storonaA + this.storonaB + this.storonaC)
    }
}

let figures = [];
let kv = new Kvadrat('Квадрат', 10);
let pr = new Pryamoygolnik('Прямоугольник', 10 , 20);
let tr = new Triangle('Треугольник', 10, 10, 20);

figures.push(kv)
figures.push(pr)
figures.push(tr)
console.log(figures);

for (let i = 0; i < figures.length; i++) {
    console.log( figures[i] );
    figures[i].ploshad();
    figures[i].perimetr();
}

/* --Task № 3 ExtentedArray --*
class ExtentedArray extends Array{
    getString(separator){
        for (let i = 0; i < this.length; i++) {
          document.write(this[i], separator);
        }
        document.write()
    }
}
let arr = new ExtentedArray(1,2,3,4,5,6,7,8);
console.log(arr);
arr.getString(`*`);

//---------------------------Homework ---------------------------

/* --Task № 1 Class Marker --*
class Marker {
    constructor(colour, paintVolume){
        this.colour = colour;
        this.paintVolume = paintVolume;
    }
    printStr(str){
        str = str.split(``);
        let n = 0;
 //       console.log(str)
        document.write(`<h3 style= "color:${this.colour}">`);
        let i = this.paintVolume; 
        while (i > 0){
           document.write(str[n]);
           n != str.length - 1 ? n++: n = 0;   
           str[n] === ` ` ? 0 : i -= 0.5;
        }
        document.write(`</h3>`);
    }
}
let redMarker = new Marker(`red`, 100);
redMarker.printStr(`asd fgh -jtk-`)

class MarkerRefill extends Marker{
    refill(paintVolume){
        this.paintVolume = paintVolume;
        console.log(paintVolume)
    }
}
let greenMarker = new MarkerRefill(`yellow`, 50);
greenMarker.printStr(`ddffkk* 09+`, 20);
greenMarker.refill(60);
greenMarker.printStr(`ddffkk* 09+` );

/* --Task № 2 Class ExtendedDate --*
class ExtendedDate extends Date{
    strDate(dd,mm,yyyy){
        let arrdd = [``, `первое`, `второе`, `третье`, `четвертое`, `пятое`,
                     `шестое`, `седьмое`, `восьмое`, `девятое`, `десятое`,
                    `одиннадцатое`, `двенадцатое`, `тринадцатое`, `четырнадцатое`, `пятнадцатое`,
                    `шестнадцатое`, `семнадцатое`, `восемнадцатое`, `девятнадцатое`, `двадцатое`,
                    `двадцать первое`, `двадцать второе`, `двадцать третье`, `двадцать четвертое`, `двадцать пятое`,
                    `двадцать шестое`, `двадцать седьмое`, `двадцать восьмое`, `двадцать девятое`, 
                    `тридцатое`, `тридцать первое`];
        let arrmm = [``, `января`, `февраля`, `марта`, `апреля`, `мая`, `июня`,
                    `июля`, `августа`, `сентября`, `октября`, `ноября`, `декабря`]
        document.write(arrdd[dd], ` `, arrmm[mm], ` `, yyyy, ` года <br>`);
    } 
    compareDate(dd,mm,yyyy){
        let dateNow = Date.now();
        let date = new Date(`${mm},${dd},${yyyy}`);
        date = Date.parse(date);
 //       console.log(dateNow); console.log(date);
        return date >= dateNow ? true: false;
    }
    leapYear(yyyy){ 
        return (yyyy%400 === 0 || yyyy%4 === 0 && yyyy%100 != 0);
    }
    nextDate(dd,mm,yyyy){
        if (dd === 28){ // leap Year
//            console.log(this.leapYear(yyyy));
            if (this.leapYear(yyyy) === true){
                dd = 29;
            } else {
                dd = 1;
                mm += 1;
            }
            return this.strDate(dd,mm,yyyy);
        }
        if (mm === 4 || mm === 6 || mm === 9 || mm === 11){
            if (dd === 30){
                dd = 1;
                mm += 1;
            } else {
                dd += 1;
            }
        } else {
            if (dd === 31){
                if (mm === 12) {
                    dd = 1;
                    mm = 0;
                    yyyy += 1;
                }
                dd = 1;
                mm += 1;
            } else {
                dd +=1;
            }
        }
        
//     console.log(dd,mm,yyyy);
      return this.strDate(dd,mm,yyyy);
    }
}
// p.2.1
let newDate = new ExtendedDate();
//console.log(newDate.toLocaleDateString());
newDate.strDate(01,09,2021);
// p.2.2
let comp = newDate.compareDate(10,09,2021);
console.log(comp);
// p.2.3
let year = newDate.leapYear(2020);
console.log(year);
// p.2.4
let nextdate = newDate.nextDate(28,02,2020);

/* --Task № 3 Class Employee --*/
class Employee{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
let emp1 = new Employee(`Natasha`,19);
let emp2 = new Employee(`Vera`,21);
let emp3 = new Employee(`Oleg`,24);
let emp4 = new Employee(`Sergey`,22);
// p.3.1
let bankEmployee = [emp1,emp2,emp3,emp4];
// p.3.2
class EmpTable{
    constructor(arr){
        this.arr = arr;
    }
    getHtml(){
//        console.log(this.arr)
        for (let i = 0; i < this.arr.length; i++){
           document.write(`Name: ${this.arr[i].name}, age: ${this.arr[i].age} <br>`);
        }
    }
}
// p.3.3
let empTable = new EmpTable(bankEmployee);
//empTable.getHtml();

/* --Task № 4 Class StyledEmpTable --*/
class StyledEmpTable extends EmpTable{
    getStyles(style){
        document.write(`<style> .p {${style}} </style>`)
    }
    getHtml(){
        super.getHtml();
        for (let i = 0; i < this.arr.length; i++){
         document.write(`<p class="p"> Name: ${this.arr[i].name}, age: ${this.arr[i].age}</p>`);
        }
    }
}
// p.4.2
let styledEmpTable = new StyledEmpTable(bankEmployee);
styledEmpTable.getStyles(`margin: 0; color: red; font-size: 20px;`);
styledEmpTable.getHtml();



