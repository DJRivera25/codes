console.log("JS FILE CONNECTED");

// function functionName (parameters) {}

// name here is the parameter
function printName(name){
	console.log("My name is " + name);
}

// () here is the argument 
// argument are stored as the parameters within the function
// arguments are passed to a function during invocation 
printName("Juana");	
printName("Luis");
printName("Tanggol");

function test(test1){
	console.log("testing lang " + test1);
}
test("argument");

// [SECTION] Variable as arguments

let	sampleVariable = "Yui";
printName(sampleVariable);

// [Mini Activity]
// Create a function that will accept a name. the parameter will store a user input and display "Good morning Mr/Ms " + parameter 

function nameTest(activity){
	console.log("Good morning Mr. " + activity);
}

nameTest("Papichulo");

function checkDivisibility(num){
	let remainder = num % 8;
	console.log("The remainder of " + num + " divided by 8 is " + remainder)
	let isDivisibleBy8 = remainder === 0;
	console.log("is " + num + " divisible by 8? ");
	console.log(isDivisibleBy8)
}

checkDivisibility(64);
checkDivisibility(20);

// [SECTION] Multiple Parameters

function createFullName(firstName, middleName, lastName) {

	console.log(firstName + " " + middleName + " " + lastName);
}

createFullName("David", "Mahina", "Dimaguiba");
createFullName("Dimaguiba", "David", "Mahina");
// this will output undefined since nothing was inputted to be the value of lastName
createFullName("Dimaguiba", "David",);

// Using Variables as arguments

let firstName = "John";
let middleName = "Doe";
let lastName = "Smith";

createFullName(firstName, middleName, lastName);

// [Mini Activity] Create a funciton that will add 2 numbers. and the function will accept two parameters to be added. 


function addTwoNumbers (num1, num2){
	console.log(num1 + num2);
}

addTwoNumbers(11, 22);

