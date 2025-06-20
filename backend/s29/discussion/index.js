console.log("HELLO WORLD!");

function isLeapYear(year) {
    for (let i = 0; i < year.length; i++) {
    if (!((year[i] % 4 === 0 && year[i] % 100 !== 0) || (year[i] % 400 === 0))) {
      return false; // if any year is not a leap year
    }
  }
  return true; // all years are leap years
}


console.log(isLeapYear([2000, 1900, 2004, 2020]));
console.log(isLeapYear([2000, 1600, 2004, 2020]));

// Manipulating Array with Array Methods

// 1. Mutator Methods - allow us to update/modify the original array
// 2. Iterator Methods - allow us to loop over items in an array and perform tasks with them
// 3. Non-mutator Methods - allow us to manage and perform tasks on an array without updating the original array

let fruits = ["Apple", "Orange", "Kiwi", "Dragon Fruit"];
console.log(fruits);
console.log(fruits.length);
let fruitsLength = fruits.push("Mango");
console.log(fruitsLength);
console.log("Mutated array after push method: ");
console.log(fruits);

/*push()		Adds item(s) to the end of the array	arr.push("Mango")
pop()			Removes the last item	arr.pop()
shift()			Removes the first item	arr.shift()
unshift()		Adds item(s) to the start of the array	arr.unshift("Banana")
splice()		Adds/removes/replaces item(s) at a specific index	arr.splice(2, 1, "Peach")
sort()			Sorts the array in place	arr.sort()
reverse()		Reverses the order of elements in the array	arr.reverse()
fill()			Fills elements in a range with a static value	arr.fill("X", 1, 3)
copyWithin()	Copies part of the array to another location within the same array	arr.copyWithin(0, 2, 4)
flat()			Flattens nested arrays (mutates only at depth 1, but can feel like a mutator)	arr.flat()*/

let addFruitsFront = fruits.unshift("Banana");
console.log(fruits); // ["Banana", "Apple", "Orange", "Kiwi", "Dragon Fruit"]

let replaceremoveFruits = fruits.splice(2, 1, "Peach", "Berry");
console.log(replaceremoveFruits);
console.log(fruits); // ["Banana", "Apple", "Peach", "Kiwi", "Dragon Fruit"]

let sortFruits =  fruits.sort();
console.log(fruits); // ["Apple", "Banana", "Dragon Fruit", "Kiwi", "Peach"]

let reversedFruits =  fruits.reverse();
console.log(fruits);   // ["Peach", "Kiwi", "Dragon Fruit", "Banana", "Apple"]

let removeFruitsEnd = fruits.pop();
console.log(removeFruitsEnd);
console.log(fruits); // ["Peach", "Kiwi", "Dragon Fruit", "Banana"]

let fruit =['Apple', 'lime', 'Cherry', 'Dragon Fruit', 'Mango']

fruit.splice(1, 3, "Lime", "Cherry");
console.log(fruit);

fruit.splice(2, 3, "Lime", "Cherry");
console.log(fruit);

function replacefruit(array){
	let food = [`Sinigang`, `Adobo`, `Kare-kare`,`Kaldereta`, `Pritong Manok`, `Menudo`];
	for (i=0; i<array.length; i++){
		let randomfood = Math.floor(Math.random() * food.length);
		array.splice(i,1, food[randomfood]);
		food.splice(randomfood,1);
	}
	return array.sort();
}
console.log(replacefruit(fruit));

// ADDITIONAL ARRAY TEST
/*
.every()				Tests if all elements in an array pass a condition.	true if all elements pass, false otherwise.	[2, 4, 6].every(num => num % 2 === 0) → true
.some()					Tests if at least one element in an array passes a condition.	true if at least one passes, false otherwise.	[1, 3, 5, 6].some(num => num % 2 === 0) → true
.find()					Returns the first element that satisfies a condition.	The first matching element or undefined.	[3, 4, 5].find(num => num > 3) → 4
Array.isArray()	Checks if a value is an array (not just an object or other type).	true if the value is an array, false otherwise.	Array.isArray([1, 2, 3]) → true
Array.isArray("hello") → false

*/