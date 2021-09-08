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

/* --Task № 1 Marker --*/
