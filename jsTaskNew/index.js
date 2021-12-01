//Task 1
//Implement a function which calculates the sum of all the multiples 
// of 3 or 5 below the number passed in. If the number is negative, 
//return 0.

// function calcSum(prop) {
//   let sum = 0;
//   if (prop <= 0) {
//     console.log(`the number is negative or = 0`)
//   } else { 
//     for (let i = 1; i <= prop; i++){
//       if (i % 3 === 0 || i % 5 === 0) {
//         sum += i;
//       }
//     }
//     console.log(`the number ${prop} sum of all the multiples of 3 or 5 = ${sum}`)
//   }
// }

// calcSum(0);
// calcSum(-5);
// calcSum(3);
// calcSum(5);
// calcSum(9);
// calcSum(21);

//Task 2
//Given n, return the sum of its digits. If the resulting value is 
//more than one digit long, continue reducing it this way until 
//you get a single-digit result. The input will always be a non-negative 
//integer.

function sumDigits(n){
  let sum = 0;
  let i = 1;
  while (i <= n){
//  console.log(`n=`+ n + ` i=` + i + ` --` + sum)
    sum += i;
    i++;
    if (sum >= 10) {
      n--;
      i = 1;
      sum = 0;
    }
  }
  console.log(sum)
}

sumDigits(3)
sumDigits(4)
sumDigits(5)

//Task 2 Another solution

