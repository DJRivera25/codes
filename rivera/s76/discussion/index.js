// Create a program that determines the water state (liquid, solid, or gas), accepts a single argument temperature which represents the temperature of water.

function determineWaterState(temperature){
  
    // return "I'm the output";
  
    if(typeof temperature !== "number"){
      // return undefined;
      return "Error! The temperature should be a number";
    }
  
    if(temperature < 0){ // < 0c
      return "solid";
    }
    else if(temperature <= 100){ // 0c - 100c - liquid
      return "liquid"
    }
    else{ // > 100c gas
      return "gas";
    }
}


/*
Problem #2 : Create a program that calculates the sum of all numbers up to a given number n. The function should:

- Accept a single argument n, which is the number up to which the sum should be calculated.
- Validate that n is a positive integer. If n is not a positive integer, return undefined.
- Use a loop to calculate the sum of all numbers from 1 up to and including n.
- Return the sum.
*/
			// n = 3
function sumUpToN(n){

	if(typeof n !== 'number' || n < 1 ){
		return undefined;
	}

	let sum = 0; // 3
	for(let i=1; i <= n; i++){
		sum += i;
	}


	return sum;

	/*
		SIMULATION:
		sum  i    condition             task           incremenation (i++)
		0    1	   1 <= 3 = true         sum + i = 1      2
		1    2     2 <= 3 = true         sum + i = 3      3
		3    3     3 <= 3 = true         sum + i = 6      4
		6    4     4 <= 3 = false        terminate ----------------------------
	*/

}