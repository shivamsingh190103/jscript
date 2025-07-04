let score="33" 

console.log(typeof(score));//string 
 
let valueInNumber=Number(score) //use data type in capital leters
//type cast values
console.log(typeof valueInNumber)


//case 2:
let Score="33abc" //it is not a number 

console.log(typeof(score));//string 
 
let ValueInNumber=Number(Score) //use data type in capital leters
//but when type cast values then converted into the number but how 33abc can be number
console.log(typeof ValueInNumber)
console.log(ValueInNumber);// NaN not a number hence take care of this 
//for undefined data type  conversion gives the NaN
//for null it gives 0 
//if string cannot be converted into number it give NaN
//null give 0
//but NAN type is number


//case-3 
let isloggedIn=1;//number
let booleanisLoggedIn=Boolean(isloggedIn)
console.log(booleanisLoggedIn)//true
//1 ==> true;
//0 ==> false;
//""==> false ;
//"anything"==> true, even whitespace will give true



//case-4 
let someNumber=33//number 

let stringNumber= String(someNumber)//typecast into the string
console.log(stringNumber);//33
console.log(typeof(stringNumber))//string





//*****operations****/
let value=3
let negValue=-value
console.log(negValue)//-3


let str1="hello"
let str2="shivam"
let str3=str1+str2
console.log(str3);



//dont rely on this ,can be fatal
console.log("1"+2)
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");
console.log(typeof(1+2+"2"));

console.log(+true);//1
console.log(+"");// 0

let num1,num2,num3

num1=num2=num3=2+2
console.table({num1,num2,num3});

let gameCounter=100
gameCounter++;
console.log(gameCounter);//101
