//--jsTask7 Classwork Array ---

/* --Task № 1   --
let arr = [9, 1, 10, 4, 5, 12, 13, 25, 100, 54];

// p. 1 display arr
document.write(`${arr} <br>`)
function arrayOnDisplay(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            document.write(`${array[i]}, `);
        }
    }
}
arrayOnDisplay(arr);

// p. 3 summa
function summArr(array) {
    let s = 0;
    for (let i = 0; i < array.length; i++) {
        s += array[i];
    }
    document.write(`<br> Sum: ${s}`);
}
summArr(arr);

// p. 4 max
function maxArr(array) {
    let s = 0;
    for (let i = 0; i < array.length; i++) {
       if  (s < array[i]) {
           s = array[i];
       }
 //      console.log(s);
    }
    document.write(`<br> Max: ${s} <br>`);
}
maxArr(arr);

// p. 5 add element po index
function addItem(index, element) {
    arr[index] = element;
}
addItem(10, 333);
document.write(`${arr} <br>`);

// p. 6 delete element po index
function delItem(index, elem) {
    arr.splice(index, elem);
}
delItem(10, 1);
document.write(`${arr} <br>`);

/* --Task № 2   --
let arr1 = [13, 9, 1, 10, 4, 5, 12, 13, 25, 100, 54, 12];
let arr2 = [12, 8, 0, 12, 13, 99, 13];
document.write(`${arr1} <br>`);
document.write(`${arr2} <br>`);

// p. 1 concat 

function concatArr(array1, array2) {
    let array3 = array1.concat(array2);
    document.write(`${array3} <br>`);
    let i = 0;
    while (i < array3.length) {
        let ii = i + 1;
        while (ii < array3.length) {
 //           console.log(`i=${i}=${array3[i]}---ii=${ii}=${array3[ii]}`);
             array3[i] === array3[ii] ? array3.splice(ii, 1): 0;
            ii++;
        }
        i++;
    }
    document.write(`${array3} <br>`);
}
concatArr(arr1, arr2);

// p. 2 concat */

//---------------------------Homework ---------------------------------

/* --Task № 1 shopping list   --*/
let shopList = [
    {name: `Vodka`, quantity: 5,  unit: `bottle`, purchased: `Yes`},
    {name: `Wine`,  quantity: 10, unit: `bottle`, purchased: `Yes`},
    {name: `Beer`,  quantity: 20, unit: `bottle`, purchased: `Yes`},
    {name: `Bread`, quantity: 1,  unit: `kg`,     purchased: `No` },
    {name: `Glass`, quantity: 5,  unit: `pieces`, purchased: `Yes`},
    {name: `Bacon`, quantity: 2,  unit: `pieces`, purchased: `No` },
]
// p.1 - sort by No parchased  

console.log(shopList);
let sortByPurch = (a, b) => a.purchased > b.purchased ? 1 : -1;
shopList.sort(sortByPurch);
function printList() { // Print shoppig list
    document.write(`<h3> My shopping list: </h3>`)
    shopList.forEach(list => {
    document.write(`
    ${list.name} : ${list.quantity} ${list.unit} - ${list.purchased} <br>
    `);
    })
}
printList();

// p.2 - parchase two more bottles vodka 
let parchas = shopList.find(product => product.name == `Vodka`);
parchas.quantity += 2;
console.log(parchas.name, parchas.quantity);
printList();

// p.3 - parchase bread 
let parchas2 = shopList.find(product => product.name == `Bread`);
parchas2.purchased = `Yes`;
console.log(parchas.name, parchas.quantity);
printList();




