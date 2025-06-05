console.log(`Hello World!`);

let studentNumberA = `2020-1923`;
let studentNumberB = `2020-1924`;
let studentNumberC = `2020-1925`;
let studentNumberD = `2020-1926`;
let studentNumberE = `2020-1927`;

let studentNumbers = [`2020-1923`, `2020-1924`, `2020-1925`, `2020-1926`, `2020-1927` ];
let grades = [74, 98.5, 70, 94.3, 73, 89.2, 75, 71];
let computerBrands = [`Acer`, `Asus`, `Lenovo`, `Neo`, `Redfox`, `Gateway`, `Toshiba`, `Fujitsu`]

// array of objects
let products = [

	{name: `Gasoline - Green`, price: 55},
	{name: `Gasoline - Red`, price: 60},
	{name: `Diesel`, price: 50},	
]

//array of arrays
let chessboard = [
		[`a1`, `b1`, `c1`, `d1`, `e1`, `f1`, `g1`],
		[`a2`, `b2`, `c2`, `d2`, `e2`, `f2`, `g2`],

]

console.log(products[1].name);
console.log(studentNumbers, grades, computerBrands, products);

let	mixedArr = [12, `Asus`, null, undefined, {}];

let myTasks = [
        'drink html',
        'eat javascript',
        'inhale css',
        'bake sass'
    ];
console.log(myTasks);

let city1 = `Tokyo`;
let city2 = `Manila`;
let city3 = `Jakarta`;

let cities = [city1, city2, city3];
console.log(cities);
console.log(cities.length);
console.log(chessboard[0].length);


// Accessing an array using its index number

console.log(myTasks[1]);

let lakersLegends = ["Kobe","Shaq","LeBron","Magic","Kareem"];

// Accessing the last element of an array

console.log(lakersLegends[lakersLegends.length-1]);

for (i = 0; i < grades.length; i++){
	console.log(grades[i]);
}

//create program to check if it is a passing grade 

for (i = 0; i < grades.length; i++){
	if (grades[i] >= 75) {
		console.log(`This grade ${grades[i]} is a passing grade`);
	}

	else {
		console.log(`This grade ${grades[i]} is a failing grade`)

	}


}

function average () {

let total = 0;

for (i = 0; i < grades.length; i++){
	
	total += grades[i];
}
let avg = total/(grades.length);
return avg;
}

console.log(average());


let numArr = [5, 12, 30, 46, 40];

function isAllDivisibleBy5(array){
	for(let index = 0; index < array.length; index++){
		if(array[index] % 5 !== 0){
			return false; 
			// false - the numbers is not divisible by 5
		}
	}

	return true; 
	// true - after the all process we didn't a number that is not divisible, so all are divisible by 5.
}

console.log(isAllDivisibleBy5(numArr));