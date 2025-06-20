console.log("JS MOCK TECHNICAL EXAM");

let empty = null;

console.log(typeof empty);

let test = {} === {};

console.log (test);

function removeDuplicates(arr){
	return arr.filter((item, index) => arr.indexOf(item)) === index;
}

array = [1,2,3,2,4,5,1];
console.log(removeDuplicates[array]);
console.log(array.indexOf(1));


function capitalizedFirstLetter(str){

	return str[0].toUpperCase()+str.slice(1);
}

console.log(capitalizedFirstLetter("hello"));


let sum = 0;

function summation(array){
	for (i=0; i<array.length; i++){
		console.error(sum += array[i]);
	}
	return sum;
}

let numbers = [1,2,3,4,5];
let result = summation(numbers);

console.log(result);

/*console.log(summation + capitalizedFirstLetter);

	}
function process(data){
	for (i=0; i<data.length; i++){
		if (data[i] % 2 = 0){
			data.splice(i, 1);
		}
}*/

/*console.log(process([1,2,3,4,5,6]);*/


function colorRandomizer(){
	let colors = [`red`, `orange`, `yellow`, `green`];
	let index  = Math.floor(Math.random() * colors.length);
	return colors[index];
}

console.log(colorRandomizer());

let test1 = Math.floor(3);
console.log(test1);

let arraytest = [1,3,5,6,9];
let test2 = (arraytest[2 - 1]);
console.log(test2);

function multiply(a,b) {
	return a * b; 
}

console.log(multiply("2","3"));

console.log(1+`2`+3-`4`);

let obj1 = {
	name: `asa`
}

function change(newName){
	let obj1 = {
		name: newName
	};
}
change(`mo`);
console.log(obj1);