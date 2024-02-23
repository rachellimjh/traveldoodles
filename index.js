//var -> function
//let -> block 
//const -> block (only accessible inside block)

let name = "Suki";
let age = 20;
let isApproved = true; // boolean literal
let firstName = undefined;
let lastName = null;

//object
let person = {
    name: "Suki",
    age: 20
} // object literal

console.log(person)

//object destructuring
const address = {
    street:'', 
    city : '',
    country: ''
};

const {street, city, country} = address;
// lets say if only interested in the stree property
const {street: st} = address;

//dot notation
person.name = 'John';
console.log(person.name)

//Bracket notation
let selection = 'name'; //when we dk what the attribute is called, based on user input
person['name'] = 'Mary';

//Arrays
let selectedColours = ['red', 'blue']; //array literal
selectedColours[2] = 1 //add elements, length of array is dynamic, can store different types too
console.log(selectedColours[0])

const jobs = [
    {id: 1, isActive: true},
    {id: 2, isActive: false},
    {id: 3, isActive: true}
];

const activeJobs = jobs.filter(function(job) {return job.isActive})
const activeJobs2 = jobs.filter(job =>  job.isActive); // this code does the same but is simpler

//array.map, useful in react when rendering lists
const colors = ['red', 'green', 'blue'];
const items = colors.map(color =>`<li>${color}</li>`);
console.log(items);

//functions
//performs task
function greet(name) {
    //body of function
    console.log("Hello "+ name);
}


greet('john'); //argument is actual element supplied to the parameter

//types of functions
//calculations
function square(number){
    return number*number;
}
console.log(square(2))

const person2 = {
    talk() {
        var self = this;
        setTimeout(function() {
            console.log("self",self);
        }, 1000);
    }
};

person2.talk();

//spread operator 
const first = [1,2,3];
const second = [4,5,6];

// const combined = first.concat(second); // one way to combine
// const combined2 = [... first, 'added element', ... second, 'b'] // the spread way to combine, good to add random elements in
const clone = [... first];
console.log(first);
console.log(clone);

//another example
const first2 = {name: 'Suki'};
const second2 = {job: 'student'};

const clone2 = {... first2} // to clone object
const combine = {...first2, ...second2, location: "SG"}
console.log(combine);

//classes

//Modules
//split code across multiple files
import Teacher, { promote } from "./teacher";
const teacher = new Teacher("Suki", "Msc");
teacher.teach();

// Exports
// Default -> import... from '';
// Named -> import { ... } from '';
