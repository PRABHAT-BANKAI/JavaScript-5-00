// While loop Do while loop

//syntax of while loop

// while (condition) {
//   // if condition is true then enter in  code block
// }

let count = 0; // initialization count

while (count < 10) {
  console.log(count);

  count++; // increment count
}
//0,1,2,3,4,5,6,7,8,9

// do while loop
let number = 1;
do {
  number++;
  console.log(number);
  // increment number
} while (number <= 5);

// function create with 4 types
// normal function
// variable function
// anonymous function
// arrow function

let storeValue = show(12, 5);
console.log(show(10, 5));
console.log(storeValue);

function show(a, b) {
  // normal function
  console.log(a + b);
  console.log("hello world");
  return a - b;
}

// undefined by default return by function in javascript


// print(); if i call print() function then cannot access 'print' before initialization
// print()
//vairable function
let print = function (){// anonymous function
  console.log("hello world from vairable function ");
}

print();


// arrow function 


let arrowPrint =()=>{
  console.log("hello world from arrow function ");
}
arrowPrint();


let sum = (a,b)=>a+b


console.log(sum(10,5)); // 15
