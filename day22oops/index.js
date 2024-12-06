//oops (object oriented programming)
// OOP stands for Object-Oriented Programming. It's a programming style that uses objects to represent and manipulate data.

// abstraction
// Inheritance
// polymorphism
// Encapsulation

function employee(name, amount, age, address) {
  //factory function
  let object = {};
  object.name = name;
  object.amount = amount;
  object.age = age;
  object.address = address;
  object.widhdraw=function(debited){
   this.amount = this.amount - debited
  }
  return object;
}

let rohan = employee("rohan", 100000, 12, "ahemdabad");
console.log(rohan);
rohan.widhdraw(1000000)
console.log(rohan)

let rajdeep = employee("rajdeep", 200000, 12, "ahemdabad");
console.log(rajdeep);


// console.log(+"1234 65677")


// constructor function 
