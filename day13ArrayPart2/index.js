// Array With Functions
//  (map ,filter, foreach, indexof, findindex ,includes, every, some)

const numbers = [1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 9];

//Array.map() method of array
// 1 step  = create new array
// 2 step = update new changes in new array
// 3 step = return new array

// show()
// const show = ()=>{

// }

// show();
const result = numbers.map((element) => {
  return element + "hello map method";
});

console.log(result);

//Array.filter() method of array
const filterResult = numbers.filter((element) => {
  return element != 8;
});
console.log(filterResult);

//Array.forEach() method of array

let sum = 0;
numbers.forEach((item) => {
  sum += item;
  // console.log(sum);
});
console.log(sum);

const numberofindex = numbers.indexOf(5);
console.log(numberofindex);

const beasts = ["ant", "bison", "camel", "duck", "bison"];

console.log(beasts.indexOf("bison", 0)); // 1 first parameter "bison" for find index, second parameter "2" where we need to start index

const array1 = [5, 44, 12, 8, 8, 130];

const isLargeNumber = (element) => element == 8;

console.log(array1.findIndex(isLargeNumber));
// Expected output: 1

let fruitBasket = ["apple", "banana", "mango", "orange", "grapes"];

const resultfruit = fruitBasket.includes("guava");

console.log(resultfruit);

let games = [12,225,6,7,45,7,68,10];

const resultGames = games.every((game) => {
  return game > 5;
});

console.log(resultGames);

const mobileGames = ["pubg","coc","freefire","candyCrush","subwaySurfer"]

const mobileResult = mobileGames.some((game)=>{
  return  game == "pubg"
})

console.log(mobileResult);
