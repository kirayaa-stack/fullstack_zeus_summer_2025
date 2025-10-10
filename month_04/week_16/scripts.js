/// Function

/**
 * Python -
 * def function_name():
 *   pass
 */

function functionName() {
    console.log('Hello world');
}
//function call = function duudah
functionName();

// function with parameter
/**
 * Python
 * parameter - a,b
 * def add_two_numbers (a,b):
 *     result = a+ b
 *     print(result)
 * Argument - 4, 5
 * add_two_numbers(4,5)
 * 9
 */
//CamelCase
function addTwoNumbers(a, b){
    let result = a + b;
    console.log(result);
}
 addTwoNumbers(4,5);

 // function return type 

 // Problem
 function multipyTwoNumber (a,b){
    let result = a * b;
 }
 console.log(multipyTwoNumber(4,5));

 // solution - return keyword

 function subtractTwoNumbers(a,b) {
    let result = a - b;
    return result;
 }
 console.log(subtractTwoNumbers(4,5)); // -1