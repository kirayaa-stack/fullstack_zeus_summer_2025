let myName: string = "Kira";
let myAge: number = 23;
let isStudent: boolean = false;
console.log(myName);
console.log(myAge);
console.log(isStudent);

let count: number = 10;
console.log(count);

function add(a: number, b: number): number {
    return (a + b);
}
console.log(add(3, 9));
function logMessage(python: string): void {
    console.log(python);
}

let hobbies : Array<string> = ["reading" , "gaming" , "hiking" ]
console.log(hobbies)
// hobbies.push(100)


interface Person {
    name : string;
    age : number;
    email: string;
}

let person: Person = {name: "kira", age: 18, email: "kira@gmail.com"}
console.log(person);


function greetUser(person:Person){
    return `Сайн уу, ${person.name}! Та ${person.age} настай.`
}
console.log(greetUser(person))

let id : number | string;
id = 123;
id = "abc";
console.log(id)

type UserID = number | string;
document.querySelector('h1')
