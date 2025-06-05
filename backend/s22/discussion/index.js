// JS - Case sensitive language (ctrl + /)

/*
	console.log()
	Logs an output to the console

	ctrl+ shift + / - multi-line comments
*/
console.log("Hello world! ");

// variable - containers of values 
let myName = "Sir Miguel Dave Dayos";
console.log(myName);

let myPet = "Yuri";
console.log(myPet);

// = - used to assign values, and it can be used also to re-assign values
let myProductName = "desktop computer"; // declaration and initialization
myProductName = "Alienware Aurora";
console.log(myProductName);

let productPrice;  //  declaration
console.log(productPrice); // undefined 

productPrice = 12000; // initialization
console.log(productPrice);

// undefined - means a variable exists but hasn't been given a value
// not defined - is an error when a variable is used but not being declared
let hello;
console.log(hello); // undefined


let movieTitle = "The Godfather"; // good 
let pokemon = 25000; // bad

// Start with a lowercase letter
let LastName = "Smith"; // bad
let lastName = "Smith"; // good (camelCase)

// Use underscore
let product_description = "lorem impsum";
let product_id = "PROD001";

// let new = "New Addition"; // Do not use reserved keywords in js as a name of a variable.
// console.log(new);

let x = 0, y = 90, z = 9;
console.log(x, y, z);


const interest = 3.539;
// interest = 4.489; // error
console.log(interest);

// DATA TYPES


// string
let msyString = "";
let country = 'Philippines';
let province = "Metro Manila";
let phonenumber = "0999111222";

console.log(country);
console.log(province);
console.log(phonenumber);

// Numbers are used for mathematical operations
// Integers/Whole Numbers

let myNumber = 0;
let headcount = 26;
console.log(headcount);

// Decimal Numbers/ Fractions

// Boolean is used to show status as true or false
let isMarried = false;
let inGoodConduct = true; 
console.log(isMarried);
console.log(inGoodConduct);

// null - means intentionally empty
let spouse = null;
console.log(spouse);

// undefined
let fullname 
console.log(fullname);

// Arrays and objects

// Arrays - used to group  data of similary data types
let grades = [98.7, 92.1, 90.2, 94.6];
let students = ["Dennis", "Eugene", "Vincent", "Alfred"];

let product = [99, "Computer", false, null]; 
// bad practice since it consists of different data types inside
console.log(product);

// Objects - are used to represent real word object and its characteristics

let computerProduct = { 
	// key (property) : value (object - key value pair)
	productName : "Computer",
	price: 30000,
	isAvailable: false,
	supplier: null,
	}
console.log(computerProduct);

	// objectName
let student = {
	fullname : "Topher Malinao",
	age: 18,
	grades: [98.7, 92.1, 90.2, 94.6], // array
	address: { // object 
		housenumber: "345",
		city: "Manila"
	}
}
console.log(student);




