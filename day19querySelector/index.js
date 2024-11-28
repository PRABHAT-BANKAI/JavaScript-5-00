// 3 types how to create functions

// normal function
console.log(sum(1, 5, 6));
function sum(a, b, c) {
  // parameter   // by default function kya return "undefined"
  // console.log(a,b,c)
  console.log("before return");
  return a + b + c;
  // when we use return keyword so we cannot  run the code after return keyword
  // console.log("after return ");
}

 // argument

// arrow function


let sum2 = () => {
  console.log("arrow function");
};
sum2();


let sum3 = function(a,b){ // variable function 
  console.log("normal function sum3",a+b);
}
sum3(9,0)


