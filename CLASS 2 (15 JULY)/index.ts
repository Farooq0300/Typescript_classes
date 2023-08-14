
//let myName = " Muhammad Farooq";
/*keywords use for declaring variables
let const var
let and const are block scope we can acces them in a block
the value assign with let can be changed or intilizes multiple time.
but the value assign with const can not be changed.
and var is a globally scope we can access it any were
*/
//------------------------------------------let,var and const--------------------------------------------------
const myCity = "ISB";
var age = 25;
if(true){

    var myName = " Muhammad Farooq";
    //myName = "farooq nusrat"; //it will give us error
    const myCity = "ISB";
    var age = 25;
    age=30;
//console.log(age);its globally bcz of var
console.log(myName); 
console.log(myCity);
}
console.log(age);//its globally accessable bcz of var
//console.log(myCity); Not accessable out of block bcz of const
//console.log(myName);Not accessable out of block bcz of let


//----------------------------------------Primitaive Data Types-------------------------------------------------
/*let fatherName = "Muhammad Nusrat";//string data type
let fatherAge = 45;//Number data type
let isMarried = yes;//boolean data typp
//undefined 
let empty=null;
*/
//----------------------------------------Template leterals----------------------------------------------------
let student =`Hello Students
 my name is muhammad farooq.
 whats your name?`;
 console.log(student);

 let teacher = ` My name is  ${myName} 
 thank you` ;
console.log(teacher);
//----------------------------------------Check Data type-----------------------------------------------------
let height=6.0;
console.log(typeof height);
let weight=24.1;
console.log(typeof weight);
let schoolName = "IQRA SCIENCE SCHOOL AND COLLEGE PAHARPUR";
console.log(typeof schoolName);
//------------------------------contcatinate-----------------------------------------------------------------
//Contcatination is the joinng of string or numbers etc.
let subject="DSA";
let totalSubject=3;
console.log("My Subject  is " + subject + " And total number of subjects are " + totalSubject + " ");
console.log(`My Subject is  ${subject} and total number of subjects are  ${totalSubject}`);
//-----------------------------------------Operators-----------------------------------------------------------
//Arithemitic operators
//addition, subtraction, multiplication, Division, Modulus
//addition
let num1 = 99;
let num2 = 1;
let add_result = num1 + num2;
console.log("Addition result  is : " + add_result);
//subtraction
let num3 = 100;
let num4 = 50;
let sub_result = num3 - num4;
console.log("Subtraction result is :" + sub_result );
//Multiplaction
let num5 = 25;
let num6 = 2;
let mul_result = num5 * num6;
console.log("Multiplaction result is :" +mul_result);
//Division
let num7= 30;
let num8=2;
let Div_result = num7/num8;
console.log("Division result is :" +Div_result);
//Exponantion
let num9=3;
let num10=3;
let Exponantion_result=num9**num10;
console.log("Exponantion result is :" +Exponantion_result);
//Modeule
let num11=4;
let num12=2;
let module_result=num11%num12;
console.log("Moduls result is :" +module_result);
//Assighment Operator
let n=10;
console.log(n);//10
n+=5;
console.log(n);
n-=2;
console.log(n);
//Comparison Operator
let n1=25;
console.log(n1==25);//true
console.log(n1===5);// false//the === operator compares the values as well as the data types of the operands.
console.log(n1!=25);//false
console.log(n1>13);//true
console.log(n1<23);//false
console.log(n1>=10);//true
console.log(n1<=23);//false











