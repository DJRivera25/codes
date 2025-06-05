console.log("Hello World")
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
let registeredAstronomers = [];
// console.log(registeredAstronomers);

/* MEMBER 1
    
    3. Create a function called addPlanet which will allow us to register/add new planets into the registeredPlanets list.
        - It will receive an array and a planet as parameters
        - Add an if statement to check if the planet input is a string:
            - If it is, add the received planet into the array at the end of the array.
            - Else, return the string: "Incorrect Input Type"
        - return the updated array.
        - Invoke the function and pass the registeredPlanets and a planet as arguments
*/


   function addPlanet(array, planet) {
    if (typeof planet === "string") {
        array.push(planet);
    } else {
        return "Incorrect Input Type";
    }
    return array;
}

    console.log(addPlanet(registeredPlanets, "Pluto"));
    console.log(addPlanet(registeredPlanets, "Saturn"));





/*
    4. Create a function called deletePlanet which will delete the last planet in the registeredPlanets array.
        - It will receive an array as parameter.
        - Check if the array is not empty:
            - If it is, delete the last planet in the array
            - Else return a message: "No planets registered."
        - Return the updated array.
        - Invoke the function and pass the registeredPlanets array as an argument.
*/

    function deletePlanet(array){
    if(array.length !== 0){
        array.pop()
    }
    else {
        return "No Planets registered";
    }
    return array;
}
console.log(deletePlanet(registeredPlanets));
console.log(deletePlanet(registeredPlanets));
console.log(deletePlanet([]));



/*  MEMBER 2
    5. Create a function called returnNumberOfPlanets which will display the amount of registeredPlanets in our array,
        - It will receive an array as parameter
        - Check If the array is not empty:
            - If it is, return the number of registered planets.
            - Else return a message: "No planets registered."
        - Invoke the function and pass the registeredPlanets array as an argument.

*/



    // registeredPlanets = ["Mercury", "Venus", "Earth", "Mars"]
    function returnNumberOfPlanets(registeredPlanets) {
    if (registeredPlanets.length > 0) {
    return registeredPlanets.length;
    } 

    else {
        return "No planets registered.";
    }
}

    let number = returnNumberOfPlanets(registeredPlanets);
    console.log(number); 
    console.log(registeredPlanets);



/*
    6. Create a function called sortPlanets which will sort the registeredPlanets array in alphabetical order when invoked:
        - It will receive an array as parameter
        - Check If the array is not empty:
            - If the array is not empty, return the sorted array.
            - Else, return "No planets registered"
        - Invoke the function with registeredPlanets as an argument
*/
  
function sortPlanets(array) {
    if (array.length > 0) {
        return array.sort();
    } else {
        return "No planets registered";
    }
}

console.log(sortPlanets); 


// function sortPlanets(array) {
//     if (array.length > 0) {
//         array.sort();
//     } else {
//         return "No planets registered";
//     }
// }


// sortPlanets(registeredPlanets);
// console.log(registeredPlanets); // 


// console.log(sortPlanets(registeredPlanets));
// console.log(sortPlanets([]));


/* 
    7. Create a function called reversePlanets which will reverse the current order of the registeredPlanets array using reverse()
        - It will receive an array as parameter
        - Check If the array is not empty:
            - If the array is not empty, return the array in reversed order.
                - Look up the use of .reverse() in javascript arrays
            - Else, return "No planets registered"
        - Invoke the function and pass the registeredPlanets array as an argument.

*/



   function reversePlanets(array) {
    if (array.length !== 0) {
       array.reverse();
       return array;
    } else {
        return "No Planets registered";
    }
}

console.log(reversePlanets(registeredPlanets));
console.log(reversePlanets([]));

/*  MEMBER 3
    8. Create a function called unshiftPlanet which will add a planet in the registeredPlanets array using unshift().
        - It will receive an array and a planet as parameters
        - Add an if statement to check if the planet input is a string:
            - If it is, add the received planet into the array at the beginning of the array.
                - Look up the use of the unshift() method in JS Arrays
            - Else, return the string: "Incorrect Input Type"
        - Invoke the function and pass the registeredPlanets and a planet as arguments
        
*/

// registeredPlanets = ["Mercury", "Venus", "Earth", "Mars"]
function unshiftPlanet(array, planet){
    if(typeof planet == `string`){
        array.unshift(planet);
    }
    else {
        return "Incorrect Input Type";
    }
    return array;
}
console.log(unshiftPlanet(registeredPlanets, "Uranus"));
console.log(unshiftPlanet(registeredPlanets, 99));
console.log(unshiftPlanet(registeredPlanets, undefined));

