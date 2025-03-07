// Activity 5: Object Iteration

// Task 8: Use a for...in loop to iterate ever the properties of the book object and log each property and its value. 

const book= {
    name:"rasmi",
    poet:"ranjan",
    year:2025
}

for(key in book){
    console.log(`${key}:${book[key]}`);
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object. 

console.log(Object.keys(book));// returns a array  of keys
console.log(Object.values(book));// returns a array of values
