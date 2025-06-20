// Question #1: Create a program that calculate the total order amount.
// Input should be an array, if not an array, return undefined.

//calculateTotalAmount([150,200,400,100]) Output: 850

function calculateTotalAmount(orderAmounts) {
  isArray = Array.isArray(orderAmounts);
  if (!isArray) {
    return undefined;
  }
  orderAmounts.reduce((sum, num) => sum + num, 0);
}
console.log(calculateTotalAmount([150, 200, 400, 100]));

// Question #2: Create a program that takes an array of blog post titles and a keyword.
// The search should be case-insensitive.
// Return undefined if the inputs are not of the expected data types

//filterTitlesByKeyword(["Java 101","Python 101","Javascript 101"],"java") Output: ["Java 101","Javascript 101"]

function filterTitlesByKeyword(titles, keyword) {}

// Question #3: Create a program that takes an array of usernames and returns a new array.
// Return undefined if the input is not an array.
// All array elements should be a string.
// Each username's first letter should be capitalized and prefixed by "User:".

//formatUsernames(["miguel106","moonnight","biniFan101"]) Output: ["Java 101","Javascript 101"] Output ['User: Miguel106', 'User: Moonnight', 'User: BiniFan101']

function formatUsernames(usernames) {}

// Question #4: Create a program that returns a sorted merged list of unique delivery dates
// Validate both inpus are arrays and contain only integers, if not return undefined

//optimizeDeliverySchedule([2004,2005,2001],[1991,1992,1993]) Output: [1991, 1992, 1993, 2001, 2004, 2005]

function optimizeDeliverySchedule(datesWarehouse1, datesWarehouse2) {}

// Question #5: Develop a program that removes all scores that are below a certain threshold.
// Calculate the average of the remaining scores.
// Validate that the array is comprised of integers.
// Return the average score rounded to two decimal places.
// If after filtering there are no scores left or the input is invalid, return undefined

//removeLowScoresAndCalculateAverage([91,85,72,73,75], 75) Output: 83.67

function removeLowScoresAndCalculateAverage(scores, threshold) {}

//Do not modify
//For exporting to test.js
//Note: Do not change any variable and function names. All variables and functions to be checked are listed in the exports.
try {
  module.exports = {
    calculateTotalAmount: typeof calculateTotalAmount !== "undefined" ? calculateTotalAmount : null,
    filterTitlesByKeyword: typeof filterTitlesByKeyword !== "undefined" ? filterTitlesByKeyword : null,
    formatUsernames: typeof formatUsernames !== "undefined" ? formatUsernames : null,
    optimizeDeliverySchedule: typeof optimizeDeliverySchedule !== "undefined" ? optimizeDeliverySchedule : null,
    removeLowScoresAndCalculateAverage:
      typeof removeLowScoresAndCalculateAverage !== "undefined" ? removeLowScoresAndCalculateAverage : null,
  };
} catch (err) {}
