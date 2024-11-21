// Object with Array Objects Looping Array with object access with looping and conditions Make Quotes

// object is a key value pairs
let object = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
  },
  hobbies: ["reading", "painting", "coding"],
};

console.log(object);

// in object we have two thinks
// dot notation
// bracket notation
console.log(object.name); // dot notation
console.log(object["name"]);
console.log(object.address.street);
console.log(object.hobbies[2]);

// looping object

//in keyword for object only
for (let key in object) {
  console.log(key + "--" + object[key]);
}
const array = [1, 55, 3, 88, 55, 66, 77, 88, 99];
for (let key of array) {
  console.log(array[key]); //array[1] // 555  // array[55] > undefined
}

// console.log([1,2,3]== "1,2,3")

// for(let i=0;i<object.length;i++){
//   console.log(object[i]);
// } wrong method for object

let subject = {
  javascript: 66,
  html: 55,
  css: 88,
  python: 77,
};

let arrayOfSubject = ["javascript", "html", "css", "python"];

// for (let i = 0; i < arrayOfSubject.length; i++) {
//   console.log(subject[arrayOfSubject[i]], "value");
// }

