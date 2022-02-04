//Task 1
//Кошелёк
// На вход подаётся строка с купюрами и арифметическими знаками. Строка представлена в 
// виде: число купюра + число купюра, содержащую номинал купюры(целое число) и ее тип 
// (“бун” или “коп”, 1бун=100коп) с разделительными пробелами. Найти сумму всех купюр и
// вывести ее строкой в формате x бун и y коп, например “100бун 10коп”.

// ВНИМАНИЕ: Функция решения должна быть присвоена строго глобальной переменной solution, 
// в противном случае решение не сможет быть проверено!

//Пример входных данных для 1 задания '5бун 35коп + 4бун 65коп' => '10бун 0коп'

// solution = function (pocketStr) { 
//   return ((eval(pocketStr.replace(/ |бун|коп/g, '')))/100).toFixed(2).replace(/\./, 'бун ') + 'коп';
// }

// solution = function (pocketStr) { 
//   let str = pocketStr.replace(/ /g, '');
//  // let arrSigns = result.replace(/[a-zа-яё0-9]/g, '').split('');
//   let arrNum =  str.replace(/[a-zа-яё]/g, '').split('+');
//   let sumArr = arrNum.reduce((a,b) => Number(a) + Number(b), 0);
//   sumArr = (sumArr/100).toFixed(2).replace(/\./, 'бун ') + 'коп';
//   return sumArr;
// }

// console.log(solution('5бун 35коп + 4бун 65коп'))
// console.log(solution('5бун 35коп + 4бун 64коп'))
// console.log(solution('5бун 35коп + 3бун 65коп'))
// console.log(solution('15бун 25коп + 30бун 65коп'))
// console.log(solution('15бун 25коп + 30бун 63коп'))
// console.log(solution('5бун 31коп + 4бун 65коп'))
// console.log(solution('5бун 29коп + 4бун 65коп'))
// console.log(solution('5бу 25кп + 4ун 65ко'))

// console.log(solution('5бун 29коп - 4бун 65коп'))
// console.log(solution('5бун 35коп + 4бун 65коп + 14бун 25коп'))
// //console.log(solution('5бун 35коп + 4бун 65коп - 3бун 25коп'))
// console.log(solution('5бун 35коп'))
// console.log(solution('0бун 0коп'))
// console.log(solution('0бун 0коп + 0бун 0коп'))

//Task 2
//Зодиак
// Написать функцию которая определяет знак зодиака по данным астрономии, соответствующей 
// заданной дате. Функция должна принимать строку в формате ‘{дата}/{месяц}’. Пример входных 
// данных: ‘23/03’. Ожидаемый результат: 'Овен'. Таблица зодиаков: Овен 21 марта — 20 апреля
// ,,,,,,Телец 21 апреля — 21 мая,,,,,,, Близнецы 22 мая — 21 июня,,,,,, Рак 22 июня — 22 
// июля,,,,,, Лев 23 июля — 21 августа,,,,, Дева 22 августа — 23 сентября,,,,,, Весы 24 сентября 
// — 23 октября,,,,, Скорпион 24 октября — 22 ноября,,,,,, Стрелец 23 ноября — 22 декабря,,,,,, 
// Козерог 23 декабря — 20 января,,,,,, Водолей 21 января — 19 февраля,,,,,, Рыбы 20 февраля — 
// 20 марта

// ВНИМАНИЕ: Функция решения должна быть присвоена строго глобальной переменной solution, в 
// противном случае решение не сможет быть проверено!

solution = function (dateStr) {
  let result = '';
  let birth = {dateZ: Number(dateStr.slice(3, 5) + dateStr.slice(0, 2))}
  tablZod.forEach(element => {
    birth.dateZ >= element.zs && birth.dateZ <= element.ze ?
      result = element.name : null;
  })
  return result;
};

const tablZod = [
  {name:'Козерог', zs:  11,  ze:  120},
  {name:'Водолей', zs:  121, ze:  219},                                                              
  {name:'Рыбы',    zs:  220, ze:  320},
  {name:'Овен',    zs:  321, ze:  420},
  {name:'Телец',   zs:  421, ze:  521},
  {name:'Близнецы',zs:  522, ze:  621},
  {name:'Рак',     zs:  622, ze:  722},
  {name:'Лев',     zs:  723, ze:  821},
  {name:'Дева',    zs:  822, ze:  923},
  {name:'Весы',    zs:  924, ze: 1023},
  {name:'Скорпион',zs: 1024, ze: 1122},
  {name:'Стрелец', zs: 1123, ze: 1222},
  {name:'Козерог', zs: 1223, ze: 1231}
];

console.log(solution('23/03'))
console.log(solution('07/02'))
console.log(solution('24/12'))
console.log(solution('19/01'))
console.log(solution('27/12'))
console.log(solution('30/12'))
console.log(solution('06/06'))



//Task 3 
//Минимальные значения
// На вход функции подается массив строк. Каждая строка состоит из чисел, разделенных пробелом. 
// Найти сумму минимальных чисел всех строк. Пример входных 
// данных: [ “1 2 22 55 63”, “2 5 0”, “3 0 0”, “99 99 99 999 99999 999 999 99”, “0 0 0 0 0”, ].
// Ожидаемый результат: 100.

