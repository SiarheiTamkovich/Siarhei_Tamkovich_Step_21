const movie = document.querySelector('.movie');

async function getMovie() {
  const url = `http://www.omdbapi.com/?s=gum*&plot=full&page=1&type=movie&apikey=6cb20a41`;
 // const url = `http://www.omdbapi.com/?i=tt0760170&plot=short&apikey=6cb20a41`
  const res = await fetch(url);
  const data = await res.json();
  complete.innerText = `Loading...`
  setLocalStorage(data);
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

let objMovie = getLocalStorage();
console.log(objMovie)
complete.innerText = `Найдено: ${objMovie.totalResults} записей`;

const film = document.querySelector(`.film`);

for (let i = 0; i < objMovie.Search.length; i++) {
  let newDiv = document.createElement("div");
      newDiv.classList.toggle(`film_item`)
      newDiv.innerHTML = `
      <p class="item_type"> ${objMovie.Search[i].Type}</p>
      <h2 class="item_title">${objMovie.Search[i].Title}</h2>
      <h3 class="item_year">${objMovie.Search[i].Year}</h3>
      <div class="item_poster"><img src="${objMovie.Search[i].Poster}" class="poster_pict"></div>
      <button class="item_btn">Details</button`;
      film.appendChild(newDiv);
} 

    
