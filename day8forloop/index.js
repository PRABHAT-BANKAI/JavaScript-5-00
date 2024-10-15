// for loop

//for(intialization; condition; increment){}

let number = 5;

// output = "12345"
console.log(1 + 28); // concatenate number string +
let value = "";
for (let i = 1; i <= 5; i++) {
  value = value + i; // 1 //12 //123 //1234  /12345
}
console.log(value);

let sum = 0;

for (let i = 0; i <= 15; i++) {
  sum += i;
  console.log(i);
  // console.log(sum);
}
console.log(sum);

// *1*2*3*4

let result = "";

for (let i = 1; i < 5; i++) {
  result = result + "*" + i;
}

console.log(result);

// {
//   let valueNumber = 1

// }

// console.log(valueNumber);

// *
// **
// ***
// ****
// *****

let star = "";
for (let i = 1; i <= 5; i++) {
  star += "*";
}
console.log(star);

let array = ["batman", "superman", "aquaman"]; // 0 1 2
console.log(array.length);

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
for (let i = array.length - 1; i >= 0; i--) {
  console.log(array[i]);
}

let num = 5;
switch (num) {
  case 6:
    console.log("apple");
    break;

  case 5:
    console.log("banana");
    break;
  default:
    console.log("fruit not found");

  // default:
  //   console.log("default");
}
