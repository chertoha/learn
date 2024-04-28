// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = 'Mango';

// console.log(dog);

// const obj = {
//   method() {
//     console.log(this);
//   },
// };

// const func = obj.method;

// func();

// class Hero {
//   constructor(name = 'Hero', xp = 0) {
//     this.name = name;
//     this.xp = xp;
//     console.log('constructor of class Hero');
//   }

//   gainXp(amount) {
//     this.xp += amount;
//     console.log('+ ammount', amount);
//   }
// }

// class Warrior extends Hero {
//   constructor(name, xp, weapon) {
//     super(name, xp);
//     this.weapon = weapon;
//     console.log('constructor of class Warrior');
//   }
// }

// const mango = new Warrior('Mango', 999, 'sword');

// mango.gainXp(1000);
// console.log(mango);

// class Test {
//   constructor() {
//     this.value = 1;
//   }
// }

// const test = new Test();
// console.log(test);

// class TestChild extends Test {
//   constructor() {
//     super();
//     this.childValue = 13;
//   }
// }

// const testChild = new TestChild();
// console.log(testChild);

// const Test = function () {
//   this.value = 1;
// };
// Test.prototype.protoValue = 13;

// const test = new Test();

// Test.prototype.protoValue = 222;

// // Object.freeze(Test.prototype);
// Object.seal(Test.prototype);

// Test.prototype.protoValue = 111222;
// Test.prototype.protoValue2 = 333;

// console.log(test.__proto__);
