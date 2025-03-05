// Activity 3: Nested Objects

// Task 5: Create a nested object representing a library with properties like books(an array of book objects) and name, and log the obj

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



// Task 6   Access and log the name of the library and the titles of all the  books  in the library 

library.books.forEach((book)=>{
    console.log(`Author ${book.author} written the book "${book.title}" .`);
    
})