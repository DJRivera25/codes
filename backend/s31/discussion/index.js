console.log("Hello World!");
//[SECTION] OBJECT


/*let CellPhone = {
	name: `Nokia 3310`,
	manufactureDate: 1995
}*/


//Syntax:
/*
	function ObjectName(keyA, keyB){
		this.keyA = keyA;
		this.keyB = keyB;
	}
*/

// with this we can create reusable function to create several objects that have the same data structure

function CellPhone (name, manufactureDate){
	this.name = name;
	this.manufactureDate = manufactureDate;
}


//new keyword instantly create a new object following the constructors format
let myCellphone = new CellPhone("iPhone 16 pro max fully paid", 2050)
console.log(myCellphone)

let newCellphone = new CellPhone(`Samsung`, 2023);
console.log(newCellphone)

function Laptop (name, unit){
	this.name = name;
	this.unit = unit;
}

let myLaptop = new Laptop(`Acer`, `Aspire E-7`);
console.log(myLaptop);


//[Dot Notation]
//Accessing Object Property
console.log(myLaptop.name);
console.log(myLaptop.unit);

//[SECTION]

let car = {};

// This shows that we are allowed to create object property outisde the object
car.name="Honda Civic";
console.log(car);

//[SECTION] Object Methods
//Methods are function within an object. They can be accessed and invoked from an object.
//Just like real objects can do actions (like a car can start), JavaScript objects can perform actions using methods.

let person = {
	name: `John`,
	talk: function(){
		console.log(`Hello my name is ${this.name}`)
	},
	walk: function(){
	console.log(`${this.name} walked 25 steps forward`)
	}
}

person.talk();
/*person.walk = function(){
	console.log(`${this.name} walked 25 steps forward`);
}*/

person.walk();

let friend = {
	firstName: `Joe`,
	lastName: `Smith`,
	address: {
		city: `Austin`,
		country: `Texas`
	},
	emails: [`joe@gmail.com`, `joesmith@gmail.com`],
	introduce: function(){
		console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
	},
	greet: function(object){
		console.log(`Hi ${object.name}!`);
	}
}

friend.introduce();
friend.greet(person);


//Scenario
//We would like to create a game (dungeon quest )


let adventurer = {
		name: `Ezy`,
		class: `Knight`,
		level: 10,
		health: 100,
		attack: 20,
		stamina: 30,

		attackmonster: function(monster){
			monster.health -= this.attack;
			return `${this.name} dealt ${this.attack} damage to ${monster.name}`
		},

		status: function(){if (this.health==0){
			console.log(`${this.name} has been eliminated`)
		}
		else {
			console.log(`${this.name} has ${this.health} HP`)
		};
	}
}


function monster(name, level) {
	this.name = name;
	this.level = level;
	this.health = 2 * level;
	this.attack = level;

	// a method to attack the adventurer
	this.attackAdventurer = function(adventurer) {
		adventurer.health -= this.attack;
		return `${this.name} attacked ${adventurer.name} and dealth ${this.attack} damage`;
	};

	this.status = function(){if (this.health==0){
		console.log(`${this.name} has been eliminated`)
	}
	else {
		console.log(`${this.name} has ${this.health} HP`)
	};
}
}

let fenrir = new monster("Fenrir", 30);
let slime = new monster("Slime", 10);

console.log(adventurer.attackmonster(fenrir));
fenrir.status();

console.log(fenrir.attackAdventurer(adventurer));
adventurer.status();

console.log(adventurer.attackmonster(fenrir));
fenrir.status();

console.log(fenrir.attackAdventurer(adventurer));
adventurer.status();

console.log(adventurer.attackmonster(fenrir));
fenrir.status();
