// Array With Functions Push ,Pop, shift, unshifts, Splice,slice
//  string function

let array = ["batman", "superman", "spiderman", true, 112];

let result = array.push("ironman");
console.log(result, "array length");
array.push("hulk");
console.log(array);

let arr = [];

for (let i = 0; i < 10; i++) {
  arr.push(i);
}

console.log(arr);

let marvelHeroes = ["spiderman", "thor", "lokey", "ken"];

let resultPop = marvelHeroes.pop();

console.log(resultPop, "popped hero");

marvelHeroes.pop();

console.log(marvelHeroes);

let anime = ["goku", "vageta", "loffy"];

let resultShift = anime.unshift("batman");
console.log(anime, resultShift);
console.log(anime, "anime");

let dishes = ["cake", "candy", "chocolate", "pastery"];

// splice(started,kitne item remove krne hai, add kra skte )
dishes.splice(3, 2, "vada pav", "tikki", "pizza");

console.log(dishes);

// slice

// dishes.slice(star,end)

let games = [
  "sports",
  "tennis",
  "tableTennis",
  "skating",
  "basketball",
  "cricket",
  "handball",
];
let gamesResult = games.slice(1, 4);

console.log(gamesResult);

let string = "helloworld";

console.log(string.length);
const resultString = string.toUpperCase();

let string2 = "REDANDWHITEMULTIMEDIAEDUCATION";

console.log(resultString);
console.log(string2.toLowerCase());


let word = "i am javascript"

const resultWord = word.split(" ")

console.log(resultWord.join(""))


let wordArray =[ 'i' ,'am', 'javascript' ]

const resultWordArray = wordArray.join("9")

console.log(resultWordArray)

