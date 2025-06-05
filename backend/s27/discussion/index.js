console.log("Hello World!");

//[SECTION] While Loop
/*
	- A while loop takes a conmdition
	- If the condition evaluates to true, the statements inside the code will be exectued
	- A statement is a command that a programmer gives to the computer 
	- A loop will iterate a certain number of times until the condition is met
	- syntax 
		while(condition) {
			statement
		}
*/
let count = 5; 

// while the value of count is not equal to 0
while (count !==0) {
	// The current value of count is printed out
	console.log(`While: ${count}`);

	//Decrease the value of count by 1 after every iteration to stop the loop when it reaches 0 
	//Loops occupy a significant amount of memory space in our devices
	count--;
}	


// MINI ACTIVITY 

let iteration = 10;

while (iteration >= 0) {
	let text = `I will become a Full-Stack Developer Soon in ... ${iteration}`;
	console.log(text);

	iteration--;
}


function demoDoWhile(number) {
	do {
		console.log(`Do While ${number}`);

		number += 1;
	}

	while (number <10);
}
demoDoWhile(0);


// [SECTION] FOR LOOPS!!
function forOFLoop(){ //LOOP FOR ARRAY
	let fruits = [`apple`, `banana`, `cherry`];

	for (let fruit of fruits)
		console.log(fruit);
}


forOFLoop();

function forInLoop(){ //LOOP FOR OBJECTS
	let objects = {
		name: `DJR`,
		email: `DJR @GMAIL.COM`,
		number: `09938518806`
	}

	for (let key in objects)
		console.log(`${key}: ${objects[key]}`);
}
forInLoop();

function demoForLoop (number) {
	for (let count = number; count<=10; count++) {
		console.log(`For: ${count}`);
	}
}
demoForLoop(5);


for (let count = 0; count<=20; count++){
	console.log(count);
}


let myString = `alex`;

console.log(myString.length);

console.log(myString[0]);
console.log(myString[1]);
console.log(myString[2]);
console.log(myString[3]);

myString = `ZUITT`;

// myString.length value is equal to 5 since there is 5 letters in ZUITT

// note that to access the letters of the word... it follows this numbering 1st letter is index # 0 2nd letters is index # 1 3rd letter is index # 2 4th letter is index # 3 5th letter is index # 4 ....

for (i = 0; i< myString.length; i++) {
	console.log(`${i}: ${myString[i]}`);
}


//BONUS CHALLENGE
let word = `ZUITT`;
let vowelcount = 0;
let consonantcount = 0; 
for (i = 0; i < word.length; i++) {
	let letter = word[i];
	// `aeiouAEIOU`.includes(letter) this checks if the letter exists in the string of vowels 
	if (`aeiouAEIOU`.includes(letter)){
		vowelcount++
	}

	else {
		consonantcount++ 
	}

}

console.log(`${word} word has ${vowelcount} vowel(s) and has ${consonantcount} consonant(s)` );

// REVERSE THE WORD

let reversed = ``;
for (i = (word.length - 1); i >= 0; i--) {
	reversed += word[i];
}

console.log (`${word} --> ${reversed}`);

//CAPITALIZE EVERY OTHER LETTER

let result = ``;
let casing = ``
for (i = 0; i < word.length; i++){
	if (i%2 === 0) {
		result += word[i].toUpperCase();
	}
	else {
		result += word[i].toLowerCase();
	}

}
console.log(result);


let o = 5;
do {
	console.log(o);
	o--;
} while (o>3);