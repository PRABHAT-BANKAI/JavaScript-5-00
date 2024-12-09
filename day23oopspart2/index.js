// Inheritance types of inheritance

function Animal(name, color) {
  this.name = name;
  this.color = color;
}

Animal.prototype.showColor = function () {
  console.log(`${this.name}  ${this.color} color`);
};

Dog.prototype = Object.create(Animal.prototype);

function Dog(name, color, breed) {
  Animal.call(this, name, color);
  this.breed = breed;
}

Dog.prototype.showBreed = function () {
  console.log(`${this.breed}`);
};



const jack = new Dog("jack", "brown", "german sheperd");
console.log(jack);

jack.showBreed();
jack.showColor();
