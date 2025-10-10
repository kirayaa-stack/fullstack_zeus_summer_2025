console.log('Remove code duplication')

// rectangle 1

let length1 = 10;
let width1 = 5;
let area1 = length1 * width1;
let perimeter1 = 2 * (length1 + width1);

console.log('=====Rectangle 1 Result=====');
console.log(`Area: ${area1}`);
console.log(`Perimeter: ${perimeter1}`);
console.log("");



//rectangle 2
let length2 = 20;
let width2= 8;
let area2 = length2 * width2;
let perimeter2 = 2 * (length2 + width2);

console.log('=====Rectangle 2 Result=====');
console.log(`Area: ${area2}`);
console.log(`Perimeter: ${perimeter2}`);
console.log("");

function calculateAndPrintRectangle(length , width){
    let area = length * width;
    let peremeter = 2 * (lenght + width);
    console.log('=====Rectangle 1 Result=====');
    console.log(`Area: ${area}`);
    console.log(`Perimeter: ${perimeter}`);
    console.log("");
}

calculateAndPrintRectangle(10, 5);
calculateAndPrintRectangle(20,8);