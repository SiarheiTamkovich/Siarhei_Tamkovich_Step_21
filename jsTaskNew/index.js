//Task 1
//Implement a function which calculates the sum of all the multiples 
// of 3 or 5 below the number passed in. If the number is negative, 
//return 0.

function calcSum(prop) {
  let sum = 0;
  if (prop <= 0) {
    console.log(`the number is negative or = ${sum}`)
  } else { 
    for (let i = 1; i <= prop; i++){
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    console.log(`the number ${prop} sum of all the multiples of 3 or 5 = ${sum}`)
  }
}

calcSum(0);
calcSum(-5);
calcSum(3);
calcSum(5);
calcSum(9);
calcSum(21);

//Task 2
//Implement a function which calculates the sum of all the multiples 
// of 3 or 5 below the number passed in. If the number is negative, 
//return 0.