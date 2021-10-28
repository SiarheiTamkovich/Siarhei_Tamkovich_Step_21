const divPaginator = document.querySelector(`.paginator`)

function addButtons(numberbtn, page) {
    let total = Math.ceil(numberbtn / page);
    divPaginator.insertAdjacentHTML('afterbegin',
    `<button>1 str.</button>
    `);
    console.log(total)
}

addButtons(objMovie.totalResults, 10);