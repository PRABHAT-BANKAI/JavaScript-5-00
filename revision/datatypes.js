// data types

// primitive types
// String  "hello world"
// number   212345
// Boolean  true , false
// null
// undefined
// BigInt

// non primitive (reference) //a9034ujf
//array
//object
//function

const userName = null;

console.log(userName);

let userName2;
console.log(userName2);

let bigInt = 1234346245480734987909509823n;

console.log(bigInt);

//non primitive
let a = 123;

let b = "hello";

let c = false;
let array = ["string", 12345, true, a, b, c]; //   element length = 6
//  index       0        1      2    3  4  5

/// array index always start with 0
console.log(array[2]);
console.log(array[4]);
console.log(array.length);
console.log(array);
console.log(typeof array);

// object carry key value pairs
let object = {
  userName: "batman",
  age: "33",
  city: "gautam city",
};

console.log(object);
console.log(object.userName);

//functions

// console.log("1")
// console.log("2")
// console.log(bug)
// console.log("3")
// console.log("4")

console.log("1");
console.log("2");
console.log("3");
console.log("4");


//4
//2
//1
//3


function print1(){  // block 
  console.log("1")
}
function print2(){
  console.log("2")
}
function print3(){
  console.log("3")
}
function print4(){
  console.log("4")
}

print4()
print2()
print3()
print1()




