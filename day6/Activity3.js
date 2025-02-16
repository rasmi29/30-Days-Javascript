// Activity 3: Array Methods (Intermediate)

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.

let arr = [1,2,3,4,5];

let doubled = arr.map(value => value*2 );

console.log(doubled);//[2,4,6,8,10]

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.

let evenonly = arr.filter(value => value%2==0);

console.log(evenonly);//[2,4]

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

let product = arr.reduce((acc, num) => acc * num, 1);

console.log(product); // Output: 120