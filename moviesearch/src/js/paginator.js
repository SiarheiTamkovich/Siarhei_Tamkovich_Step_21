function addButtons(page, total) {
    divPaginator.insertAdjacentHTML('afterbegin',
    `<button class="paginator-btn_left" onclick="listLeft()">&#9668;&#9668;</button>
     <h3 id="listpage"> &emsp; page ${page} from ${total} &emsp; <h3>
     <button class="paginator-btn_right" onclick="listRight()">&#9658;&#9658;</button>
    `);
 //   console.log(listpage)
}

addButtons(counter.page, counter.total);

function listRight(){
    counter.page++;
    if (counter.page === counter.total + 1) counter.page = 1;
    listpage.innerHTML = `&emsp; page ${counter.page} from ${counter.total} &emsp;`; 
  //  console.log(counter.page)
    counterUrl = JSON.parse(localStorage.getItem("counter"));
    searchtxt.value = counterUrl.searchingText;
    getMovie(counter.page)
}

function listLeft(){
    counter.page--;
    if (counter.page === 0) counter.page = counter.total;
    listpage.innerHTML = `&emsp; page ${counter.page} from ${counter.total} &emsp;`;
  //  console.log(counter.page)
    counterUrl = JSON.parse(localStorage.getItem("counter"));
    searchtxt.value = counterUrl.searchingText;
    getMovie(counter.page) 
}