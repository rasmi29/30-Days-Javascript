// Activity 2: Array Methods (Basic)

const arr = [1,2,3,4,5];

// Task 3: Use the push method to add a new number to the end of the array and log the updated array.

arr.push(6);
console.log(arr);//[1,2,3,4,5,6]
console.log(arr.push(7));//7 ( returns the updated length of array)

// Task 4: Use the pop method to remove the last element from the array and log the updated array.

console.log(arr.pop()); //7
console.log(arr); // [1,2,3,4,5,6]

// Task 5: Use the shift method to remove the first element from the array and log the updated array.

console.log(arr.shift()); //1
console.log(arr); // [2,3,4,5,6]

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.

arr.unshift(1);
console.log(arr);//[1,2,3,4,5,6]
