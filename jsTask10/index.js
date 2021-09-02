//--jsTask10 Classwork Classes ---

/* --Task № 1 Circle --*/
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
