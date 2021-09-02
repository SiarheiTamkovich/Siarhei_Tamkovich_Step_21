//--jsTask9 Classwork Objects classes ---

/* --Task № 1 --*
class PrintMachine {
    constructor(color, fontSize, fontFamily){
        
    }
}

/* --Task № 2 make news --*

class createNews {
    constructor(header, text, tags, date) {
        this.header = header;
        this.text = text;
        this.date = date;
        this.tags = tags;
    }
    tagsFormation(){
        this.tags = this.tags.map(tag => ` #` + tag);
        this.tags = this.tags.join(``);
    }
    dateFormation(){
        if (this.date.getDate() === new Date().getDate() && 
            this.date.getMonth() === new Date().getMonth()){
                this.date = `сегодня`;
        } else if (( new Date().getDate() - this.date.getDate()) < 7){
            this.date = `${new Date().getDate() - this.date.getDate()} дней назад`;
        } else {
            this.date = `${this.date.getDate()} : 
                         ${this.date.getMonth()} : 
                         ${this.date.getFullYear()}`
        }
    }
    print(){
        document.write(`<h1>${this.header}</h1>`);
        document.write(`<div>${this.date}<div>`);
        document.write(`<p>${this.text}<p>`);
        document.write(`<div>${this.tags}<div>`)
    }
}
let news = new createNews(`Whats new?`,
     `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    [`meta`,`lena`,`carl`], new Date(2021,8,3));
news.tagsFormation();
news.dateFormation();
news.print();

/* --Task № 3 news feed --*

class newsFeed {
    constructor(header, text, tags, date) {
        this.header = header;
        this.text = text;
        this.date = date;
        this.tags = tags;
    }
}
let news = new createNews(`Whats new?`,
     `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    [`meta`,`lena`,`carl`], new Date(2021,8,3))

/*--*/

//---------------------------Homework ---------------------------

