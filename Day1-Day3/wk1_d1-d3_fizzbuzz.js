// Start a new branch, and switch to that branch. Make all your changes on that branch, and then do a pull request to merge the branch to your main branch. Don't know how to do that? Let me know, I will tell you how. 

//What is FizzBuzz?
//FizzBuzz Original Instructions: Print out the numbers between 1 and 100.  If the number is divisible by 3, print “Fizz” instead. If the number is divisible by 5, print “Buzz” instead. If it is divisible by both 3 and 5, print “FizzBuzz”. 

// What I want you to do:

// 1. Create a function fizzBuzz, that has no parameters, and accomplishes the instructions.

// *******************

// old way of writing functions: 
    // function fizzBuzz(){
    //     code here...
    // }
// ********************

// Please use ES6 conventions to write functions 👇👇👇

const fizzBuzz = () => { //  <------- ES6 Arrow functions
    for (var num = 1; num <= 100; num++) {

        if (num % 5 === 0 && num % 3 === 0) {
            console.log('FizzBuzz');
        continue;
        }   
        if (num % 3 ===0) {
            console.log('Fizz');
            continue;
        }
        else if (num % 5 ===0) {
            console.log('Buzz');
            continue;
        }
        console.log(num);
    }
}

fizzBuzz();

// 2. Create a function fizzBuzzTwo, that takes in two numbers, and does the FizzBuzz to those values. For example, 8 and 9, instead of 3 and 5. 

const fizzBuzzTwo = (F,B) => {
    for (var num = 1; num <= 100; num++) {
        if (num % F === 0 && num % B === 0) {
            console.log('FizzBuzz');
        continue;
        }   
        else if (num % F ===0) {
            console.log('Fizz');
            continue;
        }
        else if (num % B ===0) {
            console.log('Buzz');
            continue;
        }
        console.log(num);

    }
    //Your code here...
}

fizzBuzzTwo(8,9);

// 3. Create a function fizzBuzzSum, which has two parameters, and returns the sum of the numbers that are not “Fizz”, “Buzz” and “FizzBuzz”.

const fizzBuzzSum = (F, B) => {
    //the only thing I would add would be to make a global sum variable, and then return it at the end:
    let suma;
    for (var num = 1; num <=20; num++){
        suma = num;
        if (num % F === 0 && num % B ===0){
            continue;
        }
        else if ( num % F === 0){
            continue;
        }
        else if (num % B ===0){
            continue;
        } 
        suma= suma +num;   
    }
    //and return it down here:
    return suma
}

fizzBuzzSum(3,5);
