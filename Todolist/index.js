//--jsTask15 Todo list ---

// create Data Base of notes
class BdToDoList {
    
    constructor (bdTips) {
        this.bdTips = bdTips;
    }
    addItem(item){     
        this.bdTips.unshift(item);
    }
    saveToLocalStorage(){
        localStorage.setItem("bdTips", JSON.stringify(this.bdTips));
    }
    loadFromLocalStorage(){  
        if (localStorage.getItem("bdTips")) {
            this.bdTips = JSON.parse(localStorage.getItem("bdTips"));
        }
    }
    get countAllItem(){
      let arrValue = this.bdTips.map(e => e.isDeleted);
      let countFalse = arrValue.filter(function(x) {return x == false}).length
      return countFalse;
    }
    get countDoneItem(){
        let countCheckedAndNoDeleted = 0;
        for (let i = 0; i < this.bdTips.length; i++){
            if (this.bdTips[i].isChecked == `checked` && this.bdTips[i].isDeleted == false){
                countCheckedAndNoDeleted++;
            }
        }
    return countCheckedAndNoDeleted;
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
bdToDoList.addItem(new TodoTip (`tip00`, `Buy a new car`, ``, false));
bdToDoList.addItem(new TodoTip (`tip00`, `Write a program &#34;ToDoList&#34;`, ``, false));

// The main interface block
class InterfaceToDo {
    constructor (tipContainer){
        this.tipContainer = tipContainer;
    } 
    loadNotesToDocument(bdToDoList){ 
           
        bdToDoList.loadFromLocalStorage();
        interfaceToDo.progressUpdate();
 
        for (let i = 0; i < bdToDoList.bdTips.length; i++){
            if (bdToDoList.bdTips[i].isDeleted != true){
                let tip = document.createElement(`div`);
                this.tipContainer.appendChild(tip);
                tip.className = `tip-item`;
                tip.id = `tip${i}`
                tip.innerHTML = `<input class="item-check" type="checkbox" id="ch${i}" onclick="interfaceToDo.checkItem()" ${bdToDoList.bdTips[i].isChecked}>
                <input class="tip-item_text" type="text" value="${bdToDoList.bdTips[i].text}" readonly id="txt${i}">
                <button class="item-btn_edit" id="btnedit${i}" onclick="interfaceToDo.editItem()">✍</button>
                <button class="item-btn_delete" id="btndelete${i}" onclick="interfaceToDo.delateItem()">&#10006;</button>`;
                if (bdToDoList.bdTips[i].isChecked === `checked`) { // add crossed line to text
                    tip.children[1].classList.toggle(`crossed`);
                }
            }
        }
    }
    addNewItem() { 
       bdToDoList.addItem(new TodoTip (`tip00`, newTipTxt.value, ``, false)); // add tips to data base
       bdToDoList.saveToLocalStorage();
       this.clearCont(); // clear
       this.loadNotesToDocument(bdToDoList); // load data to container  
       newTipTxt.value = ``; // clear input field
    }
    checkItem() {
        this.clearCont(); // clear
        let nRec = (event.target.id).replace(/[^0-9]/g, '');
        if (bdToDoList.bdTips[nRec].isChecked === `checked`) { // check on double click
            bdToDoList.bdTips[nRec].isChecked = ``;
        } else {
            bdToDoList.bdTips[nRec].isChecked = `checked`;
        }
        bdToDoList.saveToLocalStorage(); // save
        this.loadNotesToDocument(bdToDoList); // load
    }
    editItem() {
        event.target.parentNode.childNodes[2].removeAttribute(`readonly`);
        event.target.parentNode.childNodes[2].classList.toggle("edit");
            if (event.target.parentNode.childNodes[4].innerHTML === `✓`){
               event.target.parentNode.childNodes[4].innerHTML = `✍`;
               return;
            } else if (event.target.parentNode.childNodes[4].innerHTML === `✍`){
              event.target.parentNode.childNodes[4].innerHTML = `✓`;
            return;
        }
    }
    delateItem() {
        this.clearCont(); // clear
        let nRec = (event.target.id).replace(/[^0-9]/g, '');
        if (confirm(`Are you sure you need to delete the note?`)){
         bdToDoList.bdTips[nRec].isDeleted = true // set object property on deleted
        }
        bdToDoList.saveToLocalStorage(); // save
        this.loadNotesToDocument(bdToDoList); // load
    }
    delateItemsAll() {
        if (!confirm(`Are you sure you need to delete all the notes?`)) return;
        for (let i = 0; i < bdToDoList.bdTips.length; i++){
            if ( bdToDoList.bdTips[i].isChecked === `checked`){ // check checked items
                this.clearCont(); // clear
                bdToDoList.bdTips[i].isDeleted = true; 
                bdToDoList.saveToLocalStorage(); // save
                this.loadNotesToDocument(bdToDoList); // load
            }
        }
    }
    saveEditText() {
        event.target.parentNode.childNodes[2].classListt.oggle("edit");
    }
    clearCont(){ // method for clear container
        while (this.tipContainer.firstChild) { 
            this.tipContainer.removeChild(this.tipContainer.firstChild); 
        }
    }
    progressUpdate() {
        all.innerHTML = bdToDoList.countAllItem;
        done.innerHTML = bdToDoList.countDoneItem;
        barwidth.style.width = `${done.innerHTML * 100 /  all.innerHTML}%`
    }
}

// define of Div container
const tipContainer = document.querySelector(`.tipContainer`);
interfaceToDo = new InterfaceToDo(tipContainer); // create interface
interfaceToDo.loadNotesToDocument(bdToDoList); // load notes and start






