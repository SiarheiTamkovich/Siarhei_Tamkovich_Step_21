const movie = document.querySelector('.movie');
const film = document.querySelector(`.film`);

let objMovie = getLocalStorage();

async function getMovie(page) {
  complete.innerText = `Loading...`
  search = searchtxt.value;
  const url = `http://www.omdbapi.com/?s=${searchtxt.value}*&plot=full&page=${page}&type=${select.value}&apikey=6cb20a41`;
  const res = await fetch(url);
  const data = await res.json();
 
  if (data.Response === `True`) {
    setLocalStorage(data);
    complete.innerText = `Found: ${data.totalResults} records`;
    film.innerHTML = ``;
    loadMovieToDom(data)
  } else if (data.Response === 'False'){
    complete.innerText = `Error: ${data.Error}`;
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
    newDiv.setAttribute(`data-inner`, newDiv.innerHTML);  // save innerHTML to attribute
    film.appendChild(newDiv);
    complete.innerText = `Total: ${data.totalResults} records`;
  } 
}

async function getAbout() {
  const elem = event.target.parentNode;
  const id = event.target.parentNode.id;
  const url = `http://www.omdbapi.com/?i=${id}&plot=short&apikey=6cb20a41`
  const res = await fetch(url);
  const data = await res.json();
  
  elem.innerHTML = `
  <div class="info">
    <h4>Title:</h4>
      <p> &emsp; ${data.Title}</p>
    <h4>Actors:</h4>
      <p> &emsp; ${data.Actors}</p>
    <h4>Country, Director, Awards:</h4>
      <p> &emsp; ${data.Country}, ${data.Director}, ${data.Awards}</p>
    <h4>Genre:, Language:, Year:</h4>
    <p> &emsp; ${data.Genre}, ${data.Language}, ${data.Year}</p>
      <h4>Plot:</h4>
      <p> &emsp; ${data.Plot}</p>
  </div>
  <button class="frame_btn" onclick="returnInner()" >Return</button> `;
  
}

function returnInner() {
  const elem = event.target.parentNode;
  elem.innerHTML = elem.dataset.inner; //  get data from date- attribute https://developer.mozilla.org/ru/docs/Learn/HTML/Howto/Use_data_attributes
}


  

