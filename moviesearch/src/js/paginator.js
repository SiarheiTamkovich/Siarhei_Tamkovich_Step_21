function addButtons(page, total) {
    divPaginator.insertAdjacentHTML('afterbegin',
    `<button class="paginator-btn_left" onclick="listLeft()">&#9668;&#9668;</button>
     <h3 id="listpage"> &emsp; page ${page} from ${total} &emsp; <h3>
     <button class="paginator-btn_right" onclick="listRight()">&#9658;&#9658;</button>
    `);
 //   console.log(listpage)
}

addButtons(counter.page, counter.total);

function listLeft(){
    
}

function listRight(){
    counter.page++;
    listpage.innerHTML = `&emsp; page ${counter.page} from ${counter.total} &emsp;`;
 //   console.log(counter.total)
    counterUrl = JSON.parse(localStorage.getItem("counter"));
    searchtxt.value = counterUrl.searchingText;
    getMovie(counter.page)
    if (counter.page === counter.total) counter.page = 1;
}

function listLeft(){
    counter.page--;
    if (counter.page === 0) counter.page = 1;
    listpage.innerHTML = `&emsp; page ${counter.page} from ${counter.total} &emsp;`;
 //   console.log(counter.total)
    counterUrl = JSON.parse(localStorage.getItem("counter"));
    searchtxt.value = counterUrl.searchingText;
    getMovie(counter.page) 
}