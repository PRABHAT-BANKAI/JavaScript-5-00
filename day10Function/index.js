function print1() {
  console.log("1");
}
function print2() {
  console.log("2");
}
function print3() {
  console.log("3");
}
function print4() {
  console.log("4");
}

// normal function
function show1(num1, num2) {
  //parameters
  console.log(num1 + num2);
}

show1(2, 3); //arguments

print3();
print1();
print4();

// variable function
let showFun = function (a, b) {
  console.log(a * b);

  return a + b;
};

const result = showFun(5, 5);

console.log(result);
console.log(showFun(2, 5));

// arrow function

const arrowFun = () => {
  console.log("Hello, Arrow Function!");
};
arrowFun();
resultShow();

function resultShow() {
  console.log("Show normal Functions");
}

const arrowSum = (a) => a;

console.log(arrowSum(3, 5));

function outerFunction() {
  console.log("outerFunction");

  function innerFunction() {
    console.log("innerFunction");
  }
  return innerFunction;
}

const inner = outerFunction();
inner();

const multi = (b, a) => {
  console.log(b, "b", a, "a");
  console.log(b * a);
};
let a = 8;
let b = 9;
multi(a, b);

function evenNumber(num) {
  // ternary operator
  return num % 2 == 0 ? console.log("even") : console.log("odd");
}

evenNumber(5);

evenNumber(2);
evenNumber(3);
evenNumber(7);

// IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("IIFE Function");
})();

let string = "batman";
for (let i = 0; i < string.length; i++) {
  console.log(i); //0//1
  console.log(string[i]); //b//a
}

const date = new Date();
console.log(date);
const randomNumber = Math.random();
console.log(randomNumber);
const floor = Math.floor(5.6);
const ceil = Math.ceil(5.6);
const round = Math.round(5.4);
console.log(floor);
console.log(ceil);
console.log(round);

const min = Math.min(23, 56, 34, 6, 2);
console.log(min);
const max = Math.max(23, 56, 34, 6, 2);
console.log(max);
