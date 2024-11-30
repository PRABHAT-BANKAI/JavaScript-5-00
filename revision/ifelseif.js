if (5 > 2) {
  console.log("5 is greater than 2");
} else {
  console.log("5 is not greater than 2");
}

// if (true) {
//   console.log("hellow is false");
// } else if (true) {
//   console.log("hello is true");
// }
// else{
//   console.log("hello is neither true nor false");
// }

let budget = 2500;

if (budget > 5000) {
  console.log("i can go 5 star restaurant");
} else if (budget > 4000) {
  console.log("i can go starbucks");
} else if (budget > 3000) {
  console.log("i can go mcdonald's");
} else if (budget > 2000) {
  console.log("i can go burger king");
} else if (budget > 1000) {
  console.log("i can go dhaba");
} else if (budget > 500) {
  console.log("ghar vadapav ");
} else {
  console.log("ghar betho");
}

// traffic  light

let color = "blue";

if (color === "red") {
  console.log("stop");
} else if (color === "yellow") {
  console.log("slow down");
} else if (color === "green") {
  console.log("go");
} else {
  console.log("invalid color");
}

// logical operator with if else if

let age = 25;

if (age >= 18 && age <= 65) {
  console.log("welcome to adult section");
} else if (age >= 66 && age <= 120) {
  console.log("welcome to senior citizen section");
} else {
  console.log("welcome to child section");
}

// For loop Some reasoning programming

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

let number = 1;
console.log(number) //1 
console.log(++number)//2  // prefix
console.log(number++); //2 postfix
console.log(number);//3

// let i = 0 initialization
// for(initialization;condition; increment i++){

// }


for(let i=1;i<=10;i++){ // if condition is true then enter in for loop block
  console.log(i);
}
//1
//2
//3
//4
//5
//6
//7
//8
//9
//10

//output
//1
//12
//123
//1234
//12345

console.log("12345"+6789)//concatenate // 123456789

let str = ""
let count = 0
for(let i=1;i<=5;i++){
  // str = str+i
  str += i
  count++
  console.log(count)
}
console.log(str)
console.log(count)

// ouput 12345


//*
//**
//***
//****
//*****


// output 1 t0 10 total


// let and const keyword is a block scope ={}
for(let i=1;i<=10;i++){
  let sum = 0
  sum += i
  console.log(i,sum)
}

