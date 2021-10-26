const movie = document.querySelector('.movie');
const film = document.querySelector(`.film`);
let objMovie = getLocalStorage();

//console.log(objMovie.Response)

async function getMovie() {
  complete.innerText = `Loading...`
  const url = `http://www.omdbapi.com/?s=${searchtxt.value}*&plot=full&page=1&type=${select.value}&apikey=6cb20a41`;
 // const url = `http://www.omdbapi.com/?i=tt0760170&plot=short&apikey=6cb20a41`
  const res = await fetch(url);
  const data = await res.json();
 
  if (data.Response === `True`) {
    setLocalStorage(data);
    complete.innerText = `Найдено: ${data.totalResults} записей`;
    film.innerHTML = ``;
    loadMovieToDom(data)
  } else if (data.Response === 'False'){
    complete.innerText = `Ошибка: ${data.Error}`;
    film.innerHTML = ``;
  }
}

function setLocalStorage(data) {
  let strMovie = JSON.stringify(data);
  localStorage.setItem('strMovie', strMovie);
}

function getLocalStorage() {
  if(localStorage.getItem('strMovie')) {
    let promiseMovie = localStorage.getItem('strMovie');
    let arrMovie = JSON.parse(promiseMovie);
    return arrMovie;
  }
}
window.addEventListener('load', getLocalStorage);

loadMovieToDom(objMovie);

function loadMovieToDom(data) {
  for (let i = 0; i < data.Search.length; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.toggle(`film_item`);
    newDiv.id = data.Search[i].imdbID;
    // insert HTML:  insertAdjacentHTML 'beforebegin' 'afterbegin' 'beforeend' 'afterend'
    newDiv.insertAdjacentHTML('afterbegin',
    ` <p class="item_type"> ${data.Search[i].Type}</p>
      <h2 class="item_title">${data.Search[i].Title}</h2>
      <h3 class="item_year">${data.Search[i].Year}</h3>
      <div class="item_poster"><img src="${data.Search[i].Poster}" class="poster_pict"></div>
      <button class="item_btn" onclick="getAbout()">Details</button
    `);
    film.appendChild(newDiv);
  } 
}

async function getAbout() {
  const elem = event.target.parentNode;
  const id = event.target.parentNode.id;
  const url = `http://www.omdbapi.com/?i=${id}&plot=short&apikey=6cb20a41`
  const res = await fetch(url);
  const data = await res.json();
  
  let previosHTML =  elem.innerHTML;
  elem.innerHTML = `
  <div class="frame">${data.Actors}</div>
  <button class="frame_btn" id="elem" >Return</button> `
  
  elem.onclick = function() {
    elem.innerHTML = previosHTML;
  } 
}


  

