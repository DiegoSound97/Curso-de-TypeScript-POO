"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = exports.Animal = void 0;
class Animal {
    // si le pongo privado no deja mover desde afuera
    // Si le pongo protected es un privado con herencia
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log('moving along!');
    }
    greeting() {
        return `Hello, I'm ${this.name}`;
    }
    doSomething() {
        console.log('dooo');
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
            console.log(`Woof! ${this.name}`);
        }
        this.doSomething();
    }
    move() {
        //code
        console.log('moving as a dog');
        super.move();
    }
}
exports.Dog = Dog;
const cheis = new Dog('cheis', 'Nico');
//cheis.name='otro Nombre'
cheis.woof(1);
//cheis.doSomething();
cheis.move();
