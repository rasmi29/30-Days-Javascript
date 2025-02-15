// Activity 3: Arrow Functions

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

const sum = (a, b) => a + b;

console.log(sum(5, 3)); //8
console.log(sum(-2, 7)); //5
console.log(sum(0, 0)); //0

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

// without includes method

const check = (str, char) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return true;
    }
  }
  return false;
};

// with include method 

const check2 = (str, char) => str.includes(char);


console.log(check("hello", "e")); // true
console.log(check2("world", "a")); // false
