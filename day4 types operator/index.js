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
console.log(a / b); // division
console.log(a ** 3); //exponentiation
console.log(a % b); // modulus

//prefix

const newValue = ++a;
console.log(newValue);
console.log(++a); // output 11
//postfix

let newValue2 = b++;
console.log(b++); //output 6,5
console.log(b);

console.log(newValue2, b);

// Assignment operators

let c = 10;
let num1 = 2;
num1 += 5; //num1 = num1 + 5 // output 7

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

let num2 = "7";
let num3 = 7;

console.log(num2 == num3); // both are equal or not
console.log(num2 != num3); //not equal  output true
console.log(num2 > num3); //greater than ouput false
console.log(num2 < num3); // smaller than ouput true
console.log(num2 >= num3); //greater than equal output false
console.log(num2 <= num3); // smaller than equal output true

console.log(num2 === num3, "==="); //false
console.log(num2 !== num3, "!=="); // true

//Logical operators
// || OR
// &&  AND

console.log(45 < 87 && 67 > 5 && 5 > 7);
console.log(4>1 && 0 &&  1 && 1); // false = 0

console.log(5<1 ||2|| 1>12 ||0 || 0||2)

