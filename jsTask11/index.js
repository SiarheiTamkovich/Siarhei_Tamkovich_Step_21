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

/* --Task № 2 track mouse coordinates --*
document.querySelector('#container').onmousemove = function (event){
  document.querySelector('#x').innerHTML = event.offsetX;
  document.querySelector('#y').innerHTML = event.offsetY;
  if( event.which == 1){
      document.querySelector('#click').innerHTML = 'Левая кнопка';
  } else if(event.which == 3){
      document.querySelector('#click').innerHTML = 'Правая кнопка';
  }
}

/* --Task № 2 track mouse coordinates with addEventListener--*/
let elem = document.querySelector(`#container`);
let X = document.querySelector(`#x`);
let Y = document.querySelector(`#y`);

document.addEventListener(`mousemove`, function(event){
  document.querySelector('#x').innerHTML = event.offsetX;
  document.querySelector('#y').innerHTML = event.offsetY;
});
document.addEventListener(`mouseup`, function(event){
  if (event.button == 0){
   document.querySelector('#click').innerHTML = 'Левая кнопка';
  } else if (event.button == 2) {
   document.querySelector('#click').innerHTML = 'Правая кнопка'
  }
});


  