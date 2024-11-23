// what is variables understanding data types declaring and initialization variables

// let const var

let games = "pubg";

console.log(games); // output pubg

// Types Of Operator
// Arithmetic operators
// Assignment operators
// Comparison operators
// Logical operators
// conversion with console.log and innerHTML

// Arithmetic operators
//addiition  +
//substraction  -
//multiplication  *
//division    /
//exponentiation  **
// modulus   %

let value1 = 45;
let value2 = 5;

console.log(value1 + value2);
console.log(12 + 78);

console.log(12 * 4);
console.log(123 * 4);

console.log(value1 / value2);

console.log(2 ** 3);
console.log(3 ** 3);

console.log(67 % 3);

// Assignment operators
//=
//+=
//-=
//*=
// /=
// %=
// **=
let subject = "javscript";

let sum = 10;

// sum = sum + 40;
sum += 40;
console.log(sum);

//exponentiation  **

let number5 = 2;
// number5 = number5 ** 2
number5 **= 2;
console.log(number5);

console.log(5 < 1); //false

// Comparison operators
// ==
// != not equal to
//===
// !==
//  >
// <
// >=
// <=

console.log(15 == 15, "comparision"); // true
console.log(15 != 1, "comparision"); // false
console.log("15" == 15, "comparision"); //true    // implicit
console.log("15" === 15, "comparision"); // false
console.log("15" !== 15, "comparision"); // true

console.log(5 < 1); //false

console.log(5 >= 1); //false

// logical operators

// && and  return false and false value
// || or    return true and true value

console.log(56 > 1 && 55 && 0 && 89 == 89, "And operator");

console.log(55 < 1 || 0 || 0 || 89 != 89 || 0, "Or operator");

//conversion operators

let stringNumber = "12345asdf"; // NAN  not a number    NaN typeof is number

let number = 12345;
let BooleanValue = true;

console.log(typeof stringNumber);
console.log(typeof number);
console.log(typeof BooleanValue);

stringNumber = Number(stringNumber);
console.log(stringNumber);

Number();
Boolean();
String();

// true == 1
// false == 0
// ""  == false
// "asdf" == true

// -1,-2,-3,1,,5,7,8,8  = true

// implicit  explicit

console.log(1 + 3 + "123" + 3); // concatenate
console.log(11 - true);

// Some Logical Programs procedure programs ,
//  swapping Ex : grade , bill , interest , employ salary

let a = 30;
let b = 70;

// output a = 70 b= 30
// let temp = a; // temp = 30

// a = b; // a=70
// b = temp; // b=30

a = a + b; // a = 100

b = a - b; // 100-70 = 30

a = a - b; // 100-30 = 70

console.log((12 + 56 + 90 + 75) / 4, "average");
