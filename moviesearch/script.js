const movie = document.querySelector('.movie');
async function getMovie() {
  const url = `http://www.omdbapi.com/?s=mesto*&plot=full&page=1&type=movie&apikey=6cb20a41`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data)
}

getMovie();
   