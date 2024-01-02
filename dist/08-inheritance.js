"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = exports.Animal = void 0;
class Animal {
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log('moving along!');
    }
    greeting() {
        return `Hello, I'm ${this.name}`;
    }
}
exports.Animal = Animal;
class Dog extends Animal {
    // extender propiedades 
    constructor(name, owner) {
        super(name);
        this.owner = owner;
    }
    woof(times) {
        for (let index = 0; index < times; index++) {
            console.log('woof!');
        }
    }
}
exports.Dog = Dog;
const fifi = new Animal('fifi');
fifi.move();
console.log(fifi.greeting());
const cheis = new Dog('cheis', 'Nico');
cheis.move();
console.log(cheis.greeting());
cheis.woof(5);
console.log(cheis.owner);
