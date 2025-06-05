/* 
1. In the S29 folder, create an activity folder, an index.html file inside of it and link the index.js file.
2. Create an index.js file and console log the message Hello World to ensure that the script file is properly associated with the html file.
    - Copy the template provided by your instructor and paste it in the index.js file.
    - Update your local sessions git repository and push to git with the commit message of Add template code s29.
    - Console log the message “Hello World” to ensure that the script file is properly associated with the html file.

*/

/*
    Create functions which can manipulate our arrays.
*/

let registeredPlanets = ["Mercury", "Venus", "Earth", "Mars"];
console.log(registeredPlanets);
let registeredAstronomers = [];
console.log(registeredAstronomers);

/*
    
    3. Create a function called addPlanet which will allow us to register/add new planets into the registeredPlanets list.
        - It will receive an array and a planet as parameters
        - Add an if statement to check if the planet input is a string:
            - If it is, add the received planet into the array at the end of the array.
            - Else, return the string: "Incorrect Input Type"
        - return the updated array.
        - Invoke the function and pass the registeredPlanets and a planet as arguments
*/




/*
    4. Create a function called deletePlanet which will delete the last planet in the registeredPlanets array.
        - It will receive an array as parameter.
        - Check if the array is not empty:
            - If it is, delete the last planet in the array
            - Else return a message: "No planets registered."
        - Return the updated array.
        - Invoke the function and pass the registeredPlanets array as an argument.
*/


/*
    5. Create a function called returnNumberOfPlanets which will display the amount of registeredPlanets in our array,
        - It will receive an array as parameter
        - Check If the array is not empty:
            - If it is, return the number of registered planets.
            - Else return a message: "No planets registered."
        - Invoke the function and pass the registeredPlanets array as an argument.
*/


/*
    6. Create a function called sortPlanets which will sort the registeredPlanets array in alphabetical order when invoked:
        - It will receive an array as parameter
        - Check If the array is not empty:
            - If the array is not empty, return the sorted array.
            - Else, return "No planets registered"
        - Invoke the function with registeredPlanets as an argument
*/


/* 
    7. Create a function called reversePlanets which will reverse the current order of the registeredPlanets array using reverse()
        - It will receive an array as parameter
        - Check If the array is not empty:
            - If the array is not empty, return the array in reversed order.
                - Look up the use of .reverse() in javascript arrays
            - Else, return "No planets registered"
        - Invoke the function and pass the registeredPlanets array as an argument.

*/


/* 
    8. Create a function called unshiftPlanet which will add a planet in the registeredPlanets array using unshift().
        - It will receive an array and a planet as parameters
        - Add an if statement to check if the planet input is a string:
            - If it is, add the received planet into the array at the beginning of the array.
                - Look up the use of the unshift() method in JS Arrays
            - Else, return the string: "Incorrect Input Type"
        - Invoke the function and pass the registeredPlanets and a planet as arguments
        
*/

/* 
    9. Create a function called shiftPlanet which will delete a planet in the registeredPlanets array using shift().
        - It will receive an array as parameter
        - If the array is not empty,
            - Use shift method to delete the first element to the array
            - Return the updated array
        - Else return "No planets registered"
        - Invoke the function and pass the registeredPlanets array as an argument
*/

/* 
    10. Create a function called splicePlanets which will  which will replace elements in the registeredPlanets array with static values using splice().
        - It will receive an array and a planet as parameters
        - Use splice() to replace an element in the array with the planet received as argument.
        - Return the array
        - Invoke the function and pass the registeredPlanets array and a planet as a parameter
*/

/*
    11. Create a function called registerAstronomer.
        - It will receive an array, and 3 arguments as parameters:
            - (array, name, address, age)
        - Add an if statement to check if the name input is a string.
            - If it is not, return "Incorrect Input Type"
        - Add an if statement to check if the address input is a string:
            - If it is not, return "Incorrect Input Type"
        - Add an if statement to check if the age input is a number:
            - If it is not, return "Incorrect Input Type"
        - Inside the function, create an object called astronomer.
            - The astronomer object should have 3 properties: 
                - astronomerName: String
                - address: String
                - age: Number
            - Pass the values of the appropriate parameter to each property.
        - Add the astronomer variable to the array.
        - Return the array where the astronomer has been added.
        - Invoke the function and pass the appropriate parameters.
*/

