console.log('JS Objects');
// Problem
//Hun gegd zuilig js deer ilerhiileh.
(function(){
let firstName = 'Ochirbat';
let lastName = 'Urantugs';
let age = 23;
let weight = 47;
})();

(function(){
let firstName = 'Khangaikhuu';
let lastName = 'Uvgunkhuu';
let age = 43;
let weight = 80.5;
})();

//solution - objects
let Ochirbat = {
    firstName: 'Ochirbat',
    lastName: 'Urantugs',
    age: 23,
    weight: 47
}
console.log(Ochirbat);

let Khangaikhuu = {
    firstName: 'Khangaikhuu',
    lastName: 'Uvgunkhuu',
    age: 43,
    weight: 80.5
}
console.log(Khangaikhuu);

// Array [] - Datastructure
// Object - Amid zuilsig 


const bugatti = {
    horsePower: 1100, 
    brand: 'Bugatti',
    model: 'Bugatti Veyron 16.4',
    producedYear: 2024
};
console.log(bugatti);

const porsche = {
    horsePower: 1200,
    brand: 'Porsche',
    model: '911 carreira',
    producedYear : 2023
};
console.log(porsche)

const audi = {
    horsePower: 1100, 
    brand: 'Audi',
    model: 'Audi Q 23',
    producedYear: 2024
};
console.log(audi);

// Object Properties -> horsePower, brand, model, producedYear

// Object Values -> 1001, Audi Q 23, 2016

// Object access properties
console.log(audi.horsePower);
console.log(audi.model);
console.log(audi.producedYear);
console.log(audi.brand);


// \Object access properties = BRACKET notation
console.log(porsche['horsePower'])
console.log(porsche['model'])
console.log(porsche['producedYear'])
console.log(porsche['brand'])


// DOT notation vs BRACKER notation
const dotaTwoTroll = {
    'ultimate-ability': 'Berserker',
    'health-generation': '2hp per second',
    'stun': '1 second per 5 punch'
}
console.log(dotaTwoTroll['ultimate-ability']);



//Change value of the property using dot rotation
audi.producedYear = 2018;
console.log(audi);

//Change value of the property using bracket notation
dotaTwoTroll['stun'] = '2seconds per 5 punch';
console.log(dotaTwoTroll)

//add new property
console.log(Ochirbat);
Ochirbat.skill = ['Python', 'Js', 'html','database', 'css']
console.log(Ochirbat);
