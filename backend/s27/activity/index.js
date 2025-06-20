console.log(`Hello World!`);


/*Member 1*/

function printOddNumbers(number) {
	let oddNumbers = `The odd numbers found are the following:`
	for (i=0; i<= number; i++) {
		if (i % 2 == 0) {
			continue;
		}
		else if (i % 2 !== 0  ){
		console.log(`Continue and Break: ${i}`)
		oddNumbers += `${i}, `;

		}
	 	if (i>10) {
			break;
		}

		else {
			
		}
	}
	return	oddNumbers;

}
console.log(`printOddNumbers(23)`);
console.log(printOddNumbers(23));

/*Member 2*/


function generateSalt(number){
	const characters = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`;
	let salt = ``;

	for (i=0; i < number; i++){	
		let randomIndex = Math.floor(Math.random() * characters.length);
		salt += characters[randomIndex];
	}
	return salt;
}
console.log(`generateSalt(10)`);
console.log(generateSalt(10));

/*Member 3*/

function filterVowels(string){
	filteredString = ``;
	for (i=0; i < string.length; i++){
		if (string[i].toLowerCase() === 'a' || string[i].toLowerCase() === 'e' || string[i].toLowerCase() === 'i' || string[i].toLowerCase() === 'o' || string[i].toLowerCase() === 'u' ){ 
			continue;
		}
		else {
			filteredString += string[i];
		}
	}
	return filteredString;
}
console.log(`filteredVowels("JavaScript")`);
console.log(filterVowels(`JavaScript`));

/*Member 4*/

function countLetterAndStop(string) {
	let letterAcount = 0;

	for(i=0; i<string.length; i++){
		if (string[i].toLowerCase() == `a`) {
			letterAcount++;
		}

		else if(string[i].toLowerCase() == `d`) {
			break;
		}
	}
	return letterAcount;
}
console.log(`countLetterAndStop("Mama Mia")`);
console.log(countLetterAndStop(`Mama Mia`));

console.log(`countLetterAndStop("Lambda")`);
console.log(countLetterAndStop(`Lambda`));

console.log(`countLetterAndStop("Dancing Queen")`);
console.log(countLetterAndStop(`Dancing Queen`));



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

  if(typeof pw !== "string" || pw === "") {
    return "Password must be a string and not empty";
  }

  if(typeof confirmPassword !== "string" && confirmPassword === ""){
    return "Confirm password must be a string and not empty";
  }

  if(typeof mobileNum !== "string" || mobileNum === ""){
    return "Mobile number must be a string and not empty";
  }

  //return message if mobileNum length is not equal to 11.
  if(mobileNum.length !== 11){
    return "Mobile number must be 11 digits long";
  }

  //return message if password and confirmPassword does not match
  if(pw !== confirmPassword){
    return "Password and confirm password must match";
  }

  //return user object
  return {

    firstName: firstName,
    lastName: lastName,
    email: email,
    password: pw,
    mobileNum: mobileNum

  }
}

let newUser = register("Nayeon","Im","nayeonie@gmail.com","nayeonnie21","nayeonnie21", "09266771400");
console.log(newUser);


function printPattern(rows) {
  let pattern = "";
  for (let i = 0; i < rows; i++) {
      pattern += "*";
      console.log(pattern);
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
