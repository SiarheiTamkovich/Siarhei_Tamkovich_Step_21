//--jsTask8 Classwork String metods ---

/* --Task № polindrom  --*
function isPolindrom(str){
    return str.isPolindrom

}
isPolindrom(`Coc`)

/* --Task № 1  --*
function strLength(str1, str2) {
    return str1.trim().strLength === str2.trim().strLength;
}
console.log(strLength(`car`, `cssov`));

/* --Task № 2  --*
function strLength(str) {
    return str[0].toUpperCase() + str.slice
}

/* --Task № 3 vowels  --*
let Glassnye = [`а`, `у`, `о`, `ы`, `и`, `э`, `я`, `ю`, `ё`, `е`];
function strCount(str) {

}

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

/* --Task № 5.1 truncate  --*
function truncate(str, length) {
    str.split

    return str.substring(str, length) + `...`;
}
console.log(truncate(`Пример показывает обрезание стороки`, 2));

/* --Task № 7  word count --*/
function wordCount(str) {
    str = str.replace(/\,/g,', ');
    return str.split(` `).length;
}
console.log(wordCount(`Я думаю,что я довольно \
хорошо записал это, за исключением того, что я думаю.`))





