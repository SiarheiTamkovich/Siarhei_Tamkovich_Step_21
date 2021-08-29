//--jsTask8 Classwork String metods ---

/* --Task palindrom  --*
function isPolindrom(str){
  return str.toLowerCase() === 
  str.toLowerCase().split(``).reverse().join(``) ? `Yes`: `No`;
}
console.log(isPolindrom(`Coc`));

/* --Task № 1 str length --*
function strLength(str1, str2) {
    console.log(str1.length); console.log(str2.length)
    if (str1.trim().length > str2.trim().length){
        return 1;
    } else if (str1.trim().length < str2.trim().length){
        return -1;
    } else {
        return 0;
    }
}
console.log(strLength(`car`, `cowwwww`));

/* --Task № 2 UpperCase 1 bukva --*
function strUp1(str) {
    return str[0].toUpperCase() + str.slice(1);
}
console.log(strUp1(`car`));

/* --Task № 3 glassnye v stroke  --*
let Glassnye = [`а`, `у`, `о`, `ы`, `и`, `э`, `я`, `ю`, `ё`, `е`];
function strCount(str) {
    str = str
    .toLowerCase() // to Lower Case
    .replace(/\s+/g, ``) // Delete spaces
    .replace(/-/g, ``) // Delete -
    .replace(/!/g, ``) // Delete !
    .split(``); // str to arr
    let count = 0;
    for(i = 0; i < str.length; i++) {
        for(ii=0; ii < Glassnye.length; ii++) {
//           str[i] === Glassnye[ii] ? console.log(Glassnye[ii]) : 0;
            str[i] === Glassnye[ii] ? count++ : count;
        }
    }
    return count;
}
console.log(strCount(`Машина едет далеко - далеко!`))

/* --Task № 4 spamFiltr  --*
let spamArr = [
    `100% бесплатно`,
    `увеличение продаж`,
    `увеличении продаж`,
    `только сегодня`, 
    `не удаляйте`,
    `ххх`,
]
function chequeSpam (str) {
    let loverStr = str.toLowerCase();
    for (let i = 0; i <= spamArr.length; i++) {
      console.log(spamArr[i]);
      str.includes(spamArr[i]) === true ? document.write(`Спам `) : 0;
    }
}
console.log(chequeSpam(`не удаляйте сообщение это может помочь в увеличении продаж`));

/* --Task № 5.1 truncate  --*
function truncate(str, length) {
    return str.substring(str, length) + `...`;
}
console.log(truncate(`Обрезание стороки`, 9));

/* --Task № 5.2 truncate  --*
function truncate(str, length) {
    str.split
    return str.substring(str, length) + `...`;
}
console.log(truncate(`Пример показывает обрезание стороки`, 18));

/* --Task № 6 palindrom stroka --*
function isPolindrom(str){
  str = str.toLowerCase().replace(/\s+/g, ``);
  return str === str.split(``).reverse().join(``) ? `Yes`: `No`;
}
console.log(isPolindrom(`Лёша на полке клопа нашёл`));

/* --Task № 7  word count --*
function wordCount(str) {
    str = str.replace(/\,/g,', ');
    return str.split(` `).length;
}
console.log(wordCount(`Я думаю,что я довольно \
хорошо записал это, за исключением того, что я думаю.`))

/* --Task № 8  longest word --*
function longestWord(str){
    str = str.replace(/,/g, ``).split(` `);
    let wordKod = 0;
    let a = 0;
    for (let i = 0; i < str.length; i++) {
         if (a < str[i].length) {
            a = str[i].length;
            wordKod = i;
        }
    }
    return str[wordKod];   
}
console.log(longestWord(`Существуют разновидности, \
когда чтение производится не в обратном направлении, а в прямом`));

/* --Task № 9  longe word --*
function posSimb(str, s){
    let a = 0;
    str = str.split(``);
    for (let i = 0; i < str.length; i++) {
        if (s === str[i]) {
            console.log(i);
            a += 1;
        }
    }
    return a;
}
console.log(posSimb(`разновидности производится \
в обратном направлении`, `о`));

//---------------------------Homework ---------------------------------

/* --Task № 1 string statistic   --*
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
let sign = [`:`, `-`, `,`, `.`];
function strStat(str) {
    let strLen = str.replace(/\s+/g).length; // str length wisout spaces
    let num = 0;
    let sig = 0;
    let letr = 0;
    str = str.split(``)
    for (let i = 0; i < str.length; i++) {
        for (let i1 = 0; i1 < numbers.length; i1++) {
           String(numbers[i1]) === str[i] ? num++ : 0;
        }
    }
    for (let i = 0; i < str.length; i++) {
        for (let i2 = 0; i2 < sign.length; i2++) {
           sign[i2] === str[i] ? sig++ : 0;
        }
    }
return console.log(`В строке: 
    ${strLen} - символов, из них:
    ${strLen - num - sig} - буквы
    ${num} - цифры
    ${sig} - знаки`);
}
strStat(`Например: 35 - тридцать пять, 89 \
 - восемьдесят девять, 12 - двенадцать.`);

/* --Task № 2 summa in words   --*
function summaInWords(num) {
    let s19 = ['ноль','один','два','три','четыре','пять',
              'шесть','семь','восемь','девять',
              'десять','одиннадцать','двенадцать',
              'тринадцать','четырнадцать','пятнадцать',
              'шестнадцать','семнадцать','восемнадцать',
              'девятнадцать'];
    let s20 = ['','','двадцать','тридцать','сорок','пятьдесят',
               'шестьдесят','семьдесят','восемьдесят','девяносто'];
    num <= 19 ? document.write(s19[num]) : 0;
    if (num > 19 && num < 100) {
        num = String(num).split(``);
        document.write(s20[num[0]] + ` ` + s19[num[1]]);
    } else if (num > 99) {
        document.write(`Вы ввели недопустимое значение`);
    }
}
summaInWords(+prompt());

/* --Task № 3 chenCase downCase --*
function chenCase(str) { 
    document.write(str +`<br>`);
    str = str.split(``); 
    for (let i = 0; i < str.length; i++) { 
       str[i] = str[i].replace(/\d/, `_`);
       if (str[i] === str[i].toUpperCase()) { 
	        str[i] = str[i].toLowerCase();
	    } else {
	        str[i] = str[i].toUpperCase();
	    }
    } 
    str = str.join(``);
    document.write(str);
}
chenCase(`AaBBcd001EfgH7H8H25l`);

/* --Task № 4 convert dash to CamelCase --*
function convToCC(str) {
return str[0].toUpperCase() + str.slice(1) // firs letter
    .replace(/-([a-z])/g, (match) => match[1].toUpperCase()) // -l
    .replace(/\s+([a-z])/g, (match) => ` ` + match[1].toUpperCase()); // spaceL
}
document.write(convToCC(
     `font-size background-color text-align`
));

/* --Task № 5 make ABBR --*
function makeAbr(str1, str2) {
  str1 = ` ` + str1;
  str2 = ` ` + str2;
  str1 = str1.replace(/-/g, ` `)
             .match(/\s+([a-z])/g)
             .join(` `)
             .toUpperCase()
             .replace(/\s+/g, ``);
  str2 = str2.replace(/-/g, ` `)
             .match(/\s+([а-я])/g)
             .join(` `)
             .toUpperCase()
             .replace(/\s+/g, ``);
  return `${str1} <br> ${str2}`;
}
document.write(makeAbr(
    `cascading style sheets`, 
    `объектно-ориентировочное программирование`
))

/* --Task № 6 make ABBR --*/

