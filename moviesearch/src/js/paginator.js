const divPaginator = document.querySelector(`.paginator`)
const counter = {
    page: 1,
    total: objMovie.totalResults / 10,
}

function addButtons(page, total) {
    divPaginator.insertAdjacentHTML('afterbegin',
    `<button class="paginator-btn_left">&#9668;&#9668;</button>
     <h3 id="listpage"> &emsp; page ${page} from ${total} &emsp; <h3>
     <button class="paginator-btn_right" onclick="listRight()">&#9658;&#9658;</button>
    `);
    console.log(listpage)
}

addButtons(counter.page, counter.total);

function listLeft(){
    
}

function listRight(){
    counter.page++;
    listpage.innerHTML = `&emsp; page ${counter.page} from ${counter.total} &emsp;`;
 //   getMovie(counter.page)
    if (counter.page === counter.total) counter.page = 1;
}