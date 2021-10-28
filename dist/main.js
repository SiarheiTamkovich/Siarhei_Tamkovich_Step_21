/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./moviesearch/src/js/index.js":
/*!*************************************!*\
  !*** ./moviesearch/src/js/index.js ***!
  \*************************************/
/***/ (() => {

eval("const movie = document.querySelector('.movie');\nconst film = document.querySelector(`.film`);\nlet objMovie = getLocalStorage();\n\n//console.log(objMovie.Response)\n\nasync function getMovie(page) {\n  complete.innerText = `Loading...`\n  const url = `http://www.omdbapi.com/?s=${searchtxt.value}*&plot=full&page=${page}&type=${select.value}&apikey=6cb20a41`;\n  const res = await fetch(url);\n  const data = await res.json();\n \n  if (data.Response === `True`) {\n    setLocalStorage(data);\n    complete.innerText = `Found: ${data.totalResults} records`;\n    film.innerHTML = ``;\n    loadMovieToDom(data)\n  } else if (data.Response === 'False'){\n    complete.innerText = `Error: ${data.Error}`;\n    film.innerHTML = ``;\n  }\n}\n\nfunction setLocalStorage(data) {\n  let strMovie = JSON.stringify(data);\n  localStorage.setItem('strMovie', strMovie);\n}\n\nfunction getLocalStorage() {\n  if(localStorage.getItem('strMovie')) {\n    let promiseMovie = localStorage.getItem('strMovie');\n    let arrMovie = JSON.parse(promiseMovie);\n    return arrMovie;\n  }\n}\nwindow.addEventListener('load', getLocalStorage);\n\nloadMovieToDom(objMovie);\n\nfunction loadMovieToDom(data) {\n  for (let i = 0; i < data.Search.length; i++) {\n    let newDiv = document.createElement(\"div\");\n    newDiv.classList.toggle(`film_item`);\n    newDiv.id = data.Search[i].imdbID;\n    // insert HTML:  insertAdjacentHTML 'beforebegin' 'afterbegin' 'beforeend' 'afterend'\n    newDiv.insertAdjacentHTML('afterbegin',\n    ` <p class=\"item_type\"> ${data.Search[i].Type}</p>\n      <h2 class=\"item_title\">${data.Search[i].Title}</h2>\n      <h3 class=\"item_year\">${data.Search[i].Year}</h3>\n      <div class=\"item_poster\"><img src=\"${data.Search[i].Poster}\" class=\"poster_pict\"></div>\n      <button class=\"item_btn\" onclick=\"getAbout()\">Details</button\n    `);\n    film.appendChild(newDiv);\n    complete.innerText = `Total: ${data.totalResults} records`;\n  } \n}\n\nasync function getAbout() {\n  const elem = event.target.parentNode;\n  const id = event.target.parentNode.id;\n  const url = `http://www.omdbapi.com/?i=${id}&plot=short&apikey=6cb20a41`\n  const res = await fetch(url);\n  const data = await res.json();\n  \n  let previousHTML = elem.innerHTML;\n  elem.innerHTML = `\n  <div class=\"info\">\n    <h4>Title:</h4>\n      <p> &emsp; ${data.Title}</p>\n    <h4>Actors:</h4>\n      <p> &emsp; ${data.Actors}</p>\n    <h4>Country, Director, Awards:</h4>\n      <p> &emsp; ${data.Country}, ${data.Director}, ${data.Awards}</p>\n    <h4>Genre:, Language:, Year:</h4>\n    <p> &emsp; ${data.Genre}, ${data.Language}, ${data.Year}</p>\n      <h4>Plot:</h4>\n      <p> &emsp; ${data.Plot}</p>\n  </div>\n  <button class=\"frame_btn\" id=\"btnreturn\" >Return</button> `;\n  \n  btnreturn.onclick = function() {\n    elem.innerHTML = previousHTML;\n  } \n}\n\n\n  \n\n\n\n//# sourceURL=webpack://siarhei_tamkovich_step_21/./moviesearch/src/js/index.js?");

/***/ }),

/***/ "./moviesearch/src/js/paginator.js":
/*!*****************************************!*\
  !*** ./moviesearch/src/js/paginator.js ***!
  \*****************************************/
/***/ (() => {

eval("const divPaginator = document.querySelector(`.paginator`)\r\n\r\nfunction addButtons(numberbtn, page) {\r\n    let total = Math.ceil(numberbtn / page);\r\n    divPaginator.insertAdjacentHTML('afterbegin',\r\n    `<button>1 str.</button>\r\n    `);\r\n    console.log(total)\r\n}\r\n\r\naddButtons(objMovie.totalResults, 10);\n\n//# sourceURL=webpack://siarhei_tamkovich_step_21/./moviesearch/src/js/paginator.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./moviesearch/src/js/index.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./moviesearch/src/js/paginator.js"]();
/******/ 	
/******/ })()
;