let num = 0;

while (num <= 10) {
  console.log(num);
  num++;
}
for (let i = 0; i < num; i++) {
  console.log(i);
}

let array = ["html", "javascript", "css"];
let index = 0;

while (index <= array.length - 1) {
  console.log(array[index]);
  index++;
}
console.log(array[1]);
let i = 1;

do {
  i++;
  console.log(i);
} while (i < 10);

//2,3,4,5,6,7,8,9,10

// Prime number
// ""
// ''
let numValue = 20;

for (let i = 1; i <= numValue; i++) {
  if (i % 2 == 0) {
    console.log(`even number ${i}`);
  } else {
    console.log(`odd number ${i}`);
  }
}

let PrimeNumber = 66;
let count = 0;
for (let i = 1; i <= PrimeNumber; i++) {
  if (PrimeNumber % i == 0) {
    count++;
  }
}
console.log(count);
if (count == 2) {
  console.log(`${PrimeNumber} is prime`);
} else {
  console.log(`${PrimeNumber} is not prime`);
}

// let i=1

// {

//   let i=0
// }

// let i =0
// let i = 0
// {let i = 0}

for (let i = 0; i < 55; i++) {
  if (i == 34) {
    console.log(i);
    break;
  }
  console.log(i);
}