/* 
    12. Create a function called deleteAstronomer which will delete the last registered astronomer
        - It will receive an array as parameter
        - Check if the array is not empty:
            - If it is, delete the last astronomer in the array
            - Else return a message: "No astronomer registered."
        - Invoke the function and pass the registeredPlanets array as an argument.
*/


/* 

    13. Debug the following code to allow the functions to properly receive and return the correct values and mimic the output.

    - Check syntax of the following code.
    - Check if value is returned.
    - Check the parameters and arguments.
    - Check the if else statements
    - Check the loop statements
    - Check if the array methods used are correct.

*/

    let numbers = [1, 2, 3, 4, 6, 8, 9, 10, 12, 13, 20, 25];

    function returnEvenNumbers(arr) {

        if (arr.length === 0) {
            return "The array is empty.";
        }

        let isAllNumbers = arr.every(num => typeOf num = "Number")

        if(isAllNumbers += false){
            return "The array does not contain all numbers."
        }

        let isAllPositiveIntegers = arr...some(num => num > 0)

        if(isAllPositiveIntegers === false){
            return "The array does not contain all positive integers."
        }

        return arr.find(num => num / 2 = 0);

    }

    let messageIfEmptyArr = findEvenNumber([]);
    console.log("Message if the array is empty:")
    console.log(messageIfEmptyArr);

    let messageIfNotAllNumbers = findEvenNumber([1, 2, 3, "25", 4]);
    console.log("Message if the array does not contain all number data type:")
    console.log(messageIfNotAllNumbers);


    let messageIfNotAllPositiveIntegers = findEvenNumber([1, 2, 3, -25, 4]);
    console.log("Message if the array does not contain all positive integers:")
    console.log(messageIfNotAllPositiveIntegers);

    let evenNumbers = findEvenNumber(numbers);
    console.log("Even numbers in the array:")
    console.log(evenNumbers);


    function findIndex(arr, num) {

        if (Array.isArray(arr) === "false") {
            return "Error: First argument must be an array";
        }

        if (typeof number !== 'number') {
            return "Error: Second argument must be a number";
        }

        return arr.find(number);

    }

    let messageIfFirstArgumentNotArray = findIndex({element1:1, element2: 2, element3: 3}, 3);
    console.log(messageIfFirstArgumentNotArray);

    let messageIfSecondArgumentNotNumber = findIndex(numbers, "3");
    console.log(messageIfSecondArgumentNotNumber);

    let index = findIndex(numbers, 3);
    console.log(index);




//Do not modify
//For exporting to test.js
try{
    module.exports = {

        registeredPlanets: typeof registeredPlanets !== 'undefined' ? registeredPlanets : null,
        registeredAstronomers: typeof registeredAstronomers !== 'undefined' ? registeredAstronomers : null,
        addPlanet: typeof addPlanet !== 'undefined' ? addPlanet : null,
        deletePlanet: typeof deletePlanet !== 'undefined' ? deletePlanet : null,
        returnNumberOfPlanets: typeof returnNumberOfPlanets !== 'undefined' ? returnNumberOfPlanets : null,
        sortPlanets: typeof sortPlanets !== 'undefined' ? sortPlanets : null,
        unshiftPlanet: typeof unshiftPlanet !== 'undefined' ? unshiftPlanet : null,
        shiftPlanet: typeof shiftPlanet !== 'undefined' ? shiftPlanet : null,
        registerAstronomer: typeof registerAstronomer !== 'undefined' ? registerAstronomer : null,
        deleteAstronomer: typeof deleteAstronomer !== 'undefined' ? deleteAstronomer : null,
        reversePlanets: typeof reversePlanets !== 'undefined' ? reversePlanets : null,
        splicePlanets: typeof splicePlanets !== 'undefined' ? splicePlanets : null,
        returnEvenNumbers: typeof returnEvenNumbers !== 'undefined' ? returnEvenNumbers : null,
        findIndex: typeof findIndex !== 'undefined' ? findIndex : null

    }
} catch(err){

}
