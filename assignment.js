// Write a JavaScript program which iterates the integers from 1 to 100. But for
//multiples of three print "Fizz" instead of the number and for the multiples of five print
//"Buzz". For numbers which are multiples of both three and five print "FizzBuzz"
function multiples(){
    for(let i = 1; i <= 100; i++){
        if( i % 3 == 0  && i % 5 == 0){
            console.log("FizzBuzz");
        }
        else if(i % 3 == 0){
            console.log("Fizz");
        }
        else if( i % 5 == 0){
            console.log("Buzz");
        }
        
        else{
            console.log(i);
        }
    }
} 
multiples();

// Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
function sum(){
    addition = 0
    for(let i = 0; i < 1000; i++){
        if( i % 3 == 0 && i % 5 == 0){
            addition += i
        }  
    }
    console.log(addition);
}
sum();
// Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
//check if the current number is odd or even, and display a message to the screen
function odd_even(){
    for(let x = 0; x <= 20; x++){
        if( x % 2 == 0){
            console.log(x,`is even`);
        }
        else{
            console.log(x, `is odd`);
        }
    }
}
odd_even();

// Write a JavaScript conditional statement to find the largest of five numbers in the
// given array.
function largest_number(){
    var num = [-2, 4,-5, 6,0]
    var largest = num[0]
    for(let y = 0; y < num.length; y++){
        if (largest < num[y]){
            largest = num[y]
        }
    }
    console.log(largest);
}
largest_number();

//Using conditional statements, write a JavaScript program to find the largest of the
//following two numbers: 10 & 40
function largest(){
    let a = 10
    let b = 40
    if(a > b){
        console.log(a + `is the larger`);
    }
    else{
        console.log(b + `is the larger`);
    }
}
largest()

//Write a JavaScript program to find leap years from 2000 to 2022
function leap(){
    for(let year = 2000; year <= 2022; year++){
        if(year % 4 == 0){
            console.log(year,`is a leap year` );
        }
    }
}
leap()