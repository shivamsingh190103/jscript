// ++++++++++++++++++++++++++++++
// ✅ OBJECTS, SYMBOLS & METHODS (Based on MDN Docs)
// ++++++++++++++++++++++++++++++

// ✅ SINGLETON VS OBJECT LITERAL

// If you use `Object.create()` → it creates a **singleton object**
// It uses the constructor function under the hood

// Object Literal Syntax (Most Common)
const Jsuser = {
  name: "hitesh",
  age: 18,
  email: "shivam@gmail.com",
  "full name": "shivam singh",
  lastLoginDays: ["monday", "saturday"]
};

// ✅ SYMBOL AS OBJECT KEY

const mySym = Symbol("key1"); // creates a unique symbol with description "key1"

// Add symbol-keyed property using computed property syntax:
Jsuser[mySym] = "myKey1";

// Regular keys are stored as strings by default
// Symbol keys are not visible in Object.keys(), for..in, etc.

console.log(typeof mySym); // "symbol"
console.log(Jsuser[mySym]); // "myKey1"

// ✅ ACCESSING OBJECT PROPERTIES

console.log(Jsuser.email);         // dot notation
console.log(Jsuser["email"]);      // bracket notation
console.log(Jsuser["full name"]);  // bracket required for multi-word keys

// Bracket notation is required when:
// - the key has spaces
// - you're using a variable or Symbol as key


// ✅ MODIFYING OBJECT PROPERTIES

Jsuser.email = "chatgpt.com";
Jsuser.email = "shivamceoofdeepmind.com";

console.log(Jsuser); // email is updated


// ✅ FREEZING AN OBJECT

// Object.freeze() makes an object **immutable**
// No property can be added, removed, or updated

// Object.freeze(Jsuser);
// Jsuser.email = "hack.com";  // ❌ won't update
// console.log(Jsuser.email);  // remains the same


// ✅ ADDING METHODS TO OBJECTS

// Adding a method (function) to the object
Jsuser.greeting = function () {
  console.log("Hello JS User");
};

console.log(Jsuser.greeting);   // Logs the function definition
Jsuser.greeting();              // Logs "Hello JS User"


// ✅ USING `this` KEYWORD IN OBJECT METHODS

// `this` refers to the object in which the method is being called
Jsuser.greeting = function () {
  console.log(`Hello JS User, ${this.name}`);
};

Jsuser.greeting();  // Output: Hello JS User, hitesh


// ✅ KEY TAKEAWAYS FROM MDN:

/*
- Object literals are used to define collections of key-value pairs.
- Symbol keys allow you to create unique hidden properties.
- Object.freeze() prevents further modifications.
- Methods can be added directly to objects.
- `this` inside a method refers to the object the method is called on.
- Use bracket notation when:
   - key has special characters/spaces
   - key is stored in a variable (e.g., Symbol or dynamic key)
*/


// ✅ EXTRA TIPS

// Listing all keys including symbol keys
console.log(Object.getOwnPropertySymbols(Jsuser)); // [ Symbol(key1) ]

// Check if object has a key
console.log(Jsuser.hasOwnProperty("email")); // true

// Looping (Note: symbols will not appear)
for (let key in Jsuser) {
  if (typeof Jsuser[key] !== "function") {
    console.log(`${key}: ${Jsuser[key]}`);
  }
}
