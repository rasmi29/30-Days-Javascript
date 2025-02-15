
// Activity 4: Function Parameters and Default Values

// Task 7: Write a function that takes two parameters and retums their product. Provide a default value for the second parameter. 

const product = (a, b=8) =>{
    return a*b;
}
// if you dont define the second parameter then it automatically takes the default value
console.log(product(8));
console.log(product(8,5));

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

const greet = (fullname,age=18) =>{
    console.log(`hi ${fullname} of age ${age} good morning`);
}

greet("rasmi");
greet("ranjan",24);
