// Activity 5: Higher-Order Functions

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times

const functionRunner = (callback,count)=>{
        for(let i =1;i<=count;i++ ){
            callback();
        }
}

const greet = () => console.log(`Good morning`);

functionRunner(greet,5);

// Task 10: White a . higher-order function that takes two functions and a value, applies the first 
// function to the value, and then applies the second function to the result

const test = (callback1, callback2, value) => {
    let a = callback1(value);
    callback2(a);
}

function checkAge(num){
    if(num >= 18){
        return true;
    }else{
        return false;
    }
}

function showEligibility(result){
    if(result){
        console.log(`you are eligible to vote`);        
    }else{
        console.log(`not eligible for voting`);
        
    }
}

test(checkAge,showEligibility,17);