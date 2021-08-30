//--jsTask9 Classwork Objects classes ---

/* --Task № 1 --*
class PrintMachine {
    constructor(color, fontSize, fontFamily){
        
    }
}

/* --Task № 2 make news --*/

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
            this.date.getMonth() === newDate().getMonth()){
                this.date = `сегодня`;
        } else if (( new Date().getDate() - this.date.getDate()) < 7){
            this.date = `${newDate().getDate() - this.date.getDate()} дней назад`;
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

/* --Task № 3 news feed --*/

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
    [`meta`,`lena`,`carl`], new Date(2021,8,3));
