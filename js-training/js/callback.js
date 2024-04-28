// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     const { pizzas } = this;

//     if (!pizzas.includes(pizzaName)) {
//       return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//     } else {
//       return onSuccess(pizzaName);
//     }
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   orderedItems.forEach(price => (totalPrice += price));

//   // Change code above this line
//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction', 'mysticism'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism', 'adventure'],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((value, index, array) => array.indexOf(value) === index);

// console.log(uniqueGenres);

// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce(
//   (total, { playtime, gamesPlayed }) => total + playtime / gamesPlayed,
//   0,
// );

// console.log(totalAveragePlaytimePerGame);

// const arr = [
//   'js',
//   'nodejs',
//   'html',
//   'css',
//   'html',
//   'js',
//   'nodejs',
//   'css',
//   'react',
//   'js',
//   'nodejs',
//   'react',
// ];

// {
//     nodejs:3,
//     css:2,
//     html:2,
//     nodejs:3,
// }

// const obj = arr.reduce((commonObj, key) => {
//   //   console.log(commonObj);
//   //   console.log(key);

//   if (!commonObj.hasOwnProperty(key)) {
//     // console.log('no key yet: ', key);
//     return {
//       ...commonObj,
//       [key]: 1,
//     };
//   } else {
//     // console.log('has key : ', key);

//     // console.log();
//     return {
//       ...commonObj,
//       [key]: commonObj[key] + 1,
//     };
//   }
// }, {});

// console.log(obj);

// const obj = arr.reduce(
//   (commonObj, key) => ({
//     ...commonObj,
//     [key]: !commonObj.hasOwnProperty(key) ? 1 : commonObj[key] + 1,
//   }),
//   {},
// );

// console.log(obj);
