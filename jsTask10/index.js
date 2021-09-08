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

/* --Task № 1 Class Button --*/
lass Button {
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
    }
    
    let btn = new Button();
    
    class BootstrapButton extends Button {
      constructor() {
        super();
        this.color = 'red';
      }
    
      showBtn() {
        document.write(<button style="height:${this.height}; width:${this.width}; background-color:${this.color}">${this.text}</button>)
      }
    }
    
    let btn1 = new BootstrapButton();