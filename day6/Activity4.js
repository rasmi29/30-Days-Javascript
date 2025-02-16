// Activity 4: Array Iteration

// Task 10: Use a for loop to iterate over the array and log each element to the console.

let arr = [10, 20, 30, 40, 50];

for (let i = 0; i < arr.length; i++) {
  console.log(`element no ${i + 1} is : ${arr[i]}`);
}

// Task 11: Use the forEach method to iterate over the array and log each element to the console.

arr.forEach((element, index) => {
  console.log(`element of index ${index + 1} is : ${element}`);
});
