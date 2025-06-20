// console.log("Hello World");

/* Member 1 */
/* printOddNumbers() */
/* 
    Create a JavaScript Function called printOddNumbers that takes in a number as an input and uses loops to output only odd numbers
      - Create a variable called oddNumbers with a string value of "The odd numbers found are the following: "
        - Look up Continue and Break Statements to be able to complete the output for this activity.
      - The loop should print numbers based on the given value.
      - Create an if statement to check if the number iterated is an even number.
        - If it is, use the continue statement to skip the loop to the next iteration.
        - Else If the current number is odd, concatenate the number to the oddNumbers variable to create a string with the initial value and the odd numbers found.
      - Create another if statement to check if the current value being looped/iterated is greater than 10.
        - If it is, use the break statement to stop the loop.
      - Once the loop is complete, return the variable oddNumbers.
*/



/* Member 2 */
/* generateSalt() */
/* 
      Create a JavaScript function called generateSalt that takes a number as input.
      - Define a constant variable named characters that contains all the characters that can be used in the salt. This includes      
        uppercase letters, lowercase letters, and digits.
      - Inside the function, create an empty string variable named salt to store the generated salt.
      - Use a for loop to generate the salt.
        - The loop should run a number of times based on the given number input.
      - Create a variable called randomIndex
        - Generate a random number e between 0 and the length of the characters string minus 1 using Math.random() and Math.floor() and save it to the randomIndex variable.
        - Research the use of Math.floor and Math.random
      - Use the randomIndex to select a character from the characters string and add the selected character to the salt string.
      - Return the generated salt string
*/



/* Member 3 */
/* filterVowels() */
/* 
    Create a function called filterVowels. It should be able receive a string
    - Inside the function, create a variable called filteredString with an empty string as initial value.
    - Add a for Loop that will iterate through the individual letters of the given string variable based on it’s length.
    - In the loop, add an if statement that will check if the letter of the string is a vowel.
      - If it is, using continue, skip to the next iteration of the loop.
      - Else, add the current letter being looped to the given filteredString variable.
    - Outside the loop, return the filteredString variable.

*/



/* Member 4 */
/* countLetterAndStop */
/* 
    Create a function called countLetterAndStop which will input a string which will return the total number of letter “a” found in the string but stop if the current letter is "d".
      - Inside the function, create a variable called letterACount which will have a value of 0 that will be used to track the number of letter "a"s found in the string.
      - Add for loop that will iterate through the length of the string.
        - Inside the loop, create an if statement that will check if the current letter in the string is equal to "a". 
          - If it is, increment the value of the variable letterACount by 1.
          - Else if, the current letter in the string is equal to "d", stop the loop using the break statement
      - Outside the loop, return the letterACount variable.


*/


/* Member 5 */
/* 
	6. Debug the following code to allow the functions to properly receive and return the correct values and mimic the output.
		- Check syntax of the following code.
		- Check if value is returned.
		- Check the parameters and arguments.
    - Check the if else statements
    - Check the loop statements
*/

function register(firstName,lastName,email,pw,confirmPassword,mobileNum,address,city,country){

  //returns messages if any of the parameters is not a string or is empty

  if(typeof firstName !== "string" || firstName === ""){
    return "First name must be a string and not empty";
  }

  if(typeof lastName !== "string" || lastName === ""){
    return "Last name must be a string and not empty";
  }

  if(typeof email !== "string" || email === ""){
    return "Email must be a string and not empty";
  }

  if(typeof password !== "string" || password === "") => {
    return "Password must be a string and not empty";
  }

  if(typeOf confirmPassword !== "string" && confirmPassword === ""){
    return "Confirm password must be a string and not empty";
  }

  if(typeof mobileNum !== "string" !! mobileNum === ""){
    return "Mobile number must be a string and not empty";
  }

  //return message if mobileNum length is not equal to 11.
  if(mobileNum.length !!== 11){
    return "Mobile number must be 11 digits long";
  }

  //return message if password and confirmPassword does not match
  if(password = confirmPassword){
    return "Password and confirm password must match";
  }

  //return user object
  return {

    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    mobileNum: mobileNo

  }
}

let newUser = register("Nayeon","Im","nayeonie@gmail.com","nayeonnie21","Nayeonnie21","+63251212401");
console.log(newUser);


function printPattern(rows) {
  let pattern != "";
  for (let i = 0; i < rows; i++) {
      pattern +== "*";
      consolelog(pattern);
  }
}

printPattern(5);


//Do not modify
//For exporting to test.js
try{
    module.exports = {
      printOddNumbers: typeof printOddNumbers !== 'undefined' ? printOddNumbers : null,
      filterVowels: typeof filterVowels !== 'undefined' ? filterVowels : null,
      generateSalt: typeof generateSalt !== 'undefined' ? generateSalt : null,
      countLetterAndStop: typeof countLetterAndStop !== 'undefined' ? countLetterAndStop : null,
      register: typeof register !== 'undefined' ? register : null,
      printPattern: typeof printPattern !== 'undefined' ? printPattern : null
    }
} catch(err){

}