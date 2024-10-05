// Types Of Operator
// Arithmetic operators
// Assignment operators
// Comparison operators
// Logical operators
// conversion with console.log and innerHTML

// arithmetic operators

let a = 9;
let b = 4;

console.log(a + b); //addition
console.log(a - b); //subtraction
console.log(a * b); //multiplication
console.log(a / b); // division //output : 2
console.log(a ** 3); //exponentiation
console.log(a % b); // modulus //output:1

//prefix

const newValue = ++a;
console.log(newValue); //output: 10
console.log(++a); // output 11
//postfix

b = 4;
let newValue2 = b++; //4  //b=5
console.log(newValue2); //output: 4
console.log(b++); //output 5  //  b ++=6
console.log(b); //output 6

console.log(newValue2, b);

// Assignment operators

let c = 10; // normal assign
let num1 = 2;
num1 += 5; //  num1 = num1 + 5 // output 7

num1 -= 1; //ouput 6
console.log(num1);

num1 *= 3; //output 18
console.log(num1);

num1 /= 3; //ouput 6

console.log(num1);
num1 %= 2; //output  0
console.log(num1);

num1 = 3;

num1 **= 3; //output 27
console.log(num1);

// Comparison operators

let num2 = "7"; //string
let num3 = 7; // number
//! not  point
console.log(num2 == num3); // both are equal or not //output true
console.log(num2 != num3); //not equal  output false
console.log(num2 > num3); //greater than ouput false
console.log(num2 < num3); // smaller than ouput false
console.log(num2 >= num3); //greater than equal output true
console.log(num2 <= num3); // smaller than equal output true

console.log(num2 === num3, "==="); //false //strickly
console.log(num2 !== num3, "!=="); // true

//Logical operators
// || OR return true value
// &&  AND return false value

console.log(45 < 87 && 67 > 5 && 8 > 7); //output false
console.log(4 > 1 && 0 && 1 && 1); // false = 0

console.log(5 < 1 || 2 || 1 > 12 || 0 || 0 || 2); //output 2

// conversion with console.log and innerHTML
// Number
// String
// Boolean

let numStr = "123";
console.log(typeof numStr); //string
let newNUmber = Number(numStr); //Number()

console.log(typeof newNUmber); //number
console.log(typeof numStr);

let num4str = "asd";
// num4str= true,false
let newNum4str = Number(num4str);
console.log(newNum4str, "output"); //NaN not a number

let num5 = false; //boolean value true and false
console.log(typeof typeof typeof num5, "boolean output")// boolean
let strNum5 = String(num5);
console.log(strNum5);
console.log(typeof strNum5); // string

let num6 = 0;
num6 = -1;
let num6NewValue = Boolean(num6); //false

console.log(num6NewValue);
console.log(typeof num6NewValue); // boolean

//implicit and explicit

console.log(false < true); // true

// concatenate
console.log(1 + 1 + "23" + 1); //11231  //2231
console.log(5 - "2");// 3

// || && // && is first priority to solve
console.log(((12 || false) && 5 > 6) || (27 < 0 && 27)); //  12 ||false|| false
// 12 && false && 27

let valueStr = "asd";

let newNumValue2 = Number(valueStr);
console.log(newNumValue2); //NaN not a number


console.log(12<5 || 5<6 && 23==24 || 76>5 && 0) 

// 12<5 ||false|| 0

console.log(!!!true)

