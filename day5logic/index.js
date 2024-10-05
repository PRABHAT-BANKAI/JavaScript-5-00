// Some Logical Programs procedure programs , swapping Ex :

let a = 5;
let b = 10;

let temp = a;
a = b;
b = temp;

a = a + b; //15
b = a - b; //15-10 = 5
a = a - b; //15-5=10

let num = 1235;

let num2 = 12;

let num3 = "1234566";

console.log(num3 + num + num2);

console.log(15 - 5 + 10 - 2 * 2 - (7 / 2) * (4 - 2));
console.log(7 / 2);

console.log(12 + "12");

let numValue = "12345"; // immutable

let str = "asd";
let store = str + numValue;
let arr = [1, 2, 3, 4]; // mutable

// immutable mutable
//implicit explicit

//15-5+10-2*2-7/2*2
//15-5+10-2*2-3*2

//15-15-4-6

// console.log(3*4*2*2)

console.log(45 > 56 + 12 < 4 + 1 - 5 > 1 + 2); //false>true>3 // false>3 //false

let x = 15;
let y = 5;

let tempValue = 0;
tempValue = x;

// x = y;
// y = tempValue;

x = x + y; //20

y = x - y; //20-5 // 15

x = x - y; //20-15 //5
console.log(x, y);

let english = 10;
let math = 15;
let javscript = 25;

let average = english + math + javscript / 3;
console.log(average);

//0.5 //1//1.2//1
console.log(Math.round(5.5));
console.log(Math.ceil(5.3));
console.log(Math.floor(5.5));

let num5 = 56
let num4 = 59

// Math.min
// Math.max
// Math.random
// Math.sqrt

console.log((12<5||5) && (0<1) || 55>7  &&  45==65)
//true && true || 55>7  &&  45==65

//true && true && false

//priority   && have higher priority then  || have priority

//true || false && false
