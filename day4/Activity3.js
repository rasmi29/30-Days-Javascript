// Activity 3: Do...While Loop

// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
let num = 1;
do {
  console.log(num);
  num++;
} while (num <= 5);

// Task 6: Write a program to calculate the factorial of a number using a do...while loop.

let result = 1;
let i = 1;
let n = 5;

do {
  result *= i;
  i++;
} while (i <= n);
console.log(`factorial of number ${n} is ${result}.`);


