// what is variables understanding data types declaring and initialization variables

// Data types

// primitive types
// number
// string
// boolean
// undefined
// null
//bigInt

// non-primitive types (reference types)
//object
//array

//function

// primitive types
//number
let num = 10;

console.log(typeof typeof num, "number"); //string
console.log(typeof num); //output number

console.log(  typeof num)

//string
var string = "asdfg";
console.log(string);

//boolean

let boolean = true; // true false
console.log(typeof boolean, "boolean");
console.log(typeof typeof boolean, "boolean");

// undefined
let value;

console.log(value);
console.log(typeof value, "undefined");
console.log(typeof typeof value, "undefined");

// null
let value1 = null;

console.log(typeof value1, "null");//object

//bigInt
let bigNumber = 12312312354336568671233226537n;
console.log(typeof bigNumber ,"big1");
console.log(bigNumber,"big");//bigint

//non primative // Reference typed

// object
let obje = {}
let object = { number: 1,
               string: "hellow",
              boolean:"12345" };
console.log(object, "object");
console.log(typeof object, "object");

// array  multiple variables can store

let array = ["hello", "world", "javscript", string, boolean];//[]

console.log(array, "array");
console.log(typeof array, "array");//object

// function
function print() {
  console.log("function print");
}
function output(){
  console.log("end")


}
output()

print();

// let  help in update the variables again and again
let nameValue = "prabhat";

nameValue = "prabh";
console.log(nameValue)
nameValue = "Raj";

console.log(nameValue);

// const (constant)
const text = "hello";

// text = "World"; // const key dont allow update when variable already assigned
console.log(text);


function element()
{
  console.log("javascript");
}
element();
