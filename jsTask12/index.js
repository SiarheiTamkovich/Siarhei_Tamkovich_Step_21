//--jsTask12 Event handling ---

/* --Task № 1  --*/
let block = document.querySelector(`#block`);
let incr = document.querySelector(`#incr`);
let deg = document.querySelector(`#deg`);

let num = 0;

function incre(){
    num++;
    block.innerHTML = num;
}

function decre(){
    num--;
    block.innerHTML = num;
}

incr.addEventListener(`click`, incre);
deg.addEventListener(`click`, decre);

/* --Task № 2  --*/

let block1 = document.querySelector('#block1');
let btn = document.querySelector('#btn');

let num1 = 0;

function addB() {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  let el = document.createElement('div');
  el.style.width = '100px';
  el.style.height = '60px';
  el.style.backgroundColor = "#" + randomColor;
  el.id = 'id' + num1;
  num1++;
  block1.append(el);
  el.addEventListener('click', deleteBlock);
}

function deleteBlock(event) {
  const elId = event.target.id;
  let el = document.querySelector(`#${elId}`);
  block1.removeChild(el);
}

btn.addEventListener('click', addB);

/* --Task № 3  --*/

let colour1 = document.getElementById(`col1`);
let colour2 = document.getElementById(`col2`);
let colour3 = document.getElementById(`col3`);
let textBl = document.getElementById(`taxt`)


console.log(textBl.style.color)
function getColour1(){
 let col = colour1.style.backgroundColor;
 textBl.style.color = col;
}

function getColour2(){
    let col = colour2.style.backgroundColor;
    textBl.style.color = col;
}

function getColour3(){
    let col = colour3.style.backgroundColor;
    textBl.style.color = col;
}

colour1.addEventListener(`click`, getColour1);
colour2.addEventListener(`click`, getColour2);
colour3.addEventListener(`click`, getColour3);



