//--jsTask11 Event handling ---

/* --Task № 1 Random number --*/
function random(){
   return Math.floor(Math.random() * 100);
}
let btn = document.querySelector(`.btn`);
let num = document.querySelector(`#num`)

btn.addEventListener(`click`, function(){
  num.innerHTML = random();
});

/*--Task № 2 track mouse coordinates with addEventListener--*/
let elem = document.getElementById(`container`); //? get element

elem.addEventListener(`mousemove`, function(event){  //! listener
  document.getElementById(`x`).innerHTML = event.offsetX;
  document.getElementById(`y`).innerHTML = event.offsetY;
});

elem.addEventListener(`mouseup`, function(event){
  if (event.button == 0){
   document.getElementById('click').innerHTML = `Левая кнопка`;
  } else if (event.button == 2) {
   document.getElementById('click').innerHTML = `Правая кнопка`;
  }
});

/*--Task № 3 hide / show text --*/
let elemBtn = document.getElementById(`btn2`); //? get element
elemBtn.addEventListener(`click`, function(){  //! add listener
  let cssStyle = 0;
  cssStyle = document.getElementById(`text`).style; //? get CSS Style
 // console.log(cssStyle);
  cssStyle.display === `none` ? cssStyle.display = ``: 
                                cssStyle.display = `none`;
});

/*--Task № 4 select --*/
class textMenu { //! block menu
  constructor(btnMenuItem,textItem){
    this.btnMenuItem = btnMenuItem;
    this.textItem = textItem;

    let text = document.querySelector(`#tttt`);
    text.innerHTML = textItem[0];
    
    for (let i = 0; i < btnMenuItem.length; i++){  // make btn bock
      let crBtn = document.createElement(`button`);
      crBtn.id = `bt${i}`;
      crBtn.innerHTML = btnMenuItem[i];
      menu.append(crBtn);

      let liBtn = document.querySelector(`#bt${i}`) // add listeners to buttons
      liBtn.addEventListener(`click`, function(){  
          text.innerHTML = textItem[i];
      });      
    }
  }
}

let arrItem = [`HTML`,`CSS`, `JS`];
let arrText = [
  `HTML (от англ. HyperText Markup Language — «язык гипертекстовой разметки») \
    — стандартизированный язык разметки документов для просмотра веб-страниц в браузере.`,
  `CSS (/siːɛsɛs/ англ. Cascading Style Sheets «каскадные таблицы стилей») — \
   формальный язык описания внешнего вида документа (веб-страницы)`,
  `JavaScript (/ˈdʒɑːvɑːˌskrɪpt/; аббр. JS /ˈdʒeɪ.ɛs./) — мультипарадигменный
    язык программирования. Поддерживает объектно-ориентированный, императивный 
  и функциональный стили. `,
];
let createItem = new textMenu(arrItem, arrText);






  