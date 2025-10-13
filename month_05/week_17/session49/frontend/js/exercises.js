const movie = {
    title : 'Inception',
    director : 'Christopher Nolan',
    year : '2010'
}
console.log(movie)

const person = {
   
}
person.name = ['Kirayaa']
person.age = ['23']
person.address = ['Nowhere']
console.log(person)

const computer = {
    brand : 'Windows 11',
    model : 'i5-13400'
}
console.log(computer)

delete movie.year
console.log(movie)

movie.director = 'Quentin Tarantino'
console.movie


console.log(movie.genre)
movie.genre = ['Drama']
console.log(computer['model'])

computer['brand'] = 'HP'


const personInfo = {
    name: "Bob",
    age: 25,
    email: "bob@example.com",
};
function logInfo(info) {
    console.log(personInfo)
}
logInfo(personInfo);


const studentGrades = {
math: 90,
science: 85,
history: 88,
};
function calculateAverage(grades){
    let sum = 0;
    for (let i = 0; i <grades; i++){
        sum += grades[i]
    }
    return sum / grades;
}
const averageGrade = calculateAverage(studentGrades);
console.log("Average Grade: ", averageGrade);