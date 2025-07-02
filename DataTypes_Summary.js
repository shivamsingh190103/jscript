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


// https://262.ecma-international.org/5.1/#sec-11.4.3


//+++understanding Stack and heap memory in javascript

//there are two types of memory stack memory and heap memory
//stack(primitive, means when we ask a value then its copy is created ), heap(non-Primitive refrence to original value is given)

let myName="shivam"
let anotherName=myName
anotherName="JspayProductEng"

console.log(myName)
console.log(anotherName);//here value of myName do not changed as it created a copy of myName while giving it to the anotherName, so anything changed in the anotherName will not affect my name

// using non-primituve data type 
let userOne = { //here userOne is the primitive data type thats store in stack 
    //but object is the non-primitive type take refrence to actual value in heap

    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo=userOne;
//lets change some value in object
//to change anything or access object use dot(.)
userTwo.email="shivam@google.com"
console.log(userOne)
//as we can see change in userTwo attribute changes the actual value in the userOnce from where refrence have been taken