/* 
    9. Create a function called shiftPlanet which will delete a planet in the registeredPlanets array using shift().
        - It will receive an array as parameter
        - If the array is not empty,
            - Use shift method to delete the first element to the array
            - Return the updated array
        - Else return "No planets registered"
        - Invoke the function and pass the registeredPlanets array as an argument
*/

function shiftPlanet(array){
    if(array.length !== 0){
        array.shift();
    }
    else {
        return "No Planets registered";
    }
    return array;
}
console.log(shiftPlanet(registeredPlanets));
console.log(shiftPlanet(registeredPlanets));
console.log(shiftPlanet([]));

/* 
    10. Create a function called splicePlanets which will  which will replace elements in the registeredPlanets array with static values using splice().
        - It will receive an array and a planet as parameters
        - Use splice() to replace an element in the array with the planet received as argument.
        - Return the array
        - Invoke the function and pass the registeredPlanets array and a planet as a parameter
*/

function splicePlanets(array, planet, index){ 
    if(array.length !== 0){
    array.splice(index,1,planet);
    }
    else {
        return "No Planets Registered"
    }
    return array;
}
console.log(splicePlanets(registeredPlanets, "Neptune", 1));

/* MEMBER 4
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


function registerAstronomer(array, name, address, age) {
    if (typeof name !== "string") {
        return "Incorrect Input Type";
    }
    if (typeof address !== "string") {
        return "Incorrect Input Type";
    }

    if (typeof age !== "number") {
        return "Incorrect Input Type";
    }

    const astronomer = {
        astronomerName: name,
        address: address,
        age: age
    };

    array.push(astronomer);
    return registeredAstronomers;
}

console.log(registerAstronomer(registeredAstronomers, "Dr. Miguel", "Quezon City", 25));
console.log(registerAstronomer(registeredAstronomers, "Dr. Jose", "Austin, TX", 45));
console.log(registerAstronomer(registeredAstronomers, null, "Austin, TX", 45));
console.log(registerAstronomer(registeredAstronomers, "Dr. Jose", undefined, 45));
console.log(registerAstronomer(registeredAstronomers, "Dr. Jo", "Austin, TX", "50"));
console.log(registeredAstronomers);

/* 
    12. Create a function called deleteAstronomer which will delete the last registered astronomer
        - It will receive an array as parameter
        - Check if the array is not empty:
            - If it is, delete the last astronomer in the array
            - Else return a message: "No astronomer registered."
        - Invoke the function and pass the registeredPlanets array as an argument.
*/

function deleteAstronomer(array){
    if (array.length !== 0) {
        array.pop();
    }
    else {
        return `No astronomer registered.`
    }
    return array;
}

/*console.log(deleteAstronomer(registeredAstronomers));
console.log(deleteAstronomer(registeredAstronomers));
console.log(deleteAstronomer(registeredAstronomers))*/;

/*  MEMBER 5

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

        let isAllNumbers = arr.every(num => typeof num === "number")

        if(isAllNumbers === false){
            return "The array does not contain all numbers."
        }

        let isAllPositiveIntegers = arr.every(num => num > 0)

        if(isAllPositiveIntegers == false){
            return "The array does not contain all positive integers."
        }

        for (i=0; i<arr.length; i++){
        if (arr[i] % 2 != 0){
        arr.splice(i, 1);
        } 

        }
        return arr;

    }

    let messageIfEmptyArr = returnEvenNumbers([]);
    console.log("Message if the array is empty:")
    console.log(messageIfEmptyArr);

    let messageIfNotAllNumbers = returnEvenNumbers([1, 2, 3, "25", 4]);
    console.log("Message if the array does not contain all number data type:")
    console.log(messageIfNotAllNumbers);


    let messageIfNotAllPositiveIntegers = returnEvenNumbers([1, 2, 3, -25, 4]);
    console.log("Message if the array does not contain all positive integers:")
    console.log(messageIfNotAllPositiveIntegers);

    let evenNumbers = returnEvenNumbers(numbers);
    console.log("Even numbers in the array:")
    console.log(evenNumbers);

    numbers = [1, 2, 3, 4, 6, 8, 9, 10, 12, 13, 20, 25];
    function findIndex(arr, num) {

        if (Array.isArray(arr) === false) {
            return "Error: First argument must be an array";
        }

        if (typeof num !== 'number') {
            return "Error: Second argument must be a number";
        }

        return arr.findIndex(n => n === num)

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