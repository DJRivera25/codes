// Select input fields and display spans/buttons by their IDs
const firstName = document.getElementById("txt-first-name");
const lastName = document.getElementById("txt-last-name");
const fullName = document.getElementById("span-full-name");

const countFirst = document.getElementById("count-first-name");
const countLast = document.getElementById("count-last-name");

const btnClear = document.getElementById("btn-clear");
const btnToggle = document.getElementById("btn-toggle-case");

const validationMessage = document.getElementById("validation-message");

// Boolean flag to track if full name should be uppercase or lowercase
let isUpperCase = false;

/**
 * Updates the full name display, character counts,
 * and validation message based on current input values.
 */
function updateFullName() {
  const first = firstName.value;
  const last = lastName.value;

  // Combine first and last names with a space, trimming extra spaces
  let combined = `${first} ${last}`.trim();

  // Display full name in uppercase or lowercase depending on toggle state
  fullName.textContent = isUpperCase ? combined.toUpperCase() : combined.toLowerCase();

  // Update live character counts below each input field
  countFirst.textContent = `Characters: ${first.length}`;
  countLast.textContent = `Characters: ${last.length}`;

  // Show validation warning if either input is empty
  if (!first || !last) {
    validationMessage.textContent = "Both first and last names are required.";
  } else {
    // Clear validation message if both inputs have values
    validationMessage.textContent = "";
  }
}

/**
 * Clears input fields, resets display and counters,
 * clears validation messages, and resets case toggle.
 */
function clearInputs() {
  firstName.value = "";
  lastName.value = "";
  fullName.textContent = "";
  countFirst.textContent = "";
  countLast.textContent = "";
  validationMessage.textContent = "";
  isUpperCase = false;
}

/**
 * Toggles the case state for the full name display
 * and updates the full name accordingly.
 */
function toggleCase() {
  isUpperCase = !isUpperCase;
  updateFullName();
}

// Attach event listeners to input fields for real-time updates
firstName.addEventListener("input", updateFullName);
lastName.addEventListener("input", updateFullName);

// Attach event listener to Clear button to reset form and display
btnClear.addEventListener("click", clearInputs);

// Attach event listener to Toggle Case button to switch uppercase/lowercase display
btnToggle.addEventListener("click", toggleCase);
