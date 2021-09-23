//--jsTask12 Event handling ---

/* --Task № 1  --*/
let tabl1 = document.querySelector(`#tabl1`);
let cell1 = document.getElementsByClassName(`cell`)
console.log(cell1.length);

function hoverOn(event){
 console.log(event.target.classList);
 event.target.classList.add(`red`);

}


tabl1.addEventListener(`mouseover`, hoverOn);


/* --Task № 2  --*/
let text2 = document.getElementById(`text2`);

function selectOff(){
  //console.log(`false`)
  return false;
}

text2.addEventListener(`click`, selectOff);

/* --Task № 4  --*/
let calcWind = document.getElementById(`pole4`);

function addDigit(){
  calcWind.innerHTML += event.target.innerHTML;
}
function result(){
  let res = calcWind.innerHTML;
  res = eval(res);
  calcWind.innerHTML += `=` + res;
//  console.log(calcWind.innerHTML);
}
function clearCalc(){
  calcWind.innerHTML = ``;
}
