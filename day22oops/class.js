class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  animalSound(sound) {
    console.log(`${this.name} makes a ${sound} sound`);
  }
}

let dog = new Animal("dog", "black");
console.log(dog);
dog.animalSound("bark");

let cat = new Animal("cat", "white");
console.log(cat);
cat.animalSound("meow");

console.log(dog.animalSound === cat.animalSound);
