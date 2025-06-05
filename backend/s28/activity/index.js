/*MEMBER 1*/

let groceryList = ["Tomato Sauce","Spaghetti Noodles","Onion","Cheese","Hotdog", "Fruit Cocktail", "All Purpose Cream"];

console.log("Items to buy:")


/*
    4. Create a function which is able to iterate over an array to display each item in the console.
        -This function will receive an array as an argument
        -Using a for loop, iterate over the groceryList array to create new array where each element from groceryItems has prefixed number like [1. Milk, 2.Veggies...]

*/


function displayItems(array) {
    let prefix = 1;
    for (i = 0; i < array.length; i++) {
       
        array[i] = `${prefix}. ${array[i]}`;
        prefix++;
    }
    return groceryList;
}

console.log(displayItems(groceryList));

/*
    5. Create function which is able to receive an array and the index number of the item to be found, then return the found item.
        - function should be able to receive an array and the index of the item to be found.
        - return the item accessed by the index.
        - if the item cannot be found, return undefined.
*/
groceryList = ["Tomato Sauce","Spaghetti Noodles","Onion","Cheese","Hotdog", "Fruit Cocktail", "All Purpose Cream"];

function getItemByIndex(array, index) {
	return array[index];
};
console.log(getItemByIndex(groceryList, 2));


// Member 2
/*6. Create function which is able to update a specific item in the groceryList array by its index.
        - Function should be able to receive 3 arguments, the array, the update value and the index number.
        - Access and locate the item by its index then re-assign the item with the update.
        - Return the updated array.
*/
groceryList = ["Tomato Sauce","Spaghetti Noodles","Onion","Cheese","Hotdog", "Fruit Cocktail", "All Purpose Cream"];

function updateItemByIndex(array, updateValue, index) {
		array[index] = updateValue;
		return groceryList;
}

console.log(updateItemByIndex(groceryList, `Milk`, 0));


/*
    7. Create a function which is able to check if an array is empty.
        - Function should be able to receive an array.
        -Add an if statement to check if the length of the groceryList array is greater than 0.
            -If it is, return false.
        -Else, return true.

*/

groceryList = ["Tomato Sauce","Spaghetti Noodles","Onion","Cheese","Hotdog", "Fruit Cocktail", "All Purpose Cream"];

function isEmpty(array) {
	if (array.length > 0){
		return false
	}
	else {
		return true
	}

}
console.log(isEmpty(groceryList));
console.log(isEmpty([]));


/*
    8. Create a function which is able to iterate over an array to confirm if an item exists within a given array.
        - This function will receive the array to look into and the name of the element as an argument.
        - Using a for loop, iterate over the array to search for each index that has the same value as the item.
            -If it is found, return true.
        - Outside of the loop, return false.
*/

groceryList = ["Tomato Sauce","Spaghetti Noodles","Onion","Cheese","Hotdog", "Fruit Cocktail", "All Purpose Cream"];

function checkIfItemExists(array, name) {
	for (i=0; i<array.length; i++) {

		if (array[i].toLowerCase() == name.toLowerCase()) {
			return true;
		}
		
	}
	 	return false;
}

console.log(checkIfItemExists(groceryList, "Cheese"));
console.log(checkIfItemExists(groceryList, "Pandesal"));


// Member 3
/*
    9. Create a function which is able to check if a given array contains only numbers.
        - This function should receive an array as an argument
        - Then, add a loop to loop over each item in the array
        - within the loop add an if statement to check if the current item being looped is a number.
            - If the current item looped is NOT a number, return false
        - Outside the loop, return the boolean value, true
*/

function checkIfAllNumbers(array) {
	for (i=0; i<array.length; i++) {
		if (typeof array[i] != `number`) {
			return false;
		}
	}
	return true;
}
console.log(checkIfAllNumbers([95, 91, 90, 93]));
console.log(checkIfAllNumbers([95, 91, 90, "92"]));
console.log(checkIfAllNumbers([95, 91, 90, null]));

function checkIfAllStrings(array) {
	for (i=0; i<array.length; i++) {
		if (typeof array[i] != `string`) {
			return false;
		}
	}
	return true;
}
console.log(checkIfAllStrings(["Ely", "Marcus", "Buddy", "Raymund"]));
console.log(checkIfAllStrings(["Jerry", "Tommy", null]));




// Member 4
/* 

    10. Create a function able to verify if all elements in an array are even numbers.
        - The function should take an array as its input.
        - Inside the function, set up a loop to go through each element in the array.
        - within the loop add an if statement to check if the current item being looped is an even number.
            - If the current item looped is NOT an even number, return false
        - After the loop (outside of it), return true, indicating that all elements in the array are even numbers.
*/


function checkIfAllEven(array) {
	for (i=0; i<array.length; i++) {
		if (array[i] % 2 != 0) {
			return false;
		}
	}
	return true;
}
console.log(checkIfAllEven([20, 22, 40, 60]));
console.log(checkIfAllEven([12, 3, 40, 60]));
console.log(checkIfAllEven([7, 6, 24, 15]));

/* 

    11. Create a function able to verify if all elements in an array are leap years.
        - The function should take an array as its input.
        - Inside the function, set up a loop to go through each element in the array.
        - Within the loop:
            - For each element, add an if statement to check if the current element is not a leap year:
                - To determine if a year is a leap year, apply the following rules:
                - A year is a leap year if it is divisible by 4.
                - However, if the year is also divisible by 100, it must additionally be divisible by 400 to be considered a leap year.
                - If the current year does not meet these conditions, make the function return false immediately.
        - After the loop (outside of it), return true, indicating that all elements in the array are leap years.

*/
function checkIfAllLeapYear(array) { 
    for (let i=0; i<array.length; i++) {
        if (!(array[i] % 4 == 0 && (array[i] % 400 == 0 || array[i] % 100 !== 0))) {
            return false;
        }
    }
    return true;
}
console.log(checkIfAllLeapYear([2000, 2020, 1904, 1996]));
console.log(checkIfAllLeapYear([1900, 2012, 2004]));


let four = 1904 % 4 == 0;
let hundred = 1904 % 100 !== 0;
let fourhundred = 1904 % 400 == 0;

function leap() {
	if (true && (false || false)) {
		return false
	}
	else {
		return true;
	}
}
console.log(four, hundred, fourhundred);
console.log(leap());
/* 

    12. Debug the given code to allow the functions to properly receive and return the correct values and mimic the output.
        - Check the syntax of the given code.
        - Check if proper value is returned or displayed.
        - Check the parameters and arguments.
        - Check the if else statements
        - Check the if conditions
        - Check the loop statements
        - Check the loop conditions
        - Check the array access
    - Use the browser console to test your functions.
*/