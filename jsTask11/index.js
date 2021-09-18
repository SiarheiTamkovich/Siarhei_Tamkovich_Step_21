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
    this.btnMenuItem = `<button>${btnMenuItem}</button>`;
    this.textItem = `<p class="test2-content" id="html">${textItem}</p>`;
  }
  makeMenu(){
    return this.btnMenuItem;
  }
}

let arrItem = []
let arrText = [`HTML (от англ. HyperText Markup Language — «язык гипертекстовой разметки») \
               — стандартизированный язык разметки документов для просмотра веб-страниц в браузере.`,
               `CSS (/siːɛsɛs/ англ. Cascading Style Sheets «каскадные таблицы стилей») — \
                формальный язык описания внешнего вида документа (веб-страницы)`,
                `JavaScript (/ˈdʒɑːvɑːˌskrɪpt/; аббр. JS /ˈdʒeɪ.ɛs./) — мультипарадигменный
                язык программирования. Поддерживает объектно-ориентированный, императивный 
                и функциональный стили. `,]

let elemMenu = document.getElementById(`menu`).innerHTML;
console.log(elemMenu);




  