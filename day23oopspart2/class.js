class Animal {
  #name;
  constructor(name, color) {
    this.#name = name;
    this.color = color;
  }

  showColor = function () {
    console.log(`${this.#name}  ${this.color} color`);
  };
}

class Dog extends Animal {
  constructor(name, color, breed) {
    super(name, color);
    this.breed = breed;
  }
  #showBreed = function () {
    console.log(`${this.breed}`);
  };
  showDogBreed = function () {
    this.#showBreed();
  };
}

const jojo = new Dog("jojo", "white", "pamlian");
console.log(jojo);

jojo.showColor();
jojo.showDogBreed();

jojo.name = "batman";

console.log(jojo);
