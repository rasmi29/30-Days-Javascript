// Activity 5: Multi-dimensional Arrays

// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
//display in array format
console.log(arr);
// display in matrix format
for (let i = 0; i < arr.length; i++) {
  let row = "";
  for (let j = 0; j < arr[i].length; j++) {
      row += arr[i][j] + " ";
  }
  console.log(row.trim());
}

// Task 13: Access and log a specific element from the two-dimensional array.

//let we have to know the 2 nd elemnt of 2nd row

console.log(`2nd element from 2nd row of the array is ${arr[1][1]}`);

