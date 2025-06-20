console.log("Hello World")

let x = 1397;
let y = 7831;

let sum = x + y; 
console.log("Result of addition operator: " + sum);

let difference = x - y; 
console.log("Result of difference operator: " + difference);

let	product = x*y;
console.log("Result of multiplication operator: " + product);

let	quotient = x/y;
console.log("Result of division operator: " + quotient);

let assignmentNumber = 8; 
assignmentNumber += 2; 

console.log("Result of addition assignment operataor " + assignmentNumber);

assignmentNumber -= 2; 

console.log("Result of subtraction assignment operataor " + assignmentNumber);


// INCREMENT

let z = 1;
let increment = ++z;
console.log("Result of pre-incremenet " + increment); 
console.log("Result of pre-incremenet " + z); 

increment = z++; 
console.log("Result of post-increment " + increment)
console.log("Result of post-increment " + z);

let decrement = --z;
console.log("Result of pre-decrement " + increment); 
console.log("Result of pre-decrement " + z); 

decrement = z--; 
console.log("Result of post-decrement " + increment); 
console.log("Result of post-decrement " + z); 

// used of post-increment in loops

for (let i = 0; i < 5; i++) {
  console.log(i);
}


// [SECTION] Type Coercion


let numA = '10';
let numB = 12;

let coercion = numA + numB;
console.log(coercion);
console.log(typeof coercion);

let coercionTrue = true + 1;
console.log(coercionTrue);

let coercionFalse = false + 1; 
console.log(coercionFalse);

// = (assignment operator)
// == (Equal to operator)
// === (strict equal operator)

console.log( 1 === 1);
console.log( 1 === 2);
console.log( 1 === "1");
console.log( "juan" === "juan");
console.log( 0 === false);


console.log( 1 !== 1);
console.log( 1 !== 2);
console.log( 1 !== "1");
console.log( "juan" !== "juan");
console.log( 0 !== false);

let a = 50;
let b = 55;

console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);

let isLegalAge =  true;
let isRegistered = false;

let allRequirementsMet = isLegalAge && isRegistered
console.log("Result of logical AND operator: " + allRequirementsMet)