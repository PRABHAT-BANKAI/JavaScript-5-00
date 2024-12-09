// JS Error Throw and try to catch
// try catch can do error handling
// try { syntax
// } catch (error) {

// }

console.log(1);
console.log(2);
try {
  console.log(three);
} catch (error) {
  console.log(error);
}
console.log(4);

function arrowFun() {
  console.log(hello);
}

try {
  arrowFun();
} catch (error) {
  console.log(error);
}

console.log(5);
console.log(6);

//javascript nature is  synchronous

console.log(12);
setTimeout(() => {
  console.log(13);
}, 3000);
console.log(14);

let count = 0
const id =setInterval(() => {
  console.log(count)

  if(count == 10){
    clearInterval(id);
  }
count++;

},1000);
