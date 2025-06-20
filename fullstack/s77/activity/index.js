// Question #1: Create a program that calculate the total order amount.
// Input should be an array, if not an array, return undefined.

//calculateTotalAmount([150,200,400,100]) Output: 850

function calculateTotalAmount(orderAmounts) {
  let isArray = Array.isArray(orderAmounts);
  if (!isArray) {
    return undefined;
  }
  let total = orderAmounts.reduce((sum, num) => sum + num, 0);
  return total;
}

console.log(calculateTotalAmount([150, 200, 400, 100]));
// console.log(calculateTotalAmount([150, 200, 300, 100]));
// console.log(calculateTotalAmount(100));

// Question #2: Create a program that takes an array of blog post titles and a keyword.
// The search should be case-insensitive.
// Return undefined if the inputs are not of the expected data types

//filterTitlesByKeyword(["Java 101","Python 101","Javascript 101"],"java") Output: ["Java 101","Javascript 101"]

function filterTitlesByKeyword(titles, keyword) {
  let isArray = Array.isArray(titles);
  let isString = typeof keyword === "string";
  //   console.log(`titles isArray`, isArray);
  //   console.log(`keyword isString`, isString);

  if (!isArray || !isString) {
    console.log(`titles should be array and keyword should be string`);
    return undefined;
  }
  let filteredTitles = titles.filter((title) => {
    return title.toLowerCase().includes(keyword.toLowerCase());
  });
  //   console.log(`filteredTitles`, filteredTitles);
  if (filteredTitles.length === 0) {
    return "No matching titles found.";
  } else {
    return filteredTitles;
  }
}
console.log(filterTitlesByKeyword(["Java 101", "Python 101", "Javascript 101"], "java"));
// console.log(filterTitlesByKeyword(["Bootstrap 101", "Bootsmash 101", "bothleg 101"], "bootstrap"));
// console.log(filterTitlesByKeyword(["Bootstrap 101", "Bootsmash 101", "bothleg 101"], 2));

// Question #3: Create a program that takes an array of usernames and returns a new array.
// Return undefined if the input is not an array.
// All array elements should be a string.
// Each username's first letter should be capitalized and prefixed by "User:".

//formatUsernames(["miguel106","moonnight","biniFan101"]) Output: ["Java 101","Javascript 101"] Output ['User: Miguel106', 'User: Moonnight', 'User: BiniFan101']

function formatUsernames(usernames) {
  let isArray = Array.isArray(usernames);
  if (!isArray) {
    return undefined;
  }
  const isElementString = usernames.every((e) => typeof e === "string");
  if (!isElementString) {
    console.log("All array elements should be string");
    return undefined;
  }

  let formatted = usernames.map((e) => {
    return `User: ${e.charAt(0).toUpperCase() + e.slice(1)}`;
  });
  return formatted;
}
console.log(formatUsernames(["miguel106", "moonnight", "biniFan101"]));
// console.log(formatUsernames([1, "moonnight", "biniFan101"]));

// Question #4: Create a program that returns a sorted merged list of unique delivery dates
// Validate both inpus are arrays and contain only integers, if not return undefined

//optimizeDeliverySchedule([2004,2005,2001],[1991,1992,1993]) Output: [1991, 1992, 1993, 2001, 2004, 2005]

function optimizeDeliverySchedule(datesWarehouse1, datesWarehouse2) {
  let isArray1 = Array.isArray(datesWarehouse1);
  let isArray2 = Array.isArray(datesWarehouse2);

  if (!isArray1 || !isArray2) {
    console.log(`list of dates should be array`);
    return undefined;
  }

  let mergedSortedDates = datesWarehouse1.concat(datesWarehouse2).sort((a, b) => a - b);
  return mergedSortedDates;
}
console.log(optimizeDeliverySchedule([2004, 2005, 2001], [1991, 1992, 1993]));

// Question #5: Develop a program that removes all scores that are below a certain threshold.
// Calculate the average of the remaining scores.
// Validate that the array is comprised of integers.
// Return the average score rounded to two decimal places.
// If after filtering there are no scores left or the input is invalid, return undefined

//removeLowScoresAndCalculateAverage([91,85,72,73,75], 75) Output: 83.67

function removeLowScoresAndCalculateAverage(scores, threshold) {
  let isArray = Array.isArray(scores);
  if (!isArray) {
    return undefined;
  }
  let isElementInteger = scores.every((e) => typeof e === "number");
  if (!isElementInteger) {
    console.log(`all array elements should be integers`);
    return undefined;
  }
  let filteredScores = scores.filter((e) => {
    return e >= threshold;
  });
  let average = filteredScores.reduce((sum, score) => sum + score) / filteredScores.length;
  return average;
}
console.log(removeLowScoresAndCalculateAverage([91, 85, 72, 73, 75], 75));
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
