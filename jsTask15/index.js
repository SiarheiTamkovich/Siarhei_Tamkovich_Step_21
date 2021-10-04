//--jsTask15 Todo list ---
const tipContainer = document.querySelector(`.tipContainer`);

class TodoTip {
    constructor(id, text, isChecked, isDeleted){
        this.id = id;
        this.text = text;
        this.isChecked = isChecked;
        this.isDeleted = isDeleted;
    }
}

const bdToDoList = [];
addItem(new TodoTip (`tip001`, `Buy a new car`, false, false));
addItem(new TodoTip (`tip002`, `Write a program "ToDoList"`, false, false));
//console.log(bdToDoList)

loadNotes();

function loadNotes(){
    for (let i = 0; i < bdToDoList.length; i++){
        ${bdToDoList[i].text}
    }
}
function addItem(tip){
    if (tip) {
        bdToDoList.push(tip);
    } else { 
        bdToDoList.push(new TodoTip(`tip001`, `${newTipTxt.value}`, false, false));
        loadNotes();
    }
}

function addItemInList(item){
    let tip = document.createElement(`div`);
    tip.className = `tip-item`;
    tip.innerHTML = `<input class="item-check" type="checkbox">
    <p class="tip-item_text"></p>
    <button class="item-btn_edit">&#10000;</button>
    <button class="item-btn_delete">&#10006;</button>`
    tipContainer.appendChild(item);
}


