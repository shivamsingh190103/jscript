// ++++++++++++++++
// ✅ ADVANCED ARRAY OPERATIONS (Based on MDN Docs)
// ++++++++++++++++

// ✅ 1. .push() — Adds element(s) to the end of an array
const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros); // Entire dc_heros array is pushed as one element
console.log(marvel_heros);  
// Output: [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// Accessing nested array value:
console.log(marvel_heros[3][0]); // 'superman' → marvel_heros[3] is dc_heros


// ✅ 2. .concat() — Combines arrays, returns a new array (non-mutating)
const combinedHeros = marvel_heros.concat(dc_heros);
console.log(combinedHeros);
// Output:
// [
//   'thor',
//   'ironman',
//   'spiderman',
//   [ 'superman', 'flash', 'batman' ],
//   'superman',
//   'flash',
//   'batman'
// ]
// Note: If original marvel_heros had a nested array, it will still be preserved


// ✅ 3. Spread Operator (...) — Flattens at first level and combines arrays
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);
// Output: 
// [
//   'thor',
//   'ironman',
//   'spiderman',
//   [ 'superman', 'flash', 'batman' ],
//   'superman',
//   'flash',
//   'batman'
// ]
// Spread only flattens the outermost level. Nested arrays remain nested.


// ✅ 4. .flat() — Flattens nested arrays into a single-level array
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// .flat(depth)
// - depth: how deep to flatten (default is 1)
// - use Infinity to fully flatten
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);
// Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


// ✅ 5. Array.isArray() — Checks if a value is an array
console.log(Array.isArray("Shivam")); // false → string is not an array
console.log(Array.isArray([1, 2, 3])); // true


// ✅ 6. Array.from() — Converts array-like or iterable objects to an array

console.log(Array.from("Shivam")); 
// Output: ['S', 'h', 'i', 'v', 'a', 'm'] → converts string to array of characters

console.log(Array.from({ name: "Shivam" }));
// Output: [] → returns empty array by default
// Must specify how to extract keys/values

// Example: Extract keys from object
const obj = { a: 1, b: 2 };
const keysArray = Array.from(Object.keys(obj)); // ['a', 'b']
const valuesArray = Array.from(Object.values(obj)); // [1, 2]


// ✅ 7. Array.of() — Creates an array from arguments (unlike new Array())

let score1 = 100;
let score2 = 200;
let score3 = 300;

const scoreArray = Array.of(score1, score2, score3);
console.log(scoreArray); // [100, 200, 300]

// Why Array.of()? 
// Array.of(7) → [7]
// new Array(7) → creates array with 7 empty slots → [ <7 empty items> ]

console.log(Array.of(7));       // [7]
console.log(new Array(7));      // [ <7 empty items> ]
