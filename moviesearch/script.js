const movie = document.querySelector('.movie');
async function getMovie() {
  const url = `http://www.omdbapi.com/?i=tt3896198&apikey=6cb20a41`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data)
}

getMovie();
   