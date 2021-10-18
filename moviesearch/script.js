
const movie = document.querySelector('.movie');

async function getWeather() {
  const url = `http://www.omdbapi.com/`;
  const res = await fetch(url);
  const data = await res.json();
}

getWeather();
   