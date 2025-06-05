console.log("JS FILE CONNECTED");

// MEMBER 1
function login(username, password, role){
	if (username === "" || username === undefined || password === "" || password === undefined || role === "" || role === undefined ){
		return "inputs must not be empty"
	}
		else {
			switch (role) {
			case "admin":
				return	"Welcome back to the class portal, admin!";
				break;
			case "teacher":
				return	"Thank you for logging in, teacher!";
				break;
			case "student":
				return	"Welcome to the class portal, student!";
				break;
			default:
				return "Role out of range";

			}
		}
}

/*member 1*/
console.log("login()");
console.log(login());

console.log("login( , password, admin)");
console.log(login("", "password", "admin"));

console.log("login( adminuser, , admin)");
console.log(login("adminuser", "", "admin"));

console.log("login( adminuser, password, )");
console.log(login("adminuser", "password", ""));

/*member 2*/
console.log("login( adminuser, password, admin)");
console.log(login("adminuser", "password", "admin"));

console.log("login( teacherUser, password, teacher)");
console.log(login("teacherUser", "password", "teacher"));

console.log("login( studentuser, password, student)");
console.log(login("studentUser", "password", "student"));

console.log("login( studentuser, password, carpenter)");
console.log(login("studentUser", "password", "carpenter"));

function checkAverage (num1, num2, num3, num4){
	let message;
	let average = (num1 + num2 + num3 + num4)/4;
	average = Math.round(average);

	if (average <= 74) {
		message = "Hello, student your average is " + average +"." + "The letter equivalent is F"
		return message;
	}

	else if (average >= 75 && average <= 79) {
		message = "Hello, student your average is " + average +"." + "The letter equivalent is D"
		return message;
	}

	else if (average >= 80 && average <= 84) {
		message = "Hello, student your average is " + average +"." + "The letter equivalent is C"
		return message;
	}

	else if (average >= 85 && average <= 89) {
		message = "Hello, student your average is " + average +"." + "The letter equivalent is B"
		return message;
	}

	else if (average >= 90 && average <= 95) {
		message = "Hello, student your average is " + average +"." + "The letter equivalent is A"
		return message;
	}

	else if (average >= 96) {
		message = "Hello, student your average is " + average +"." + "The letter equivalent is A+"
		return message;
	}
}

// member 3 and 4
console.log("checkAverage(71, 70, 73, 71)");
console.log(checkAverage(71, 70, 73, 71));

console.log("checkAverage(75, 75, 76, 78)");
console.log(checkAverage(75, 75, 76, 78));

console.log("checkAverage(80, 82, 83, 81)");
console.log(checkAverage(80, 82, 83, 81));

// member 5

console.log("checkAverage(85, 86, 85, 86)");
console.log(checkAverage(85, 86, 85, 86));

console.log("checkAverage(91, 90, 92, 90)");
console.log(checkAverage(91, 90, 92, 90));

console.log("checkAverage(95, 96, 97, 96)");
console.log(checkAverage(95, 96, 97, 96));


