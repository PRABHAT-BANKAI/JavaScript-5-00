// syncronous or asynchronous

// console.log(1);
// setTimeout(() => {
//   //  asynchronous
//   console.log(4);
// }, 3000);

// setTimeout(function () {
//   console.log(5);
// }, 3000);
// console.log(2);
// console.log(3);

let count = 0;

let id = setInterval(() => {
  console.log(count);

  if (count === 5) {
    clearInterval(id);
    console.log("stop")
  }
  count++
}, 1000);
