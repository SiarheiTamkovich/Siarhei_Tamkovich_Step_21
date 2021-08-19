//--jsTask7 Classwork Array ---

/* --Task № 1   --*/
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
       console.log(s);
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

/* --Task № 2   --*/
let arr1 = [9, 1, 10, 4, 5, 12, 13, 25, 100, 54];
let arr2 = [8, 0, 12, 13, 99];
document.write(`${arr1} <br>`);
document.write(`${arr2} <br>`);

// p. 1 concat
function concatArr(array1, array2) {
    let array3 = array1.concat(array2);
    document.write(`${array3} <br>`);
    for (let i = 0; i < array1.length; i++) {
        for (let ii = 0; ii < array2. length; ii++){
            array1[i] === array2[ii] ? array1.splice(i, 1) : 0;
        }
    }
    array3 = array1.concat(array2);
    document.write(`${array3} <br>`);
}
concatArr(arr1, arr2);








