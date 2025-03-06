// Activity 4: The this Keyword

// • Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.


const library = {
    name: "City Central Library",
    location: "Delhi ,India",
    books: [
        {
            title: "The Great India",
            author: "Rasmiranjan Sahoo",
            year: 2025
        },
        {
            title: "1994",
            author: "Ramesh Sahoo",
            year: 2020
        },
        {
            title: "To Kill a worker",
            author: "himanshu ketaki",
            year: 2015
        }
    ]
};

library.books.forEach((book)=>{
    book.show = function(){
        console.log(`title : ${this.title} , year :  ${this.year}`);
    }
})

library.books[0].show()