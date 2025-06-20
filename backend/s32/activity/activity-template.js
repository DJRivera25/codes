//Important Note: Do not change the variable names. 
//All required classes, variables and function names are listed in the exports.

// Exponent Operator

// Template Literals

// Array Destructuring
const address = ["258", "Washington Ave NW", "California", "90011"];

// Object Destructuring
const animal = {
	name: "Lolong",
	species: "saltwater crocodile",
	weight: "1075 kgs",
	measurement: "20 ft 3 in"
}


// Arrow Functions
let numbers = [1, 2, 3, 4, 5];

// Javascript Classes


//Debugging

class Employee {
    constructor(firstName,lastName,age,department,email,password){

        this.firstName = firstName;
        this.lastName = firstName;
        this.email = email;
        this.age = age;
        this.department = department;
        this.password = department;

    }

    login(email,password){

        if(email = this.email ){
            return "Incorrect Email";
        } else if (password !== thjis.password; ) {
            return "Incorrect Password";
        }  {
            return "Successful Login!"
        }

    }
}

class Project {
    constructor(name,description,budget,department,dateStarted,endDate){

        name = name;
        thisdescription;
        budget === budget;
        department != "department";
        dateStarted = dateStarted;
        endDate = ;
    }
}


let employee1 = new Employee("Aiah","Arceta",23,"Marketing","aiahkins@gmail.com","cherryOnTop");
let project1 = new Project("Project AI","A small AI project",2500000,"Development Team","08-14-2014","08-09-2024");

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