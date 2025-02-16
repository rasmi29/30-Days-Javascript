// Activity 2: Object Methods

// Task 3: Add a method to the book object that returns a string with the book's title and author, and log 

const book = {
    title : "The Great Man",
    author : "Elon Mosk",
    year: 2025,
    bookDetails : function (){
        console.log(`This book "${this.title}" is written by "${this.author}".`); 
    }
}
book.bookDetails();

//important note 
//✅ Use arrow functions inside methods if you want them to inherit this from a regular function.
//❌ Don't use arrow functions as methods directly, as they won’t get this from the object.

// Task 4: Add a method to the book object that takes sa parameter (year) and updates the result of calling this method. s the book's year property, then log the updated object.

// book.updateYear = function(num){
//     this.year = num;
//     console.log(this);
// }

//output

// title: 'The Great Man',
// author: 'Elon Mosk',
// year: 2027,
// bookDetails: [Function: bookDetails],
// updateYear: [Function (anonymous)]


// in this way it is added as a anonymous function if you want to add a named functyion then first declare the function then add it

function updateYear (num){
    this.year = num;
    console.log(this);
}

book.updateYear = updateYear;

//output
// title: 'The Great Man',
// author: 'Elon Mosk',
// year: 2027,
// bookDetails: [Function: bookDetails],
// updateYear: [Function: updateYear]

book.updateYear(2027);