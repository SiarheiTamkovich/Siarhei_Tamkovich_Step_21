//--jsTask12 Event handling ---

// /* --Task № 1  --*/
// let tabl1 = document.querySelector(`#tabl1`);
// let cell1 = document.getElementsByClassName(`cell`)
// console.log(cell1.length);

// function hoverOn(event){
//  console.log(event.target.classList);
//  event.target.classList.add(`red`);

// }

// tabl1.addEventListener(`mouseover`, hoverOn);

// /* --Task № 2  --*/
// let text2 = document.getElementById(`text2`);

// function selectOff(){
//   //console.log(`false`)
//   return false;
// }

// text2.addEventListener(`click`, selectOff);

// /* --Task № 4  --*/
// let calcWind = document.getElementById(`pole4`);

// function addDigit(){
//   calcWind.innerHTML += event.target.innerHTML;
// }
// function result(){
//   let res = calcWind.innerHTML;
//   res = eval(res);
//   calcWind.innerHTML += `=` + res;
// //  console.log(calcWind.innerHTML);
// }
// function clearCalc(){
//   calcWind.innerHTML = ``;
// }

/* -----------------------Homework --------------------*/
/* --Task № 1 progress bar --*/
// const progress = document.querySelector('.progress');

// progress.addEventListener('input', function() {
//   let value = this.value;
//   this.style.background = `linear-gradient(to right,
//                        #82CFD0 0%, #82CFD0 ${value}%,
//                        #fff ${value}%, white 100%)`
// })

// /* --Task № 2 slider --*/
// const arrPic = [ "https://bit.ly/3ifSb8r",
//                  "https://bit.ly/3A02lzP",
//                  "https://bit.ly/3uoblOh",
//                  "https://bit.ly/3F4nmgH",
//                  "https://bit.ly/3mtnjTl",
//                 ]
// pic.src = arrPic[0];

// const counter = { n: 0,}
           
// function left(){
//   if (counter.n === 4) counter.n = 0; 
//   counter.n++;
//   pic.src = arrPic[counter.n];
// }
           
// function right(){
//   if (counter.n === 0) counter.n = 5; 
//   counter.n--;
//   pic.src = arrPic[counter.n];
//   console.log(counter.n)
// }

/* --Task № 3 text blocks --*/
let isHidden 
textblock.addEventListener(`click`, e => {
  let isHidden = e.target.parentNode.childNodes[3].classList.value;
  if (isHidden) {
    e.target.parentNode.childNodes[3].classList.remove(`hidden`);
  } else {
    e.target.parentNode.childNodes[3].classList.add(`hidden`);
  }
})

/* --Task № 4  blocks --*/
const arrNews = [
  {
    head: `Lorem ipsum dolor sit`,
    news: ` Consectetur adipisicing elit. Doloremque neque eveniet voluptatibus similique fuga, animi a placeat quibusdam fugiat consequuntur molestiae explicabo ullam repudiandae, corporis repellat id nemo ab velit.
            Consectetur adipisicing elit. Doloremque neque eveniet voluptatibus similique fuga, animi a placeat quibusdam fugiat consequuntur molestiae explicabo ullam repudiandae, corporis repellat id nemo ab velit.`
  },
  {
    head: `Ipsum dolor sit`,
    news: `Adipisicing elit. Doloremque neque eveniet voluptatibus similique fuga, animi a placeat quibusdam fugiat consequuntur molestiae explicabo ullam repudiandae, corporis repellat id nemo ab velit.`
  },
  {
    head: `Doloremque neque`,
    news: `Neque eveniet voluptatibus similique fuga, animi a placeat quibusdam fugiat consequuntur molestiae explicabo ullam repudiandae, corporis repellat id nemo ab velit.`
  },
  {
    head: `Eveniet voluptatibus `,
    news: `Eveniet voluptatibus similique fuga, animi a placeat quibusdam fugiat consequuntur molestiae explicabo ullam repudiandae, corporis repellat id nemo ab velit.`
  },
];

let n = 0;
function addNews() {
  cont4.childNodes[1].innerHTML += `
  <h5> ${arrNews[n].head}</h5><br>
  <p id="news" class="news-animation"> ${arrNews[0].news}</p>`;
  cont4.childNodes[1].classList.add('news-animation.news-show');
  let elem = document.querySelector(`.news-animation`);
  sleep(500)
  elem.className = (`news-animation.news-show`);
console.log(elem.className)
//console.log(n);
  if (n < 3) {
    n++ ;
  } else {
    n = 0;
    return n;
  }
}
  
addNews()

cont4.addEventListener(`scroll`, debounce(checkSlide));

function checkSlide(e){
 // console.count(e);
 // console.log(window.scrollY)
 // console.log(window.innerHeight)
  slideInAt = (window.scrollY + window.innerHeight)
 // console.log(slideInAt)
  if (slideInAt > 900) addNews();
}

function debounce(func, wait = 100, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('news-show');
    }
  });
}

let options = {
  threshold: [0.5] 
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.news-animation');

for (let elm of elements) {
  observer.observe(elm);
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

/* --Task № 5 calculator --*/
