//based on call by value, and call by reference based on how data is stored in memory and how data is accessed from the the memory
//primitive are 7 categories(call by value)orginal data is not given only copy of data is provided, recall it with swapping of numbers
//String, Number, Boolean, null(empty),undefined,Symbol for unique, BigInt stores large value
//non-Premetive(refrence type) actual refrence to data is provided
//non_Premetive data types, Array,Objects,Functions

//javasript is dynamically defined data type language, no need to mention which type of data
//tpescropt is type safed
//eg:
const score =100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null //means empty not zero
let userEmail; //store undefined

const id=Symbol('123')
const anotherId=Symbol('123')//as it give unique value
console.log(id==anotherId)//false as symbol return unique value
console.log(id)//Symbol(123)

console.log(anotherId);//Symbol(123)



//to write bigInt use n at last of big number
const bigNumber=324567819n
console.log(typeof(bigNumber));//bigint

//Refrence (Non Primitive)

//Array, Objects, Functions

const heros = ["shaktiman","bahubali","kattappa"]

//objects are declared in the curly braces
let myObj={
 name:"shivam",
 age : 22,
}
console.log(myObj);


//function declared as variable
const myFunction= function(){
    console.log("hello world");
}
console.log(typeof(myFunction));//function object
// note: all non primitive data types are function and for function itself it is function object


