// Day 3: Control Structures


// Activity 1: If-Else Statements

// Task 1: White a program to check if the number is positive, negative, or zero, and log the result to the console

let num1 = 25;
let num2 = -23;
let num3 = 0;

function check(num){
    if(num>0){
        console.log(`Positive`);
    }else if(num<0){
        console.log(`Negative`);
    }else{
        console.log(`zero`);
    }
};
check(num1);
check(num2);
check(num3);

//  Task 2: Write a program  to check if a person is eligible to vote age>= 18

let Person1_age = 18;
let Person2_age = 34;
let Person3_age = 15;

function checkEligibility(age){
    if(age>=18){
        console.log(`person of ${age} eligible to vote`);
    }else{
        console.log(`person of ${age} is not eligible to vote`);
    }
}

checkEligibility(Person1_age);
checkEligibility(Person2_age);
checkEligibility(Person3_age);