/* --Task № 1 Class circle --*
class Circle{
    constructor(radius){
        this.radius = radius;
    }
    get radius() {
      return this._radius;
    }
    set radius(value) {
        this._radius = +prompt(`Введите радиус ${value}`);
    }
    get diam() {
        return this._radius * 2;
    }
    squre(){
        document.write(`Площадь = 
        ${Math.floor(this.radius * this.radius * Math.PI)} мм.кв., <br>`);
    }
    lenght(){
        document.write(`Длина = 
        ${Math.floor(this.radius * 2 * Math.PI)} мм.кв., <br>`);
    }
    print(){
        document.write(`Радиус = ${this.radius} мм., <br>`);
        document.write(`Диаметр = ${this.diam} мм., <br>`);
    }
    
}

let circle = new Circle(50)
console.log(circle);
circle.print();
circle.squre();
circle.lenght();

/* --Task № 2 Class Html Element --*

class HtmlElement{
    constructor(tegName, selfClosing, text, atributs, styles, nestedTegs){
        this.tegName = tegName;
        this.selfClosing = selfClosing;
        this.text = text;
        this.atributs = atributs;
        this.styles = styles;
        this.nestedTegs = nestedTegs;        
    }
    getHtml(){
        let str = [this.selfClosing[0],` `, 
        this.atributs[0], this.atributs[1], ` `,
        this.styles[0], this.styles[1], `> `,
            this.nestedTegs[0].selfClosing[0], ` `,
            this.nestedTegs[0].atributs[0], ` `,
            this.nestedTegs[0].atributs[1], ` `,
            this.nestedTegs[0].styles[0], ` `,
            this.nestedTegs[0].styles[1], `> `,
                this.nestedTegs[0].nestedTegs[0].selfClosing[0], ` `,
                this.nestedTegs[0].nestedTegs[0].atributs[0], ` `,
                this.nestedTegs[0].nestedTegs[0].atributs[1], ` `,
                this.nestedTegs[0].nestedTegs[0].styles[0], ` `,
                this.nestedTegs[0].nestedTegs[0].styles[1], ` `,
                this.nestedTegs[0].nestedTegs[0].text, ` `,
                this.nestedTegs[0].nestedTegs[0].selfClosing[1], ` `,

                this.nestedTegs[0].nestedTegs[1].selfClosing[0], ` `,
                this.nestedTegs[0].nestedTegs[1].atributs[0], ` `,
                this.nestedTegs[0].nestedTegs[1].atributs[1], ` `,
                this.nestedTegs[0].nestedTegs[1].styles[0], ` `,
                this.nestedTegs[0].nestedTegs[1].styles[1], ` `,
                this.nestedTegs[0].nestedTegs[1].text, ` `,
                this.nestedTegs[0].nestedTegs[1].selfClosing[1], ` `,

                this.nestedTegs[0].nestedTegs[2].selfClosing[0], ` `,
                this.nestedTegs[0].nestedTegs[2].atributs[0], ` `,
                this.nestedTegs[0].nestedTegs[2].atributs[1], ` `,
                this.nestedTegs[0].nestedTegs[2].styles[0], ` `,
                this.nestedTegs[0].nestedTegs[2].styles[1], ` `,
                this.nestedTegs[0].nestedTegs[2].text, ` `,
                
                    this.nestedTegs[0].nestedTegs[2].nestedTegs[0].selfClosing[0], ` `,
                    this.nestedTegs[0].nestedTegs[2].nestedTegs[0].atributs[0], ` `,
                    this.nestedTegs[0].nestedTegs[2].nestedTegs[0].atributs[1], ` `,
                    this.nestedTegs[0].nestedTegs[2].nestedTegs[0].styles[0], ` `,
                    this.nestedTegs[0].nestedTegs[2].nestedTegs[0].styles[1], ` `,
                    this.nestedTegs[0].nestedTegs[2].nestedTegs[0].text, ` `,
                    this.nestedTegs[0].nestedTegs[2].nestedTegs[0].selfClosing[1], ` `,
                this.nestedTegs[0].nestedTegs[2].selfClosing[1], ` `,
            this.nestedTegs[0].selfClosing[1], ` `,

            this.nestedTegs[1].selfClosing[0], ` `,
            this.nestedTegs[1].atributs[0], ` `,
            this.nestedTegs[1].atributs[1], ` `,
            this.nestedTegs[1].styles[0], ` `,
            this.nestedTegs[1].styles[1], `> `,
                this.nestedTegs[1].nestedTegs[0].selfClosing[0], ` `,
                this.nestedTegs[1].nestedTegs[0].atributs[0], ` `,
                this.nestedTegs[1].nestedTegs[0].atributs[1], ` `,
                this.nestedTegs[1].nestedTegs[0].styles[0], ` `,
                this.nestedTegs[1].nestedTegs[0].styles[1], ` `,
                this.nestedTegs[1].nestedTegs[0].text, ` `,
                this.nestedTegs[1].nestedTegs[0].selfClosing[1], ` `,

                this.nestedTegs[1].nestedTegs[1].selfClosing[0], ` `,
                this.nestedTegs[1].nestedTegs[1].atributs[0], ` `,
                this.nestedTegs[1].nestedTegs[1].atributs[1], ` `,
                this.nestedTegs[1].nestedTegs[1].styles[0], ` `,
                this.nestedTegs[1].nestedTegs[1].styles[1], ` `,
                this.nestedTegs[1].nestedTegs[1].text, ` `,
                this.nestedTegs[1].nestedTegs[1].selfClosing[1], ` `,

                this.nestedTegs[1].nestedTegs[2].selfClosing[0], ` `,
                this.nestedTegs[1].nestedTegs[2].atributs[0], ` `,
                this.nestedTegs[1].nestedTegs[2].atributs[1], ` `,
                this.nestedTegs[1].nestedTegs[2].styles[0], ` `,
                this.nestedTegs[1].nestedTegs[2].styles[1], ` `,
                this.nestedTegs[1].nestedTegs[2].text, ` `,
                    this.nestedTegs[1].nestedTegs[2].nestedTegs[0].selfClosing[0], ` `,
                    this.nestedTegs[1].nestedTegs[2].nestedTegs[0].atributs[0], ` `,
                    this.nestedTegs[1].nestedTegs[2].nestedTegs[0].atributs[1], ` `,
                    this.nestedTegs[1].nestedTegs[2].nestedTegs[0].styles[0], ` `,
                    this.nestedTegs[1].nestedTegs[2].nestedTegs[0].styles[1], ` `,
                    this.nestedTegs[1].nestedTegs[2].nestedTegs[0].text, ` `,
                    this.nestedTegs[1].nestedTegs[2].nestedTegs[0].selfClosing[1], ` `,
                this.nestedTegs[0].nestedTegs[2].selfClosing[1], ` `,
            this.nestedTegs[0].selfClosing[1], ` `,
        this.selfClosing[1]];
        console.log(str.join(``));
        document.write(str.join(``));
    }
    setAtribut(value){
        this._atributs = this.atributs.push(value);
    }
    setStyle(value){
        this._styles = this.styles.push(value);
    }
    setAddTegUp(value){
        this._nestedTegs = this.nestedTegs.unshift(value);
    }
    setAddTegDown(value){
        this._nestedTegs = this.nestedTegs.push(value);
    }
}
let tegA    = new HtmlElement(`a`,    [`<a`, `</a>`   ], `More...`,               [`href="https://www.lipsum.com/"`, `target="_blank" >`], [``], [``]);
let tegP    = new HtmlElement(`p`,    [`<p`, `</p>`   ], `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor dignissim justo vitae commodo. Pellentesque eros elit, elementum sit amet sodales placerat, efficitur quis sapien. Aliquam accumsan risus ut consectetur viverra. Nulla facilisi. Vestibulum id."`,
                                                                                  [``], [`style="text-align: justify;" >`], [tegA]);
let tegH3   = new HtmlElement(`h3`,   [`<h3>`, `</h3>` ], `What is Lorem Ipsum?`, [``, ``], [``], [``]);
let tegImg  = new HtmlElement(`Img`,  [`<img`, `>`     ], ``,                     [`src="loipsum.png"`, `alt="Lorem Ipsum"`], [`style="width: 100%;`], [``]);
let tegDiv2 = new HtmlElement(`div2`, [`<div`, `</div>`], ``, [``],               [`style="width: 300px;`, `margin: 10px;"`], [tegH3, tegImg, tegP]);
let tegDiv1 = new HtmlElement(`div1`, [`<div`, `</div>`], ``, [`id="wrapper"`],   [`style="display: flex;" `], [tegDiv2, tegDiv2]);

//tegImg.setStyle(`width: 50%"`); // Set Styles 

tegDiv1.getHtml();

/* --Task № 3  Class Css Class --*/
class CssClass{
    constructor(cName, cStyls){
    this.cName = cName;
    this.cStyls = cStyls;
    }
    getCss(){
        document.write(`
        .${this.cName}{ <br>
           ${this.cStyls.join(`<br>`)};
        }`);
    }
    setCssStyle(value){
        this._cStyls = this.cStyls.push(value);
    }
    delCssStyle(){
        this._cStyls = this._cStyls.pop();
    }
}

