//data type must be same for comparison for consistency
 //the reason is that an equality check == and comparisons > < >= <= work differently
 //comparison convert null to a number ,treating it as 0
 // thats why(3 null>=0)is true and (1) null>0 is false
 
 console.log(null>0)//false nan or zero 
 console.log(null==0);//false
 console.log(null>=0);//true
 


 console.log(undefined>0)//false
 console.log(undefined==0);//false
 console.log(undefined>=0);//false



 //=== strictly check both value and its datatype
 console.log(2=="2"); //true // because it converted value and then checked

 console.log(2==="2");//false because it checks its values as well
 
 
 
 
 