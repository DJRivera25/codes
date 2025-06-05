console.log("JS File Connected");

// Functions - are reusable block of code that performs a specific task (process).
// - allow us to group statements (tasks) together and use them in a program

function sayHello() {
	console.log("Hello Po!");
}

// function invocation / function calling
// functionName();
sayHello();

function displayCarInfo() {
	console.log("Brand: Toyota");
	console.log("Type: Sedan");
	console.log("Price: 1,500,000.00")
}

// ProductPage
displayCarInfo();

// OrderPage
displayCarInfo();

sayHello();

function displayCourses () {
	let courses = ["science 101", "math 101", "english 101"];
	console.log(courses);
}

displayCourses();

// variables created before the functions are the variables that can access by the function
// this is why variables are declared on the top of JS file
const globalVariable = "Im a global variable"
const anotherGlobalVariable = "Im just anotherGlobalVariable"

function displayGlobal () {
	console.log(globalVariable);
	console.log(anotherGlobalVariable);
}

displayGlobal();

let	num1 = 10;
let num2 = 25;

function addTwoNumbers () {

	return (num1 + num2);

}

addTwoNumbers();

function subtractTwoNUmbers () {
	return (num1 - num2);
}
subtractTwoNUmbers();

function addTwoOutput () {
	console.log(addTwoNumbers() + subtractTwoNUmbers() + " = added two functions");
}

addTwoOutput();
// -------------------------

// Local Scope
function localFunction () {
	const localVariable = "I'm a local variable";
	console.log(localVariable);
}

localFunction();


// variables declared within a funcion is cannot be access globally
// function accessLocal ()
// {
// 	console.log(localVariable);
// }
// accessLocal();
	
// console.log(localVariable);

function returnFullName(){
	let	fullName = "Jeffrey" + " " + "Smith" + " " + "Bezos"
	return fullName; // the returned value will be assigned to the function invocation
	}

let	fullName = returnFullName();
console.log(fullName);

function returnFullAddress() {
	let fullAddress = {
		street: "#44 Maharlika St.",
		city: "cainta",
		province: "Rizal"
	}
	return fullAddress;
}	
				//function invocation
let myAddress = returnFullAddress();
console.log(myAddress);	

function introduceUser(){
console.log("Hi my name is " + returnFullName() + " and I live in this address...");
console.log(myAddress);
}

introduceUser(); 

function getGuildMembers(){
	return ["white_knight", "healer", "masterTheif", "andrewTheHero"];
}

console.log(getGuildMembers());


