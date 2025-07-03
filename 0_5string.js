//string can be declared in both single and double quote ,'', ""
const name="shivam "
const repoCount =50

//to concatenate use "+"
console.log(name+repoCount);

//alternatively se backtick `` and then ${ } as placeholder to put values
//ealiy like upppercase lowercase method can be used
console.log(`hello my name is ${name} and my github repo count is ${repoCount}`)



//declaring string through object method
const gameName=new String('marval')

console.log(gameName[0]);//gives key value pair according to indexing

console.log(gameName.__proto__);//{} return objects
//can be used to call various methods
console.log(gameName.length)//6
console.log(gameName.toUpperCase());//MARVAL but orginal gameName not updated as changes has been done on copy
console.log(gameName);
//checking at what index which char is present
console.log(gameName.charAt(2));//r
console.log(gameName.indexOf('m'));//0 tell about the charecter present at zero index


//crearting a substring using slicing .substring(start,end) end is excluded
const newString=gameName.substring(0,4)// marv
console.log(newString)//marv
// Positive Indexing
const posSlice = gameName.slice(1, 4); 
// Takes characters from index 1 to index 3 (4 is excluded)
// That means: 'a', 'r', 'v'
console.log(posSlice); // Output: "arv"

// Negative Indexing
const negSlice = gameName.slice(-4, -1);
// Negative index -4 is same as index 2 ('r')
// Negative index -1 is same as index 5 ('l'), but it's excluded
// So this takes: index 2 to index 4 → 'r', 'v', 'a'
console.log(negSlice); // Output: "rva"

// Using only negative start index
const lastThree = gameName.slice(-3);
// This means: from 3rd-last character to end
// That’s: 'v', 'a', 'l'
console.log(lastThree); // Output: "val"

// Original string with leading and trailing spaces
const newStringOne = "  shivam  ";

console.log(newStringOne); 
// Output: "  shivam  "
// Includes the spaces before and after "shivam"

// .trim() removes whitespace from both **start and end** of the string
console.log(newStringOne.trim()); 
// Output: "shivam" (no spaces before or after)
//It does not remove spaces in the middle of the string.
const str = "   hello   ";
console.log(str.trimStart()); // "hello   "
console.log(str.trimEnd());   // "   hello"




// %20 is the URL-encoded form of a space.
// replace(searchValue, replaceValue) replaces only the first match.
// If you want to replace all occurrences of %20, use regular expression with global flag:
const url = "https://shivam%20profile%20github";
const updatedUrl = url.replace(/%20/g, '-');
console.log(updatedUrl);
// Output: "https://shivam-profile-github"
//as jS automatically introduced %20 in place of space
//so we have to remove like this

//check is something is present in string
console.log(url.includes('shivam'))//true

//split example
 //Example 1: Split full name by space
const fullName = "Shivam Singh";
const nameParts = fullName.split(' ');
console.log("Split by space:", nameParts); 
// Output: [ 'Shivam', 'Singh' ]
// nameParts[0] = 'Shivam', nameParts[1] = 'Singh'

//Example 2: Split a comma-separated string
const fruitsData = "apple,banana,grape";
const fruits = fruitsData.split(',');
console.log("Split by comma:", fruits); 
// Output: [ 'apple', 'banana', 'grape' ]

//Example 3: Split a string using a limit
const location = "Shivam-Singh-India";
const limitedParts = location.split('-', 2);
console.log("Split with limit 2:", limitedParts); 
// Output: [ 'Shivam', 'Singh' ]
// Only first 2 parts are returned

//Example 4: Split into characters
const word = "code";
const letters = word.split('');
console.log("Split into characters:", letters); 
// Output: [ 'c', 'o', 'd', 'e' ]




const text = "Hello JavaScript learners";

// 🔹 startsWith() – checks if string starts with specified text
console.log(text.startsWith("Hello")); // true

// 🔹 endsWith() – checks if string ends with specified text
console.log(text.endsWith("learners")); // true

// 🔹 includes() – checks if substring exists
console.log(text.includes("Script")); // true

// 🔹 repeat() – repeats the string n times
const repeated = "ha".repeat(3);
console.log(repeated); // Output: "hahaha"

// 🔹 replaceAll() – replaces **all** occurrences of a substring
const dirtyString = "apple#banana#grape";
const cleaned = dirtyString.replaceAll("#", ", ");
console.log(cleaned); // "apple, banana, grape"

// 🔹 padStart() – pads the string from the beginning
const id = "7";
console.log(id.padStart(3, "0")); // "007"

// 🔹 padEnd() – pads the string at the end
const label = "JS";
console.log(label.padEnd(5, ".")); // "JS..."

// 🔹 toLowerCase() and toUpperCase()
console.log("ShIvAm".toLowerCase()); // "shivam"
console.log("ShIvAm".toUpperCase()); // "SHIVAM"

// 🔹 concat() – joins strings (alternative to +)
const first = "Hello";
const second = "World";
console.log(first.concat(" ", second)); // "Hello World"

// 🔹 localeCompare() – compares strings based on locale (lexical ordering)
console.log("a".localeCompare("b")); // -1 (a < b)
console.log("b".localeCompare("a")); // 1  (b > a)
console.log("a".localeCompare("a")); // 0  (equal)

// 🔹 Accessing characters (like array)
const myname = "Shivam";
console.log(myname[1]); // 'h'

// 🔹 String interpolation can include expressions:
const a = 5, b = 10;
console.log(`The sum of ${a} and ${b} is ${a + b}`);
// Output: The sum of 5 and 10 is 15




// Method	Description
// slice()	Extracts part of string
// substring()	Similar to slice but no negative indexes
// trim()	Removes leading and trailing whitespace
// toUpperCase()	Converts to uppercase
// toLowerCase()	Converts to lowercase
// charAt(index)	Returns character at given index
// indexOf()	Returns index of first match
// includes()	Checks if substring exists
// startsWith()	Checks if string starts with given text
// endsWith()	Checks if string ends with given text
// replace()	Replaces first match
// replaceAll()	Replaces all matches
// split()	Splits string into array
// repeat()	Repeats string
// padStart()	Pads start with specified chars
// padEnd()	Pads end with specified chars
// concat()	Combines multiple strings
// localeCompare()	Compares two strings lexically

