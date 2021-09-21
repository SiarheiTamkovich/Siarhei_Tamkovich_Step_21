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
    let arrBtn = [];
    
    for (let i = 0; i < btnMenuItem.length; i++){  //! make btn bock
      let crBtn = document.createElement(`button`);
      crBtn.id = `bt${i}`;
      crBtn.className = `none`;
      crBtn.innerHTML = btnMenuItem[i];
      menu.append(crBtn);

      function clear(){
      let arrBt = document.getElementsByClassName(`button-pushed`);
        for(let ii = 0; ii < arrBt.length; ii++){
          arrBt[ii].className = `none`;
        }
      }
     
      let liBtn = document.querySelector(`#bt${i}`) // add listeners to buttons
      
      liBtn.addEventListener(`click`, function(){  
          text.innerHTML = textItem[i];
          clear();
          crBtn.className = `button-pushed`;
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
//console.log(createItem.clear())

//---------------------------Homework ---------------------------

/*--Task № 1 check input --*/
let inpP = document.getElementById(`inpH1`);
inpP.addEventListener(`input`, check);
function check(){
  let str=inpP.value.replace(/[0-9]/g, "");
  inpP.value = str;
}

/*--Task № 2 create modal window --*/
function openWindow(){
  let element = document.getElementById(`blockTask2`); //! define block
  let newDiv = document.createElement(`div`); //! create new Div
  let newH2 = document.createElement(`h2`); //! create h2 header
  let node1 = document.createTextNode(`Hello from Modal Window!`) //! create text node for h2 header

  let btnClose = document.createElement(`button`); //! create New button
  let node2 = document.createTextNode(`Close`); //! create text node for New button
  
  element.appendChild(newDiv); // add new Div into Div
  newDiv.appendChild(newH2); // add H2 header into new Div
  newH2.appendChild(node1); // add text node into H2 header

  newDiv.appendChild(btnClose); // add new button into new Div
  btnClose.appendChild(node2); // add text node into new button

  newDiv.className = `text2`; // add styles
  newDiv.id = `newDiv`; // add id
  btnClose.id = `btnClose`; // add id
  btnClose.setAttribute('onclick','closeWindow()'); // add attribute
  
}

function closeWindow(){
  let element = document.getElementById(`blockTask2`); //! define block
  let child = document.getElementById(`newDiv`); //! define child block to remove
  
  element.removeChild(child); // remove block
}

/*--Task № 3 football --*/
let pole = document.getElementById(`pole`); //? get pole
let boll = document.getElementById(`boll`); //? get boll

function click(event){  
  let left = event.offsetX; //? get coordinate X
  let up = event.offsetY; //? get coordinate Y

  boll.style = `left: ${left}px; top: ${up}px;` // boll move
 // console.log(left, up)
}
pole.addEventListener(`click`, click); //! add listener
console.log()

/*--Task № 4 traffic lights --*/
let trLights = {
  grey: `background-color: grey;`,
  green: `background-color: green;`,
  yellow: `background-color: yellow;`,
  red: `background-color: red;`,
}

counter = { // add counter
  light: 1
}

document.getElementById(`lightGreen`).style = trLights.green; // default green

function selectLight(){
  counter.light++ ;
  let green = document.getElementById(`lightGreen`); //! define light green
  let yellow = document.getElementById(`lightYellow`); //! define light yalow
  let red = document.getElementById(`lightRed`); //! define light red

  switch (counter.light){
    case 1:
     green.style = trLights.green;
     yellow.style = trLights.grey;
     red.style = trLights.grey;
     break;
    case 2:
     green.style = trLights.grey;
     yellow.style = trLights.yellow;
     red.style = trLights.grey;
     break;
    case 3:
      green.style = trLights.grey;
      yellow.style = trLights.grey;
      red.style = trLights.red;
      break;
    case 4:
      green.style = trLights.green;
      yellow.style = trLights.grey;
      red.style = trLights.grey;
      counter.light = 1;
      break;
  }
}







  