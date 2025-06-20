//Important Note: Do not change the variable names. 
//All required classes, variables and function names are listed in the exports.

// Exponent Operator
/*3.*/
function getCube(num){
    return num**3;
}

// Template Literals
const cubedNumber = `The cube of 2 is ${getCube(2)}`;
console.log(cubedNumber);


/*4. Array Destructuring*/
const address = ["258", "Washington Ave NW", "California", "90011"];
const [houseNumber, street, state, zipCode] = address;

/*5.*/
console.log(`I live at ${houseNumber} ${street}, ${state} ${zipCode}`);

// Object Destructuring
const animal = {
    name: "Lolong",
    species: "saltwater crocodile",
    weight: "1075 kgs",
    measurement: "20 ft 3 in"
}

const {name, species, weight, measurement} = animal;
console.log(`${name} was a ${species}. He weighed at ${weight} with a measurement of ${measurement}`);


// Arrow Functions
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num));
let reduceNumber = numbers.reduce((a,b) => a + b);
console.log(reduceNumber);

// Javascript Classes
class Author {
    constructor(name, address, age, isActive) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.isActive = isActive;
    }
}

let author1 = new Author(`Douglas Crockford`, `Seattle, Washington`, 43, true);
let author2 = new Author(`Marijin Haverbeke`, `Eagan, Minnesota`, 38, true);
let author3 = new Author(`Kyle Simpson`, `Springfield, Msssachusetts`, 51, true);

let authors = [author1, author2, author3];

console.log(authors[0]);
console.log(authors[1]);
console.log(authors[2]);

class Book {
    constructor(title, author, year, status) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.status = status || `Available`;
    }

}

let book1 = new Book(`JavaScript: The Good Parts`, author1, 2011, `Checked Out`);
let book2 = new Book(`Eloquent JavaScript`, author2, 2008,);
let book3 = new Book(`You Don't Know JS`, author3, 2015, `Checked Out`)

let books = [book1, book2, book3];
console.log(books[0]);
console.log(books[1]);
console.log(books[2]);


function valueArrayToObject(pairs) {
    return Object.fromEntries(pairs);
}

console.log(valueArrayToObject([['name', 'Jamie'], ['age', 25]]));
//Debugging


class Employee {
    constructor(firstName,lastName,age,department,email,password){

        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.department = department;
        this.password = password;

 
        this.login = (email,password) => {

            if(email !== this.email ){
                return "Incorrect Email";
            } else if (password !== this.password) {
                return "Incorrect Password";
            }  else {
                return "Successful Login!"
            }
     };
  }

}


class Project {
    constructor(name,description,budget,department,dateStarted,endDate){

        this.name = name;
        this.description = description;
        this.budget = budget;
        this.department = department;
        this.dateStarted = dateStarted;
        this.endDate = endDate;
    }
}

let employee1 = new Employee("Aiah","Arceta",23,"Marketing","aiahkins@gmail.com","cherryOnTop");
let project1 = new Project("Project AI","A small AI project",2500000,"Development Team","08-14-2014","08-09-2024");

console.log(employee1);
console.log(project1);
console.log(employee1.login(`mikha@gmail.com`, `cherryOnTop`));
console.log(employee1.login(`aiahkins@gmail.com`, `pantropiko`));
console.log(employee1.login(`aiahkins@gmail.com`, `cherryOnTop`));
//Test employee1 methods in Browser Console.
//Test project1 in Browser Console.



//Do not modify
//For exporting to test.js
//Note: Do not change any variable and function names. All variables and functions to be checked are listed in the exports.
try{
    module.exports = {

        getCube: typeof getCube !== 'undefined' ? getCube : null,
        address: typeof address !== 'undefined' ? address : null,
        houseNumber: typeof houseNumber !== 'undefined' ? houseNumber : null,
        street: typeof street !== 'undefined' ? street : null,
        state: typeof state !== 'undefined' ? state : null,
        zipCode: typeof zipCode !== 'undefined' ? zipCode : null,
        animal: typeof animal !== 'undefined' ? animal : null,
        name: typeof name !== 'undefined' ? name : null,
        species: typeof species !== 'undefined' ? species : null,
        weight: typeof weight !== 'undefined' ? weight : null,
        measurement: typeof measurement !== 'undefined' ? measurement : null,
        numbersForEach: typeof numbersForEach !== 'undefined' ? numbersForEach : null,
        reduceNumber: typeof reduceNumber !== 'undefined' ? reduceNumber : null,
        numbers: typeof numbers !== 'undefined' ? numbers : null,
        greet: typeof greet !== 'undefined' ? greet : null,
        Book: typeof Book !== 'undefined' ? Book : null,
        Author: typeof Author !== 'undefined' ? Author : null,
        books: typeof books !== 'undefined' ? books : null,
        Employee: typeof Employee !== 'undefined' ? Employee : null,
        employee1: typeof employee1 !== 'undefined' ? employee1 : null,
        Project: typeof Project !== 'undefined' ? Project : null,
        project1: typeof project1 !== 'undefined' ? project1 : null,
        valueArrayToObject: typeof valueArrayToObject !== 'undefined' ? valueArrayToObject : null



    }
} catch(err){

}