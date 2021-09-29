//--jsTask13 Event handling ---

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


//console.log(textBl.style.color)
function getColour1(){
 if (e.target.tagName !== 'Li') return;
 let col = colour1.style.backgroundColor;
 textBl.style.color = col;
}

function getColour2(){
  if (e.target.tagName !== 'Li') return;
    let col = colour2.style.backgroundColor;
    textBl.style.color = col;
}

function getColour3(){
  if (e.target.tagName !== 'Li') return;
    let col = colour3.style.backgroundColor;
    textBl.style.color = col;
}

colour1.addEventListener(`click`, getColour1);
colour2.addEventListener(`click`, getColour2);
colour3.addEventListener(`click`, getColour3);

/* --Task № 4  --*/
let textB4 = document.getElementById(`form4`);

function addComment(){
  let getInput = document.getElementById(`inp4`);
  let getText = document.getElementById(`textarea4`);

  let newComment = document.createElement(`p2`);
  newComment.innerHTML = getText.value;

  let date = document.createElement(`h3`);
  let dateNow = new Date;
  date.innerHTML = dateNow;
  
  let newUser = document.createElement(`h2`);
  newUser.innerHTML = getInput.value;
  
  let theFirstChild = textB4.firstChild;
  textB4.insertBefore(newUser, theFirstChild);
  textB4.insertBefore(date, theFirstChild);
  textB4.insertBefore(newComment, theFirstChild);
}

/* -----------------------------HOME WORK  -----------*/
/*-- Task № 1  --*/
const list = document.getElementById(`list`);
let li = list.children;
for (let i = 0; i < li.length; i++){
  if (!li[i].innerHTML.indexOf('http')) {
    li[i].style.textDecoration = `underline dashed`
   // console.log(li[i].innerHTML);
   // console.log(li[i].style)
  }
}

////--TODO Task № 2 menu accordion --
document.addEventListener(`click`, e => { //add listener
 if (e.target.tagName !== 'UL') return; // add filter by teg <ul>
   for (let children of e.target.children) { // set class
    children.classList.toggle('hidden')
  }
});

////--TODO Task № 3 marc text  --

let lastLi;
document.addEventListener('click', e => { // select li
  let li = e.target;   
  if (e.ctrlKey){                    // if Ctrl press
    li.classList.toggle('selected'); // add class selected  
    lastLi = li;  
  } else if (e.shiftKey) {  // if Shift press
    if (lastLi.id <= li.id) {
      for (let i = lastLi.id; i <= li.id; i++){
        let elem = document.getElementById(`${i}`);
        elem.className = `selected`
      }
    } else {
      for (let i = lastLi.id; i >= li.id; i--){
        let elem = document.getElementById(`${i}`);
        elem.className = `selected`
      }
    }
  } else {
    removeSelect();
    li.classList.toggle('selected'); // add class selected 
    lastLi = li;     
  }
});

function removeSelect(){
  let selected = books.querySelectorAll('.selected');
    for(let elem of selected) {
    elem.classList.remove('selected')
  }
}

////--TODO Task № 4 edit text with textaria--
textarea.classList.toggle(`hidden`); // hide textarea
document.addEventListener('keydown', e => { // add listener
   if (e.ctrlKey && e.key === `e`) {
      e.preventDefault(); // off default Ctrl+s
      textarea.classList.remove(`hidden`);
      textarea.classList.toggle(`textarea`); // make textarea visible
      textarea.value = text.innerHTML // add text
    }
    if (e.ctrlKey && e.key === `s`) {
      e.preventDefault();
      text.innerHTML = textarea.value
      textarea.classList.remove(`taxtarea`);
      textarea.classList.toggle(`hidden`);
    }
});

////--TODO Task № 5 sort table--
const users = [{
  firstname: `Mark`,
  lastname: `Zuckerberg`,
  age: 34, 
  company: `Facebook`,
}, {
  firstname: `Larry`,
  lastname: `Page`,
  age: 45, 
  company: `Google`,
}, {
  firstname: `Timothy`,
  lastname: `Cook`,
  age: 57, 
  company: `Apple`,
}, {
  firstname: `Bill`,
  lastname: `Gates`,
  age: 62, 
  company: `Microsoft`,
}];

function loadArr(arr){
  let count = 0;
  let iter = 0;
  for ( let children of cont5.children) {
    if (iter <= 3) {
    children.innerHTML = arr[count].firstname;
    } else if (iter <= 7) {
      children.innerHTML = arr[count].lastname;
    } else if (iter <= 11) {
      children.innerHTML = arr[count].age;
    } else if (iter <= 15) {
      children.innerHTML = arr[count].company;
    }
    count < 3 ? count++ : count = 0;
    iter++
  }
}

order.addEventListener('click', e => { 
  let id = e.target.id;
  users.sort((a, b) => (a.id > b.id) ? 1 : -1);
  loadArr(users);
})

loadArr(users);

////--TODO Task № 6 push block 
let block6 = document.getElementById(`cont6`)

//function move() {
  let x = 0;
  let y = 0;
  tracking.addEventListener(`mousemove`, e => {
  x = x + (e.x - x);
 // y = y + (e.y - y);
  block6.style.width = `` + x + `px`;
//  block6.style.height = `` + y + `px`;
  console.log(x)
})
// }

tracking.addEventListener(`click`, e => {
 // block6.style.width = '320px';
 //move();
  console.log(block6.style.width)
})




