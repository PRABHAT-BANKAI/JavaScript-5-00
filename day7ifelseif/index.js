//if else if else

let light = "green";
// decending order
if (light == "red") {
  console.log("Stop");
} else if (light == "yellow") {
  console.log("slow down");
} else if (light == "green") {
  console.log("Go");
} else {
  console.log("Invalid light color");
}

let budget = 500;

if (budget >= 4000) {
  console.log("haldiram");
} else if (budget >= 3000) {
  console.log("Star bucks");
} else if (budget >= 1000) {
  console.log("Domonios");
} else if (budget >= 500) {
  console.log("fast food");
} else if (budget == 500) {
  console.log("ghar betho");
}

let marks = 33;

if (marks >= 80) {
  console.log("A+");
} else if (marks >= 60) {
  console.log("B+");
} else if (marks >= 33) {
  console.log("C");
} else {
  console.log("Failed");
}
let MathValue = "null1235";

// console.log(MathValue === undefined);
console.log(MathValue.length);

let date = new Date();
console.log(date);
console.log("sdf" - 5);
console.log(typeof NaN );
console.log(5-NaN)
