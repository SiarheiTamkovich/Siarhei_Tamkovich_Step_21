//--jsTask15 Todo list ---

// create Data Base of notes
class BdToDoList {
    
    constructor (bdTips) {
        this.bdTips = bdTips;
    }
    addItem(item){     
        this.bdTips.push(item);
    }

}
const bdToDoList = new BdToDoList([]);

// create object of tips
class TodoTip {
    constructor(id, text, isChecked, isDeleted){
        this.id = id;
        this.text = text;
        this.isChecked = isChecked;
        this.isDeleted = isDeleted;
    }
}

// some tips for tests
bdToDoList.addItem(new TodoTip (`tip00`, `Buy a new car`, false, false));
bdToDoList.addItem(new TodoTip (`tip00`, `Write a program "ToDoList"`, false, false));

// The main interface block
class InterfaceToDo {
    
    constructor (tipContainer){
        this.tipContainer = tipContainer;
    }
    
    loadNotesToDocument(bdToDoList){ 
        for (let i = 0; i < bdToDoList.bdTips.length; i++){
            let tip = document.createElement(`div`);
            this.tipContainer.appendChild(tip);
            tip.className = `tip-item`;
            tip.id = `tip${i}`
            tip.innerHTML = `<input class="item-check" type="checkbox" id="ch${i}" onclick="interfaceToDo.checkItem()">
            <input class="tip-item_text" type="text" value="${bdToDoList.bdTips[i].text}" readonly id="txt${i}" onkeypress="saveEditText()">
            <button class="item-btn_edit" id="btnedit${i}" onclick="editItem()">&#10000;</button>
            <button class="item-btn_delete" id="btndelete${i}">&#10006;</button>`; 
        }
    }

    addNewItem() { 
       bdToDoList.addItem(new TodoTip (`tip00`, newTipTxt.value, false, false)); // add tips to data base
       while (this.tipContainer.firstChild) { // clear container
        this.tipContainer.removeChild(this.tipContainer.firstChild); 
        }
       this.loadNotesToDocument(bdToDoList); // load data to container
    }

    checkItem() {
    //   console.log(event.target.parentNode.childNodes[2])
        event.target.parentNode.childNodes[2].classList.toggle("crossed");
        
    }

    editItem() {
    //  console.log(event.target.parentNode.childNodes);
        event.target.parentNode.childNodes[2].removeAttribute(`readonly`);
        event.target.parentNode.childNodes[2].classList.toggle("edit");
    }

    saveEditText() {
        event.target.parentNode.childNodes[2].classList.toggle("edit");
    }
}

// define of Div container
const tipContainer = document.querySelector(`.tipContainer`);
interfaceToDo = new InterfaceToDo(tipContainer); // create interface and start

interfaceToDo.loadNotesToDocument(bdToDoList); // load notes





