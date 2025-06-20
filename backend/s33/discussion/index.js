console.log("Hello World!")

//[SECTION] JSON Objects
/*
	- JSON stands for JavaScript Object Notation which is used to store and transport data from one application to another
	- Although JSON has the word 'JavaScript' in its name, it can still be used in other programming languages
	- We have a built-in JSON object that contains methods for parsing JSON object and converting strings into Javascript objects
	
*/

// JSON Object
let sampleJSON = `
{
	"city": "Quezon City",
	"provice": "Metro Manila",
	"country": "Philippines"
}

	`

// JSON Array
let sampleJSONArray = `
	[
		{
			"city": "Quezon city",
			"province": "Metro Manila",
			"country": "Philippines"
		},

		{
			"city": "Manila City",
			"province": "Metro Manila",
			"country": "Philippines"
		},

		{
			"city": "Makati City",
			"province": "Metro Manila",
			"country": "Philippines"
		}

	]
`



console.log(`Sample JSON File: `);
console.log(sampleJSON);

console.log(`Sample JSON Array File: `);
console.log(sampleJSONArray);


//[SECTION] JSON Methods
// JSON contains methods for parsing and converting data into a stringified JSON


let batchesArray = [
	{
		batchName: 'Batch 550'
	},

	{
		batchName: ' Batch 551'
	}
];

console.log("Result from stringify method: ");
console.log(JSON.stringify(batchesArray));


let data = JSON.stringify({
	name: 'John',
	age: 31,
	address: {
		city: "Manila",
		country: "Philippines"
	}
});

console.log(data);


//Converting Stringified JSON into JS Object

let batchesJSON = `[{"batchName": "Batch 550"}, {"batchName": "Batch 551"}]`

console.log("Result from parse() method: ");

console.log(JSON.parse(batchesJSON));


let stringifiedJSON = `{
	
	"name": "John",
	"age": "31",
	"address": {
		"city": "Manila",
		"country": "Philippines"
	}
}`

console.log(JSON.parse(stringifiedJSON));