let classWrap = new CssClass(`wrap`, [`display: flex`]);
//classWrap.getCss()
let classBlock = new CssClass(`block`, [`width: 300px; margin: 10px;`]);
let classImg = new CssClass(`img`, [`width: 100%;`]);
let classText = new CssClass(`text`, [`text-align: justify;`]);

/* --Task № 4  Class HTML Block --*/
class HtmlElement{
    constructor(teg1, teg2, IdClsAtr, text, nBloks){
        this.teg1 = teg1;
        this.teg2 = teg2;
        this.IdClsAtr = IdClsAtr;
        this.text = text;
        this.nBloks = nBloks;
    }
}
let tegA = new HtmlElement(`<a`, `</a>`, `href="http://www.lipsum.com/" target="_blank">`, ``, ``)
let tegP = new HtmlElement(`<p`, `</p>`, `class="text">`, `"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
                                    Curabitur auctor dignissim justo vitae commodo.\
                                    Pellentesque eros elit, elementum sit amet sodales placerat, efficitur quis sapien.\
                                    Aliquam accumsan risus ut consectetur viverra. Nulla facilisi. \
                                    Vestibulum id.`, tegA);

class HtmlBlock{
    constructor(styles, elements){
        this.styles = styles;
        this.elements = elements;
    }
    printBlock(){
        let str = `<style>`;
        for (let i = 0; i < this.styles.length; i++){
            str += (` .${this.styles[i].cName} { ${this.styles[i].cStyls}} `);
        }
        str += `</style>`
        for (let i = 0; i < this.elements.length; i++){
            str += (`
            ${this.elements[i].teg1} ${this.elements[i].IdClsAtr} 
            ${this.elements[i].text} 
            `);
        }
        document.write(str)
        console.log(str);
        

    }
}

let htmlBlock = new HtmlBlock([classWrap, classBlock, classImg, classText], [tegP, tegA]);

htmlBlock.printBlock();
