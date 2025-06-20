console.log(`Connected to index.HTML`);

/* 
Problem #1: create a program that determines the temperature of water, where it accepts a single argument which is the temperature, which represents the temperature of the water in degree celcius.

requirements:
what should the function do?
- determine the temperature of the water

what is/are the limitation(s) or constraint(s)?
- single argument(temperature)
- Data type should be a number

expected result:
- degree celcuis of water
- state of the water
*/

function determineWaterState(temperature) {
  if (typeof temperature !== "number") {
    console.log(`input must be a number/temperature`);
    return undefined;
  }

  if (temperature <= 0) {
    return `ice/solid`;
  } else if (temperature >= 100) {
    return `boiling/vaporize`;
  } else {
    return `normal/liquid`;
  }
}

console.log(determineWaterState(0));
console.log(determineWaterState(30));
console.log(determineWaterState(100));
