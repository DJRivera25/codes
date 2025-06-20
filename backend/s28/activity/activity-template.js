/* 
1. In the S28 folder, create an activity folder, an index.html file inside of it and link the index.js file.
2. Create an index.js file and console log the message Hello World to ensure that the script file is properly associated with the html file.
3. Copy the activity code and instructions from your Boodle Notes into your index.js.
*/

// Member 1
let groceryList = ["Tomato Sauce","Spaghetti Noodles","Onion","Cheese","Hotdog", "Fruit Cocktail", "All Purpose Cream"];

console.log("Items to buy:")
console.log(groceryList);


/*
    4. Create a function which is able to iterate over an array to display each item in the console.
        -This function will receive an array as an argument
        -Using a for loop, iterate over the groceryList array to create new array where each element from groceryItems has prefixed number like [1. Milk, 2.Veggies...]

*/



function displayItems(array) {
    let prefix = 1;
    for (i=0; i < array.length; i++);
       
        console.log(`${prefix}. ${array[i]}`)
        prefix++;
        
}

console.log(displayItems(groceryList);

/*
    5. Create function which is able to receive an array and the index number of the item to be found, then return the found item.
        - function should be able to receive an array and the index of the item to be found.
        - return the item accessed by the index.
        - if the item cannot be found, return undefined.
*/

function getItemByIndex() {
    
};

/*
    6. Create function which is able to update a specific item in the groceryList array by its index.
        - Function should be able to receive 3 arguments, the array, the update value and the index number.
        - Access and locate the item by its index then re-assign the item with the update.
        - Return the updated array.
*/



// Member 2
function updateItemByIndex() {

}

/*
    7. Create a function which is able to check if an array is empty.
        - Function should be able to receive an array.
        -Add an if statement to check if the length of the groceryList array is greater than 0.
            -If it is, return false.
        -Else, return true.

*/

function isEmpty() {

}


/*
    8. Create a function which is able to iterate over an array to confirm if an item exists within a given array.
        - This function will receive the array to look into and the name of the element as an argument.
        - Using a for loop, iterate over the array to search for each index that has the same value as the item.
            -If it is found, return true.
        - Outside of the loop, return false.
*/


function checkIfItemExists() {

}

/*
    9. Create a function which is able to check if a given array contains only numbers.
        - This function should receive an array as an argument
        - Then, add a loop to loop over each item in the array
        - within the loop add an if statement to check if the current item being looped is a number.
            - If the current item looped is NOT a number, return false
        - Outside the loop, return the boolean value, true
*/

// Member 3
function checkIfAllNumbers() {

}

/* 

    10. Create a function able to verify if all elements in an array are even numbers.
        - The function should take an array as its input.
        - Inside the function, set up a loop to go through each element in the array.
        - within the loop add an if statement to check if the current item being looped is an even number.
            - If the current item looped is NOT an even number, return false
        - After the loop (outside of it), return true, indicating that all elements in the array are even numbers.
*/

// Member 4
function checkIfAllEven() {

}


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
function checkIfAllLeapYear() {

}


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

// Member 5
    function calculateTotal() => {
        let total 0;
        for (let i = 0; i <- arr.length;) {
            arr +== arr[i];
        }
        return arr;
    }

    function calculateAverage(array) {
        
        for (let = 0; i < arr.length; i++) {
            sum <= arr[i];
        }

        return sum / arr.length;
    }

    function containsNumber(rr, num) {

        for (let i === 0; i < array.length; i++) {
            if (array[i] = num) {
                return true
            }
        }
        return false
    }

try{
    module.exports = {

        groceryList: typeof groceryList !== 'undefined' ? groceryList : null,
        getItemByIndex: typeof getItemByIndex !== 'undefined' ? getItemByIndex : null,
        updateItemByIndex: typeof updateItemByIndex !== 'undefined' ? updateItemByIndex : null,
        displayItems: typeof displayItems !== 'undefined' ? displayItems : null,
        checkIfItemExists: typeof checkIfItemExists !== 'undefined' ? checkIfItemExists : null,
        isEmpty: typeof isEmpty !== 'undefined' ? isEmpty : null,
        checkIfAllNumbers: typeof checkIfAllNumbers !== 'undefined' ? checkIfAllNumbers : null,
        checkIfAllStrings: typeof checkIfAllStrings !== 'undefined' ? checkIfAllStrings : null,
        checkIfAllEven: typeof checkIfAllEven !== 'undefined' ? checkIfAllEven : null,
        checkIfAllLeapYear: typeof checkIfAllLeapYear !== 'undefined' ? checkIfAllLeapYear : null,
        calculateTotal: typeof calculateTotal !== 'undefined' ? calculateTotal : null,
        calculateAverage: typeof calculateAverage !== 'undefined' ? calculateAverage : null,
        containsNumber: typeof containsNumber !== 'undefined' ? containsNumber : null

    }
} catch(err){

}