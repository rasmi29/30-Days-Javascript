// Activity 3: Switch Case

// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let num =2 ;

switch(num){
    case 1 : 
        console.log(`Monday`);
        break;
    case 2 : 
        console.log(`Tuesday`);
        break;
    case 3 : 
        console.log(`Wednesday`);
        break;
    case 4 : 
        console.log(`Thursday`);
        break;
    case 5 : 
        console.log(`Friday`);
        break;
    case 6 : 
        console.log(`Saturday`);
        break;
    case 7 : 
        console.log(`Sunday`);
        break;
    default  : 
        console.log(`Invalid  number`);
        break; 
        
}

// Task 5: Write a program that uses a switch case to assign a grade (A, B, C, D, F) based on a score and log the grade to the console. 


let score = 75;

switch (true) {
    case (score >= 90):
        console.log("A");
        break;
    case (score >= 80):
        console.log("B");
        break;
    case (score >= 70):
        console.log("C");
        break;
    case (score >= 60):
        console.log("D");
        break;
    case (score < 60 && score>=0):
        console.log("F");
        break;
    default:
        console.log("Invalid Score.");
}






