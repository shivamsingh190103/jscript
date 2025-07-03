// ✅ JavaScript Number Handling

// JavaScript is dynamically typed → it automatically detects the type
const score = 400; // JS automatically treats this as a Number (primitive)
console.log(score);           // Output: 400
console.log(typeof score);    // Output: 'number' (primitive type)

// ✅ Explicitly defining a number using Number object wrapper (not recommended for most cases)
const balance = new Number(100);
console.log(balance);         // Output: [Number: 100]
console.log(typeof balance); // Output: 'object'
// Although it holds a number, it's technically an object (wrapper object)

// ✅ toString() → Converts number to string so string methods can be used
console.log(balance.toString());         // Output: '100'
console.log(typeof balance.toString());  // Output: 'string'

// ✅ toFixed(n) → Returns string with number rounded to 'n' decimal places
console.log(balance.toFixed(2));         // Output: '100.00' for precision
// Useful for formatting currency or displaying fixed decimal numbers

// ✅ Additional Common Methods

// toLocaleString() → Formats number with commas (based on locale)
const bigNumber = 1000000;
console.log(bigNumber.toLocaleString());         // Output (in en-US): '1,000,000'
console.log(bigNumber.toLocaleString('en-IN'));  // Output (in en-IN): '10,00,000'

// valueOf() → Returns the primitive value of a Number object
console.log(balance.valueOf()); // Output: 100

// ✅ Checking if a value is a number
console.log(Number.isInteger(100));     // true
console.log(Number.isFinite(10 / 2));   // true
console.log(Number.isNaN("abc" / 3));   // true (because "abc"/3 = NaN)

// ✅ Convert string to number
const strNum = "123.45";
console.log(Number(strNum));        // 123.45 → converts string to number
console.log(parseInt(strNum));      // 123    → converts to integer only
console.log(parseFloat(strNum));    // 123.45 → keeps decimal

// ✅ Edge Cases
console.log(Number("shivam"));      // NaN → Not a Number
console.log(typeof NaN);            // 'number' (weird but true!)


// ✅ .toPrecision(n) → Formats a number to exactly 'n' significant digits
const otherNumber = 124.89004;

console.log(otherNumber.toPrecision(3)); 
// Output: "125"
// Explanation:
// - Keeps 3 total significant digits (1, 2, and 5 from "124.89004")
// - Rounds off the number as necessary
const num1 = 123.4567;

console.log(num1.toPrecision(2)); // "1.2e+2" → 2 significant digits in scientific notation
console.log(num1.toPrecision(4)); // "123.5"  → rounded to 4 significant digits
console.log(num1.toPrecision(6)); // "123.457" → full accurate representation with 6 digits


// ✅ .toLocaleString() → Converts a number to a locale-aware formatted string
const hundreds = 1000000;

console.log(hundreds.toLocaleString()); 
// Output (default is en-US): "1,000,000"
// Adds commas as thousand separators based on locale
const number = 1234567.89;

console.log(number.toLocaleString('en-US')); // "1,234,567.89" → US format
console.log(number.toLocaleString('en-IN')); // "12,34,567.89" → Indian format


const price = 99999.99;

console.log(price.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
// Output: "$99,999.99"

console.log(price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' }));
// Output: "₹99,999.99"

// ++++++++++ MATHS +++++++++++++++

// ✅ Math is a built-in object in JavaScript
// It provides properties and methods for mathematical constants and functions
console.log(Math); 
// Output: [object Math] → a global object, not a function or constructor
console.log(Math.PI);       // 3.141592653589793
console.log(Math.E);        // 2.718281828459045 (Euler's number)
console.log(Math.LN2);      // Natural log of 2

const num = 4.7;

console.log(Math.round(num));    // 5 → Rounds to nearest integer
console.log(Math.floor(num));    // 4 → Rounds down to lovest value
console.log(Math.ceil(num));     // 5 → Rounds up
console.log(Math.trunc(num));    // 4 → Removes decimal part (ignores rounding)

console.log(Math.abs(-55));         // 55 → Absolute value
console.log(Math.sqrt(49));         // 7 → Square root
console.log(Math.pow(2, 3));        // 8 → 2^3
console.log(Math.max(4, 5, 10));    // 10 → Returns the largest value
console.log(Math.min(4, 5, 10));    // 4  → Returns the smallest value

console.log(Math.random());         
// Random float between 0 and 1 (e.g., 0.5372...)
//keep changing
console.log(Math.floor(Math.random() * 10)); 
// Random integer between 0 and 9


// ✅ Generate a random integer between min and max (both inclusive)
const min = 10;
const max = 20;

const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNum); 
// Output: a random integer between 10 and 20, including both

// Math.random()           // Generates a float between 0 (inclusive) and 1 (exclusive)
// Math.random() * (max - min + 1)  
//                         // Scales it to range size — example: 0 to 11 if min=10, max=20
// Math.floor(...)         // Converts float to lower integer (rounds down)
// + min                   // Shifts the result to start from `min`
// 
// 0.734 * (20 - 10 + 1) = 0.734 * 11 = ~8.07
// Math.floor(8.07) = 8
// 8 + 10 = 18
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 6)); // Like a dice roll → Output between 1 and 6

