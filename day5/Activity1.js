// Day 5: Functions

// Activity 1: Function Declaration

// Task 1: Write a function to check if a number is even or odd and log the result to the console.

function checkNumber (num){
    if(num % 2 === 0){
        console.log(`even number`);
    }else{
        console.log(`odd number`);
    }
}

checkNumber(3);//odd number
checkNumber(4);// even number
checkNumber(5);//odd number


// Task 2: Write a function to calculate the square of a number and return the result.

function calculateSquare(num){
    return num*num;
}

console.log(calculateSquare(5));//25

