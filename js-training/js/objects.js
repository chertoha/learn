// const obj1 = {
//   a: 1,
//   b: 'Anton',

//   x: () => {
//     console.log('x method obj1');
//   },
// };

// let obj2 = {
//   b: 'Serg',
// };

// const obj3 = Object.assign({}, obj1);

// const objSpread = { ...obj2, ...obj1 };

// console.log(objSpread);

//============================================================

// const obj1 = {
//   a: 1,
//   b: 'Anton',

//   x: () => {
//     console.log('x method obj1');
//   },
// };

// // let obj2 = {
// //   b: 'Serg',
// // };

// const newObj = Object.create(obj1);
// console.log(newObj);
//============================================================

// const obj = {
//   a: 1,
//   b: 'Anton',
// };

// Object.freeze(obj);

// const newObj = Object.create(obj);

// console.log(newObj);

//============================================================
// const obj1 = {
//   a: 1,
//   b: 'Anton',

//   x: () => {
//     console.log('x method obj1');
//   },
// };

// const newObj = Object.create(obj1);
// newObj.c = 333;

// const protoObj = Object.getPrototypeOf(newObj);
// console.log(protoObj);
// console.log(protoObj === obj1);

//============================================================

// const obj1 = { a: 1 };
// const obj2 = { a: 1 };
// // const obj2 = obj1;
// console.log(Object.is(obj1, obj2));

//============================================================

// const obj1 = {
//   a: 1,
//   b: 'Anton',

//   x: () => {
//     console.log('x method obj1');
//   },
// };

// const newObj = Object.create(obj1);
// newObj.c = 333;

// console.log(obj1.isPrototypeOf(newObj));

//============================================================

// const obj1 = { a: 1 };

// Object.seal(obj1);

// obj1.a = 3;

// obj1.b = 3;

// console.log(obj1);

//============================================================
// const obj1 = { a: 1 };
// const obj2 = Object.create(obj1);
// obj2.b = 2;
// obj2.__proto__.a = 13;

// console.log(obj2);

// Object.freeze(obj2);

// obj2.__proto__.a = 22;
// console.log(obj2);

// console.log(Object.keys(obj2));

// const promise = new Promise((resolve, reject) => {});

// const a = { name: 'A' };

// const b = Object.create(a);
// b.name = 'B';

// console.log(b.__proto__);

const Car = function (color, price) {
  let _color;
  let _price;

  Object.defineProperties(this, {
    color: {
      set(val) {
        this._color = val;
      },

      get() {
        return this._color;
      },
    },

    price: {
      set(val) {
        this._price = val;
      },

      get() {
        return this._price;
      },
    },
  });

  this.color = color;
  this.price = price;

  //   this.sayHi = function () {
  //     console.log(`hello ${this.price}`);
  //   };
};

const vw = new Car('white', 7000);
console.log(vw);

vw.color = 'black';
vw.price = 1;
console.log(vw);
console.log(vw.color);
console.log(vw.price);

// Car.prototype.sayHi = function () {
//   console.log(`hello ${this.price}`);
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// const bmw = new Car('black', 1000);
// const fiat = new Car('red', 3000);

// console.log('bmw', bmw);
// console.log('fiat', fiat);

// // const obj = new Object();

// // obj.a = 1;
// // console.log(obj);
// bmw.sayHi();
// fiat.sayHi();

// bmw.changePrice(50000);
// fiat.changePrice(15000);

// console.log('bmw', bmw);
// console.log('fiat', fiat);

// const arr = [10, 7, 4, 444, 231];

// const res = Math.max(...arr);
// console.log(res);

const arr = [10, 7, 4, 444, 231, 4, 444, 4];

const res = arr.reduce((acc, val) => (val === 4 ? ++acc : acc), 0);

console.log(res);
