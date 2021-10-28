const divPaginator = document.querySelector(`.paginator`)

function addButtons(numberbtn, page) {
    let total = Math.ceil(numberbtn / page);
    divPaginator.insertAdjacentHTML('afterbegin',
    `<button class="paginator-btn_left">&#9668;&#9668;</button>
     <h3> &emsp; page 1 from 300 &emsp; <h3>
     <button class="paginator-btn_right">&#9658;&#9658;</button>
    `);
    console.log(total)
}

addButtons(objMovie.totalResults, 10);