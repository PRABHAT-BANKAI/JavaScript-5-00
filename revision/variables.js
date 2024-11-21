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
sum += 40
console.log(sum);


//exponentiation  **

let number5 = 2
// number5 = number5 ** 2
number5 **= 2
console.log(number5)


console.log(5< 1) //false

// Comparison operators
// ==  
// != not equal to
//===
// !==
//  >
// <
// >= 
// <=

console.log(15 == 15 , "comparision")// true
console.log(15 != 1 , "comparision")// false
console.log("15" == 15 , "comparision") //true    // implicit   
console.log("15" === 15 , "comparision")  // false
console.log("15" !== 15 , "comparision") // true

console.log(5 < 1) //false

console.log(5 >= 1) //false


// logical operators

// && and  return false and false value 
// || or    return true and true value 


console.log(56>1 && 55  && 0 && 89 == 89 ,"And operator")

console.log(55<1 || 0 ||0 || 89 != 89|| 0 ,"Or operator")