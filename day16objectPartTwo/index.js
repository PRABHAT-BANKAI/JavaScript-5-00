// JS Objects ( PPT) Object Property Object Methods

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

console.log(Object.keys(object));
console.log(Object.values(object));

object.name = "batman";

console.log(object);

// spread and rest

let array = [1, 2, 3, 4, 5];

let newArray = [...array, 56, 4, 56, 99];
console.log(newArray);

function showSum(a, b, c) {
  //parameters we can define with any name
  // return a + b + c
  console.log(a, "a");
  console.log(b, "b");

  console.log(c, "c");
}

let sumNumbers = [123, 54, 6];

let a = 12;
let b = 55;
let c = 77;

showSum(b, c, a); //arguments

function rest(...rest) {
  // rest = [...rest]
  console.log(rest);
}

rest(1, 2, 3, 4, 5, 6, 7, 8, 9);

let objectGames = {
  name: "redRedemption",
  platform: "PC",
  genre: "action-adventure",
  releaseYear: 2012,
};

Object.freeze(objectGames);

objectGames.name = "red redemption 2";

console.log(objectGames);

const game2 ={...objectGames}

console.log(game2 === objectGames);



// Array.sort()
//Array.join()

let arrayValue = ["i","love","javascript"]
//prefix ++i
//postfix i++

let string = ""
for(let i=0;i<arrayValue.length;i++){
string += arrayValue[i] + "0"
}

console.log(string)



const getvalueArray = arrayValue.join("0")

console.log(getvalueArray)


const  stringValue = "12 45 67 12 34 62 67"
const valueOfStringValue = stringValue.split(" ")

console.log(valueOfStringValue)


let example2 = "     RedAndWhiteMultimeidaEducation                     "
console.log(example2)
example2 =   example2.trim()
console.log(example2)
