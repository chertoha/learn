// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line

//     const newArray = firstArray.concat(secondArray);

//     return newArray.slice(0, maxLength);

// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));

// function arrayDiff(a, b) {

//   return a.filter(function (element){

// //     if (!b.includes(element)){
// //       return element;
// //     }

//      return !b.includes(element);
//   });
// }

// console.log(arrayDiff([1, 2], [1]));

// function alphabetPosition(text) {

//     // text = text.toUpperCase();

//     // const newArr = [];
//     // const arr = text.filter(function (letter, index) {
//     //     return letter.charCodeAt(0) >= 65 && element.charCodeAt(0) <= 90;
//     // });

//     // for (let i = 0; i < text.length; i++) {
//     //     if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {
//     //         newArr.push(text.charCodeAt(i) - 64);
//     //      }

//     //     // newArr.push(text.charCodeAt(i));

//     // }

//     // console.log(text);
//     // console.log(newArr.join(' '));
//     // return newArr.join(' ');
//     return text.toUpperCase().match(/[a-z]/gi).map(e => e.charCodeAt() - 64).join(' ');
// }

// console.log(alphabetPosition("The sunset sets at twelve o' clock."));
// ------------------------------------------------------------------------------------------------
// function persistence(num, count = 0) {
//   //   console.log(num);

//   //   console.log(typeof num);
//   num = num.toString();
//   if (num.toString().length !== 1) {
//     const arr = num.split('');
//     num = 1;
//     arr.forEach(value => {
//       num *= value;
//     });

//     // num = num.split('').reduce((previousValue, currentValue) => previousValue * currentValue);
//     // num = num.split('').reduce(function (previousValue, currentValue) {
//     //   return previousValue * currentValue;
//     // });

//     count = persistence(num, ++count);
//   }

//   return count;
// }

// function persistence(num) {
//   let count = 0;
//   while (num.toString().length > 1) {
//     num = num
//       .toString()
//       .split('')
//       .reduce((previousValue, currentValue) => {
//         return previousValue * currentValue;
//       });
//     // console.log(num);
//     count++;
//   }

//   return count;
// }

// console.time('FirstWay');
// console.log('total count for 234 = ', persistence(234));
// console.log('total count for 999 = ', persistence(999));
// console.log('total count for 39 = ', persistence(39));
// console.log('total count for 4 = ', persistence(4));

// console.timeEnd('FirstWay');

// const user = {
//   name: 'Anton',
//   age: 39,
//   location: {
//     country: 'Ukraine',
//     city: 'Irpin',
//     address: 'Lisova str. 4l-7',
//   },
//   online: true,
// };

// const func = function (obj) {
//   //   const {
//   //     name,
//   //     age,
//   //     location: { country, city, address, zip = '05800' },
//   //     online,
//   //   } = obj;
//   // console.log(temp);
//   //   console.log(name);
//   //   console.log(age);
//   //   console.log(country);
//   //   console.log(city);
//   //   console.log(zip);
//   //   console.log(online);
// };

// func(user);

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line

//   const propArray = [];
//   for (const product of products) {
//     if (!product[propName]) {
//       continue;
//     }
//     propArray.push(product[propName]);
//   }

//   return propArray;

//   //   return products[0][propName];

//   // Change code above this line
// }

// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('category'));

// // Change code below this line
// function findMatches(arr, ...args) {
//   const matches = []; // Don't change this line

//   matches = arr.filter(value => args.includes(value));

//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line

//     const { books } = this;

//     books.splice(books.indexOf(oldName), 1, newName);
//     console.log(this.books);
//     // Change code above this line
//   },
// };

// bookShelf.updateBook('Haze', 'Dungeon chronicles');

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const { potions } = this;
//     for (const potion of potions) {
//       if (potion.name === potionName) {
//         potions.splice(potions.indexOf(potion), 1);

//         return;
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     const { potions } = this;

//     for (const potion of potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//         return;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };

// console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));
// console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));
// console.log(atTheOldToad.addPotion({ name: 'Power potion', price: 270 }));
// console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));
// atTheOldToad.removePotion('Dragon breath');
// atTheOldToad.removePotion('Speed potion');
// console.log(atTheOldToad.removePotion('выава potion'));

// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
// console.log(atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion'));

// console.table(atTheOldToad.getPotions());

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4, test: 13 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line

//   const propArray = [];
//   for (const product of products) {
//     if (!product.hasOwnProperty(propName)) {
//       console.log(product[propName]);
//       continue;
//     }
//     propArray.push(product[propName]);
//   }

//   return propArray;

//   // Change code above this line
// }

// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('category'));
// // console.log(getAllPropValues('test'));

// const nanArr = [1, 'ss', NaN];
// console.log(nanArr.includes(NaN)); // true
// console.log(nanArr.indexOf(NaN)); // -1
// console.log(nanArr.findIndex(Number.isNaN)); // 2

// const arr = [1, 2, 3, 4, 5];

// console.log(arr.at(-1));

// console.log([1, 2, 3].fill(4));
// console.log([1, 2, 3].fill(4, 1));
// console.log([1, 2, 3].fill(4, 1, 2));

// const arr = [1, 2, 3, 4, 5, [6, 7, 8, 9, [10, 11, 12, [13, 14, 15]]]];
// console.log(arr.flat(Infinity));

// const array1 = ['a', 'b', 'c'];
// const iterator = array1.values();
// // console.log(iterator);
// for (const value of iterator) {
//   console.log(value);
// }
