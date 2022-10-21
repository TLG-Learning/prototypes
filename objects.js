// Everything in JavaScript is an object and this is important because
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super

// null -> Object
const human = {
  legs: 2,
  eyes: 2,
};

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

function Dog(name, sound) {
  Animal.call(this, name);
  this.sound = sound;
}

Dog.prototype = Animal.prototype;

const pet = new Dog("Leo", "woof");

// null -> Object -> Vehicle -> Car -> BMW -> FiveSeries -> my528
class Vehicle {
  constructor(year) {
    this.year = year;
  }
}
class Car extends Vehicle {}
class BMW extends Car {}
class FiveSeries extends BMW {}

const my528 = new FiveSeries("2016");