// ВНИМАНИЕ: Функция решения должна быть присвоена строго глобальной переменной solution, в 
// противном случае решение не сможет быть проверено!

// solution = function (strArr) {
//   let result = 0;
//   strArr.forEach(element => {
//     element = element.split(' ').sort((a,b) => a-b);
//     result += Number(element[0]);
//   });
//   return result;
// };

// const arrNum = ['1 2 22 55 63', '2 5 0', '3 0 0', '99 99 99 999 99999 999 999 99', '0 0 0 0 0'];
// console.log(solution(arrNum))

// Task 4
// Диагональные суммы
// Сложить все числа, которые ниже главной диагонали матрицы. На вход функции подается двухмерный 
// массив (массив строк матрицы), содержащий числа. Необходимо найти сумму чисел находящихся ниже 
// главной диагонали.

// ВНИМАНИЕ: Функция решения должна быть присвоена строго глобальной переменной solution, в противном
// случае решение не сможет быть проверено!

// solution = function (matrix) {
//   let result = 0;
//   for (i = 0; i < matrix.length; i++){
//     for(j = 0; j < matrix[i].length; j++){
//       if (i > j) result +=matrix[i][j];
//     }
//   }
//   return result;
// };

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// let matrix2 = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12],
//   [13,14,15,16]
// ];

// console.log(solution(matrix2))

// Task 5 
// Sum Strings as Numbers
// Input: 2 параметра, являющихся строковым представлением целых натуральных чисел. Output: строка, 
// являющаяся арифметической суммой входных параметров. !!! BigInt использовать нельзя. Строковое 
// представление целого числа не будет содержать никаких символов, кроме десяти цифр от «0» до «9».

// ВНИМАНИЕ: Функция решения должна быть присвоена строго глобальной переменной solution, в противном 
// случае решение не сможет быть проверено!

// туда нада самому 2 параметра вписать

// solution = function (strCharA, strCharB) {
//   //return String(Number(Number(strCharA).toFixed()) + Number(Number(strCharB).toFixed()))
  
//    // if(Number(strCharA) - parseInt(strCharA, 10)) strCharA = 0;
//   // if(Number(strCharB) - parseInt(strCharB, 10)) strCharB = 0;
//   if (strCharA.slice(0, 2) === '0x') strCharA = parseInt(strCharA, 16).toString();
//   if (strCharB.slice(0, 2) === '0x') strCharB = parseInt(strCharB, 16).toString();
//   if (strCharA.slice(0, 2) === '0o') strCharA = Number(strCharA).toString();
//   if (strCharB.slice(0, 2) === '0o') strCharB = Number(strCharB).toString();
//   //return (Number(strCharA) + Number(strCharB)).toString();
//   return (parseInt(strCharA, 10) + parseInt(strCharB, 10)).toString()
// };

// console.log(solution('99', '1'))
// console.log(solution('99.12', '1'))
// console.log(solution('99', '-1'))
// console.log(solution('99', '0'))
// console.log(solution('9aa', '3cc'))
// console.log(solution('0xff', '0'))
// console.log(solution('0xff', '0xff'))
// console.log(solution('0o70', '0'))
// console.log(solution('0o70', '0o70'))


// Task 6
// Сумма из одного числа
// Создайте функцию, которая принимает целое число в качестве аргумента. Сложите все числа от 1 до числа, 
// которое вы передали функции. Например, если на входе 4, ваша функция должна вернуть 10, потому 
// что 1 + 2 + 3 + 4 = 10.

// ВНИМАНИЕ: Функция решения должна быть присвоена строго глобальной переменной solution, в противном 
// случае решение не сможет быть проверено!

// solution = function (x) {
//   let result = 0;
//   for (let i = 0; i <= x; i++){
//     result += i;
//   }
//   return result;
// };

// console.log(solution(4));
// console.log(solution(5));
// console.log(solution(0));
// console.log(solution(-1));


// Task 7
// Проверка на целое число
// Создайте функцию, которая принимает массив в качестве аргумента и возвращает true или false в зависимости 
// от того, является ли среднее всех элементов в массиве целым числом или нет. Предусмотреть валидацию на 
// некорректные данные, в расчете принимаем только элементы типа number.

// ВНИМАНИЕ: Функция решения должна быть присвоена строго глобальной переменной solution, в противном случае
//  решение не сможет быть проверено!

// [1, 2, 3] => true // average = 2
// [1, 5, 7] => false // average = 4.333
// [1, 5.4, 5] => true // 5.4 не является целым, его не принимаем в расчет, average = 3
// примерно так

// solution = function (arr) {
//   let summArr = 0;
//   let arrLength = arr.length
//   arr.forEach(element => {
//     typeof(element) === 'number' && Number.isInteger(element) ? summArr +=element : arrLength--;
//   });
// //  console.log(summArr / arrLength)
//   return Number.isInteger(summArr / arrLength);
// };

// console.log(solution([1,2,3]))
// console.log(solution([1,5,7])) 
// console.log(solution([1,5.4,5]))
// console.log(solution([1,2,3.05]))
// console.log(solution([1,2,'none']))
// console.log(solution([1,2,3,'none']))
