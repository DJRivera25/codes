console.log ("JS FILE CONNECTED");

let num	= -1; 

if (num < 0){
	console.log("The number is a negative number.");	
}

let numA = 1;

if (numA < 0) {
	console.log("The number is a negative number.");
}
else if (numA > 0){
	console.log("The number is a positive number.");
}

else if (numA == 0){
	console.log("The number is zero");
}



let numB = 0;

if(numB < 0){ // false
	console.log("The number is a negative number.");	
}
else if(numB > 0){ // true
	console.log("The number is a positive number.");
}
else{
	console.log("The number is zero");
}



let numC = "A";

if(numC < 0){ // false
	console.log("The number is a negative number.");	
}
else if(numC > 0){ // true
	console.log("The number is a positive number.");
}
else if(numC == 0){
	console.log("The number is zero");
}
else{
	console.log("The provided input is not a number")
}

let message = "No message";

function detertmineTyphoonIntensity(windSpeed){

	if(windSpeed < 30){
		return "Not a typhoon yet."
	}
	else if(windSpeed <= 61){	
		return "Tropical depression detected";
	}
	else if(windSpeed >= 62 && windSpeed <= 88){
		return "Tropical storm detected";
	}
	else if(windSpeed >= 89 && windSpeed <= 117){
		return "Severe tropical storm detected";
	}
	else{
		return "Typhoon detected.";
	}

}

message = detertmineTyphoonIntensity(69);
if(message == "Tropical storm detected"){
	console.warn(message);
}

// Truthy and Falsy
if(true){ // true
	console.log("Truthy")
}

if(1){ // true
	console.log("Truthy");
}

if({}){
	console.log("Truthy")
}



if(false){ // false
	console.log("Truthy");
}

if(0){ // false
	console.log("Truthy");
}

if(undefined){ //false
	console.log("Truthy");
}

if(null) { //false
	console.log("Truthy");
}


let ternaryResult = (1 < 18) ? true : false;
console.log("Result of Ternary Operator: " + ternaryResult)


let name;

function isLegalOfAge(){
	name = "John"
	return "You are of the legal age limit";
}


function isUnderAge(){
	name = "Jane";
	return "You are under the age limit";
}

let age = 12;
let legalAge = (age > 18) ? isLegalOfAge() : isUnderAge();
console.log("Result of Ternary operator in functions: " + legalAge + ', ' + name);

function showIntensityAlert(windSpeed){
	try{	

		alerat(detertmineTyphoonIntensity(windSpeed))
	}
	catch(error){
		// console.log(typeof error);
		console.warn(error); //***WIDELY USED**
		// console.warn(error.message);
	}
	finally{
		alert("Intensity update will show new alert")d
	}
}

showIntensityAlert(56);