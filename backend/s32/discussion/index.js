console.log("Hello World!");

//[SECTION] Exponent Operator

/*before ES6*/
const firstNum = Math.pow(8,2);
console.log(firstNum);

/*with ES6*/
const secondNum = 8**2;
console.log(secondNum);

/*[SECTION]*/
let name = `John`;

/*Pre-Template Literal String*/
/*Uses single quotes ('')*/;
let message = "Hello " + name + "! Welcome to programming!";
message = `Hello ${name}! Welcome to programming!`;

console.log("Message Without template literals: message " + message);
console.log(`Message With template literals: ${message}`);

const anothermessage = `${name} attended a math competition. He won it by solving 8^2 which is equal to ${secondNum}`;

console.log(anothermessage);	

const interestRate = .1;
const principal = 1000;

/*Template Literals use JavaScript Expression which is ${}*/
console.log(`The interest on your savings account is: ${interestRate * principal}`);

//[SECTION] Array Destructuring;

//Pre-Array Destructuring
const fullName = [`Juan`, `Dela`, `Cruz`];

console.log(fullName[0])
console.log(fullName[1])
console.log(fullName[2])

console.log(`Hello ${fullName[0]} ${fullName[1]} ${fullName[2]}! it's nice to meet you.`)

//Array Destructuring
const [firstName, middleName, lastName] = fullName;

console.log(firstName);
console.log(middleName);
console.log(lastName);
console.log(...fullName);

//No parameters arrow function
const hello = () => {
	console.log("Hello World");
}

hello();

//Single Parameter
const square = x => x * x;
console.log(square(4)); // 16

//Multiple Parameters
const multiply = (a, b) => a * b;
console.log(multiply(5,4)); // 20

//With Block Body (need return)
const subtract = (a, b) => {
  return a - b;
};
console.log(subtract(10, 4)); // 6

//[SECTION] Function Expression

let funcExpression = function funcName(){
	console.log("Hello from the other side");
}

funcExpression();

const sumOfTwoNumbers = (num1, num2) => num1 + num2;
console.log(sumOfTwoNumbers(1,2));


// [SECTION] Pre-Arrow Function without Template Literals

/*function printFullName(firstName, middleInitial, lastName) {
	console.log(`${firstName} ${middleInitial}. ${lastName}`)
};	

printFullName(`John`, `D`, `Smith`);*/

printFullName = (firstName, middleInitial, lastName) => {
	console.log(`${firstName} ${middleInitial}. ${lastName}`)
}

printFullName(`John`, `D`, `Smith`);


//[SECTION] Implicit Return Statement - specific for one liner code

let add = (x,y) => {
	return x + y;
}

let total = add(1,2);
console.log(total);

add = (x,y) => x + y;
total = add(2,2);
console.log(total);

//[SECTION] Class-Based Object Blueprints

class Car {
	constructor(brand, name, year) {
		this.brand = brand;
		this.name = name;
		this.year = year;
	}
}

let myCar = new Car();
myCar.brand = `Ford`;
myCar.name = `Ranger Raptor`;
myCar.year = 2021;

console.log(myCar);

const myNewCar = new Car(`Toyota`, `Vios`, 2021);

console.log(myNewCar);

//[SECTION] ES14 Updates
//toSorted() - it allows you to sort an array by returning a new array instead of updating the original array.

let array = [5, 3, 1, 4, 2];
let sortedArray = array.toSorted(); //non-mutator

console.log(`original array: `, array);
console.log(`sorted array: `, sortedArray); 

array.sort(); //mutator
console.log(`original array: `, array);

//findLast();

let arrayNumbers = [15,2,8,6,24,23];

let lastEvenNumber = arrayNumbers.findLast((number) => {
	console.log(number)
	return number % 2 === 0;
})

console.log(lastEvenNumber);

let songList = [`Uhaw`, `Multo`, `Raining in Manila`, `Ere`, `Jopay`];

let updatedSongList = songList.toSpliced(2, 1, `Buloy`); //non-mutator

console.log(`Original Array: `, songList);
console.log(`Updated Array:`, updatedSongList);

songList.splice(2, 1, `Binhi`); //mutator
console.log(`Original Array: `, songList);