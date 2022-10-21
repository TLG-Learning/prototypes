// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super

// null -> Object
// What is the prototype of human?
const human = {
  legs: 2,
  eyes: 2,
};

const human2 = new Object({
  legs: 2,
  eyes: 2,
});

// DRY, Single Responsibily Principle, Big O

// Give definition of prototype inheritance:
// Everything in JavaScript is an object

// private link: __proto__

// null -> Object -> Object(human) -> person
const person = {
  __proto__: human,
};

person.__proto__.__proto__;
person.__proto__.__proto__.__proto__;

Object.getPrototypeOf(person);
Object.getPrototypeOf(person).__proto__.__proto__;

human.__proto__;
human.__proto__.__proto__;

Object.getPrototypeOf(human);
Object.getPrototypeOf(human).__proto__;

// constuctor

// null -> Animal -> Dog
function Animal(name) {
  this.name = name;
}

Animal.prototype.walk = function () {
  console.log("I am walking");
};

function Dog(name, sound) {
  Animal.call(this, name);
  this.sound = sound;
}

Dog.prototype = Animal.prototype;

// check the prototype
const pet = new Dog("Leo", "woof");

// null -> Object -> Vehicle -> Car -> BMW -> FiveSeries -> my528
class Vehicle {
  constructor(year, style) {
    this.year = year;
    this.style = style;
  }
}
class Car extends Vehicle {
  constructor(year, convertible) {
    super(year);
    this.convertible = convertible;
  }
}

class BMW extends Car {
  constructor(year, series) {
    super(year);
    this.series = series;
  }
}
class FiveSeries extends BMW {
  constructor(year) {
    super(year);
  }
}

const my528 = new FiveSeries("2016");

// Create a hierarchy of classes
// Add unique properties to each class and
