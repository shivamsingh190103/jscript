// array

const Arr=[0,1,2,4,5 ,true,"shivam"]

const myArr=[0,1,2,4,5]// resizable, can contain mixed data type

const myHeros=["shaktiman","nagraj"]

const myArr2=new Array(1,2,3,4)
console.log(myArr);//[ 0, 1, 2, 4, 5 ]

//Array Methods
myArr.push(6);
console.log(myArr);//[ 0, 1, 2, 4, 5, 6 ]
myArr.pop()
console.log(myArr);//[ 0, 1, 2, 4, 5 ]

myArr.unshift(9)//shift all value of element 
console.log(myArr);//[ 9, 0, 1, 2, 4, 5 ] add 9 in front starting of array
myArr.shift()
console.log(myArr);//[ 0, 1, 2, 4, 5 ] removed 9
console.log(myArr.includes(9));//false boolean
console.log(myArr.indexOf(9));//-1 as 9 is not present
console.log(myArr.indexOf(4))//3 as 4 is presentat 3rd index

const newArr=myArr.join()
console.log(myArr);//[ 0, 1, 2, 4, 5 ]
console.log(newArr);//converted to string 0,1,2,4,5



//slice, splice
console.log("A",myArr)//A [ 0, 1, 2, 4, 5 ]
const myn1=myArr.slice(1,3)
console.log(myn1);//[ 1, 2 ]
console.log("B",myArr);//B [ 0, 1, 2, 4, 5 ]

console.log("C",myArr)//C [ 0, 1, 2, 4, 5 ]
const myn2=myArr.splice(1,3)
console.log(myn2);//[ 1, 2, 4 ]
console.log("D",myArr);//D [ 0, 5 ]. here orginal array got manipulated that content got removed
  







// +++++++++++++++++++++++
// ✅ JAVASCRIPT ARRAY — DETAILED NOTES (Based on MDN Docs)
// +++++++++++++++++++++++

// ✅ WHAT IS AN ARRAY?
// An array in JavaScript is a high-level, list-like object.
// It can store multiple elements (any data type) in a single variable.

let fruits = ["apple", "banana", "cherry"]; // Array of strings
let mixed = [42, "text", true, null];       // Array with multiple types

console.log(typeof fruits);          // 'object' → Arrays are special objects
console.log(Array.isArray(fruits));  // true → Proper way to check if value is an array


// ✅ ARRAY CREATION METHODS

let emptyArr = new Array();              // []
let sizedArr = new Array(3);            // Creates array with 3 empty slots
let arrOf = Array.of(1, 2, 3);           // [1, 2, 3] → safer than new Array()
let arrFrom = Array.from("hello");      // ['h', 'e', 'l', 'l', 'o'] → converts string/iterables to array

// Create array with mapping
let squares = Array.from([1, 2, 3], x => x * x); // [1, 4, 9]


// ✅ BASIC PROPERTIES & ACCESS

console.log(fruits.length);  // 3 → Number of elements
console.log(fruits[0]);      // "apple" → Access by index
console.log(fruits[fruits.length - 1]); // Last element → "cherry"

fruits[1] = "mango";         // Replace element
console.log(fruits);         // ["apple", "mango", "cherry"]


// ✅ MUTATING METHODS (Modify the original array)

// push() – Add element at end
fruits.push("grape");

// pop() – Remove from end
fruits.pop();

// unshift() – Add to start
fruits.unshift("kiwi");

// shift() – Remove from start
fruits.shift();

console.log(fruits);


// ✅ NON-MUTATING METHODS (Return new copy)

// slice(start, end) → non-inclusive end
let part = fruits.slice(0, 2); // ["apple", "mango"]

// concat() → merges two arrays into new one
let newArr = fruits.concat(["pineapple", "pear"]);
console.log(newArr);


// ✅ DESTRUCTIVE METHOD: splice(start, deleteCount, ...items)
// Can delete, insert, or replace elements

let nums = [1, 2, 3, 4];
nums.splice(1, 2, 9, 8); // Remove 2 elements from index 1, insert 9 & 8
console.log(nums); // [1, 9, 8, 4]


// ✅ SEARCHING IN ARRAYS

console.log(fruits.includes("mango"));   // true → checks presence
console.log(fruits.indexOf("apple"));    // 0 → first index, or -1 if not found
console.log(fruits.lastIndexOf("apple"));// works from end


// ✅ ITERATION METHODS

// forEach() – performs an action on each item
fruits.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});

// map() – transforms array, returns new array
let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());

// filter() – returns array of elements that match condition
let longFruits = fruits.filter(fruit => fruit.length > 5);

// reduce() – reduces array to a single value
let totalLength = fruits.reduce((acc, val) => acc + val.length, 0);

// some() – checks if any element matches
let hasMango = fruits.some(fruit => fruit === "mango");

// every() – checks if all elements match
let allStrings = fruits.every(fruit => typeof fruit === "string");


// ✅ SORTING AND REVERSING

let numbers = [40, 5, 200, 25];
numbers.sort(); // Lexical sort → [200, 25, 40, 5] ❌
numbers.sort((a, b) => a - b); // ✅ Correct numeric ascending
numbers.sort((a, b) => b - a); // Descending

numbers.reverse(); // Reverses in place


// ✅ STRING METHODS ON ARRAYS

let joinTest = fruits.join(", "); // "apple, mango, cherry"
console.log(joinTest);

console.log(fruits.toString());   // Converts to comma-separated string


// ✅ MULTIDIMENSIONAL ARRAYS

let matrix = [
  [1, 2],
  [3, 4],
  [5, 6]
];

console.log(matrix[1][1]); // 4 → row 1, column 1


// ✅ COPY METHODS

let copied = [...fruits];       // Spread operator (shallow copy)
let sliced = fruits.slice();    // slice() also makes a shallow copy

// Emptying array
fruits.length = 0; // Clears array


// ✅ ADVANCED ARRAY METHODS

// flat() – flattens nested arrays
let nested = [1, [2, [3, 4]]];
console.log(nested.flat(2)); // [1, 2, 3, 4]

// flatMap() – map + flatten one level
let names = ["hello", "world"];
let splitLetters = names.flatMap(name => name.split("")); 
// ['h','e','l','l','o','w','o','r','l','d']


// ✅ CHECK TYPE SAFELY

console.log(Array.isArray(fruits)); // true
console.log(Array.isArray("not array")); // false


// ✅ ARRAY FROM OBJECT OR STRING

console.log(Array.from("hello")); // ['h', 'e', 'l', 'l', 'o']

// Generate array with custom values
let generated = Array.from({ length: 5 }, (_, i) => i + 1); // [1, 2, 3, 4, 5]

