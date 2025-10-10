console.log('Coffeee Shop');

// DRY - don't repeat yourself

console.log('---------------');
console.log('Hello, Dorj');
console.log('See you soon.');
console.log('---------------')

console.log('---------------');
console.log('Hello, Sarah');
console.log('See you soon.');
console.log('---------------')
 


console.log('----------');
console.log('Hello, Tuga');
console.log('See you soon.');
console.log('---------------')

//Solution
function greetings(userName){
console.log('----------');
console.log('Hello, ${userName}');
console.log('See you soon.');
console.log('---------------')
}
greetings('Kira');
greetings('Shura');
greetings('Choira');

// f(x,y) = x*x
function quadratEquation (x,y){
    return x*x + 2*x*y + y*y;
}
// f(4,5) = 81

let result = quadratEquation(4,5)
console.log(result);