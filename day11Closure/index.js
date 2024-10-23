//Closure
//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.

function outer() {
  //lexical environment
  let a = 4;
  let b = 6;
  console.log("outer function");
  function inner() {
    console.log(a + b);
  }
  a = 5;
  b = 10;
  return inner;
}

const innerResult = outer();

innerResult();

const multi = (a, b) => {
  return a * b;
};
console.log(multi(true, true));

function even(num) {
  if (num % 2 == 0) {
    console.log(`event number: ${num}`);
  } else {
    console.log(`odd number: ${num}`);
  }
}

// for (let i = 1; i <= 50; i++) {
//   even(i);
// }

function prime(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  if (count == 2) {
    console.log(`${num} is a prime number`);
  } else {
    console.log(`${num} is not a prime number`);
  }
}

let number = 1;
while (number <= 10) {
  prime(number);
  number++;
}

let array = [23, 45, 76, 123];
let arrayString = ["rohan", "raj", "jenil", "khushal"];

arrayString.sort();
console.log(arrayString);

// for (let i = array.length - 1; i >= 0; i--) {
//   console.log(array[i]);
// }

for (let index of array) {
  console.log(index);
}

let obj = { name: "prabh", age: 25, city: "delhi" };

for (let key in obj) {
  console.log(obj[key]);
}
