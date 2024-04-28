// function duplicateCount(text) {
//   let arr = text.toLowerCase().split('');
//   let duplicates = [];

//   while (arr.length !== 0) {
//     let value = arr[0];
//     arr.splice(0, 1);
//     if (!duplicates.includes(value) && arr.includes(value)) {
//       duplicates.push(value);
//     }
//   }

//   // return duplicates.length;

//   console.log(duplicates);
//   console.log(text, duplicates.length);
// }

// duplicateCount('abcdefghabcdABCabA');
// duplicateCount('abcdefghijabcdeABCDABCabA');
// duplicateCount('abcde');
// duplicateCount('aabbcde');
// duplicateCount('aabBcde');
// duplicateCount('indivisibility');
// duplicateCount('Indivisibilities');
// duplicateCount('aA11');
// duplicateCount('ABBA');

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// // const totalTweets = tweets.reduce((total, tweet) => total + tweet.likes, 0);
// // console.log(totalTweets);

// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);
//   return allTags;
// }, []);

// console.log(tags);

// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// // Початкове значення акумулятора - це порожній об'єкт {}
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

// //Замыкание
// const makeSheff = function (name) {
//   const makeDish = function (dish) {
//     console.log(`Sheff ${name}  make dish ${dish}`);
//   };

//   return makeDish;
// };

// const anton = makeSheff('Anton');
// const alex = makeSheff('Alex');
// anton('Cake');
// anton('Sweets');
// alex('soup');
// alex('bread');

// console.dir(anton);

// function solution(number) {
//   let count = 0;
//   for (let i = 1; i < number; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       count += i;
//     }
//   }
//   console.log(count);

//   // if (number <= 0) return 0;

//   return number <= 0
//     ? 0
//     : Array.from(Array(number - 1))
//         .map((e, i) => i + 1)
//         .filter(e => e % 3 === 0 || e % 5 === 0)
//         .reduce((sum, el) => (sum += el), 0);
//   //   console.log(arr);
// }
// console.log(solution(10));

// console.log('sameCase');

///--------------------------------------------------------

// function sameCase(a, b) {
//   //   console.log([...arguments]);
//   console.log(a, b);

//   if (a.length > 1 || b.length > 1) {
//     return -1;
//   }

//   //   if (!Number.isNaN(Number(a)) || !Number.isNaN(Number(b))) {
//   //     return -1;
//   //   }

//   //   if (a === a.toUpperCase()) {
//   //     //a-> upperCase
//   //     return b === b.toUpperCase() ? 1 : 0;
//   //   } else {
//   //     return b === b.toLowerCase() ? 1 : 0;
//   //   }
//   //a -> lowerCase

//   //   return 0;

//   //   console.log(a.charCodeAt(0));

//   //   const ab = a + b;
//   //   if (ab.match(/[^a-z]/i)) {
//   //     return -1;
//   //   }

//   //   if (ab.match(/[a-z]{2}/) || ab.match(/[A-Z]{2}/)) {
//   //     return 1;
//   //   }

//   //     return 0;

//   const ab = a + b;
// }

// console.log(sameCase('a', 'g'));
// console.log('');
// console.log(sameCase('A', 'C'));
// console.log('');
// console.log(sameCase('b', 'G'));
// console.log('');
// console.log(sameCase('B', 'g'));
// console.log('');
// console.log(sameCase('0', '?'));
// console.log('');
// console.log(sameCase('G', 'V'));
// console.log('');
// console.log(sameCase('G', 'f'));
// console.log('');
// console.log(sameCase('Gaa', 'f'));
// console.log('');
// console.log(sameCase(':', 'H'));
// console.log('');
// console.log(sameCase(' ', 'H'));

///----------------------------------------------------------------------------------------------------------
// function multiplyAll(arr) {
//   return mult => {
//     return arr.map(n => n * mult);
//   };
// }

// const multiplyAll = arr => mult => arr.map(n => n * mult);

// const result = multiplyAll([1, 2, 3])(2);

// console.log(result);

///----------------------------------------------------------------------------------------------------------

//Wolf and sheeps
// function warnTheSheep(queue) {
//   console.log(queue);
//   if (queue[queue.length - 1] === 'wolf') {
//     return 'Pls go away and stop eating my sheep';
//   }

//   for (let i = queue.length - 1, sheepNum = 1; i > 0; i--, sheepNum++) {
//     if (queue[i - 1] === 'wolf') {
//       return `Oi! Sheep number ${sheepNum}! You are about to be eaten by a wolf!`;
//     }
//   }
// }

// console.log(warnTheSheep(['sheep', 'sheep', 'sheep', 'wolf', 'sheep']));
// console.log('');
// console.log(warnTheSheep(['sheep', 'sheep', 'sheep', 'wolf']));
// console.log('');

///----------------------------------------------------------------------------------------------------------

//Write a program that outputs the top n elements from a list.
// function largest(n, array) {
//   //   const res = new Set(array);
//   const res = [...array].sort((a, b) => a - b).slice(array.length - n);
//   //   const res = [...array].sort((a, b) => a - b);

//   return res;
// }

// console.log(largest(3, [7, 6, 5, 4, 3, 2, 1]));
// console.log(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
// console.log(largest(0, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));

///----------------------------------------------------------------------------------------------------------
// Covfefe
// function covfefe(str) {
//   //   console.log(str);
//   //   return !str.includes('coverage')
//   //     ? `${str} covfefe`
//   //     : str
//   //         .split(' ')
//   //         .map(word => (word !== 'coverage' ? word : 'covfefe'))
//   //         .join(' ');

//   //   if (!str.includes('coverage')) {
//   //     return `${str} covfefe`;
//   //   }

//   //     return str.replace(/coverage/g, 'covfefe');

//   return !str.includes('coverage') ? `${str} covfefe` : str.replace(/coverage/g, 'covfefe');
// }

// console.log(covfefe('coverage sadfsdf coverage assaaaa'));
// console.log(
//   covfefe(
//     'v6re ww5gf mp4gg xmk1ccoveragep0zz kiyw9 dy1rc 2mo9 gpx6vcoverageht4lm yyycoveragenxr3j 3osrm',
// //   ),
// // );

// ///----------------------------------------------------------------------------------------------------------
// // Asperand pixel counting

// function countPixels(k) {
//   // const minusSquare = (k - 2) * (k - 2);
//   // const insideSquare = k * k;
//   // const firstSq = insideSquare - (minusSquare >= 0 ? minusSquare : 0);
//   // const rest = (k + 2) * 4 - 3 + 1;
//   // const result = firstSq + rest;
//   // return result;

//   // const minusSq = getMinusSquarePx(k);

//   // if (k < 3) return 0;
//   // if (k === 3) return 1;

//   const insideSq = k !== 1 ? (k - 2) * 4 + 4 : 1;
//   const outsideSq = (k + 2) * 4 - 3;
//   const bridge = 1;
//   return insideSq + outsideSq + bridge;
// }

// console.log(countPixels(1));
// console.log(countPixels(2));
// console.log(countPixels(3));
// console.log(countPixels(4));
// console.log(countPixels(5));
// console.log(countPixels(620596355));

// // 620596355; 385139833356900600

// /*
// 3  4  5  6   7
// 1  4  9  16  25

// count = 1
// for(i=4, i<=7, i++){
//   count += 2
// }

// function test(k) {
//   let count = 1;
//   let sum = 1;
//   // sum += count;
//   for (let i = 4; i <= k; i++) {
//     count += 2;
//     sum += count;
//     // console.log(`num=${i}, sum=${sum}`);
//   }
// }
// test(10);

// function getMinusSquarePx(k) {
//   if (k < 3) return 0;
//   if (k === 3) return 1;

//   let count = 1;
//   let sum = 1;

//   for (let i = 4; i <= k; i++) {
//     count += 2;
//     sum += count;
//   }
//   return sum;
// }

// console.log(getMinusSquarePx(620596355));

// function setReducer(input) {
//   let arr = [...input];
//   let reducedArr = [];

//   while (true) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] !== arr[i + 1]) {
//         reducedArr.push(1);
//         continue;
//       }
//       let count = 1;
//       while (arr[i] === arr[i + 1]) {
//         count++;
//         i += 1;
//       }
//       reducedArr.push(count);
//     }

//     if (reducedArr.length === 1) {
//       break;
//     }
//     arr = reducedArr;
//     reducedArr = [];
//   }
//   return reducedArr[0];
// }

// function setReducer(input) {
//   let arr = [...input];
//   let reducedArr = [];

//   while (true) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] !== arr[i + 1]) {
//         reducedArr.push(1);
//         continue;
//       }
//       let count = 1;
//       while (arr[i] === arr[i + 1]) {
//         count++;
//         i += 1;
//       }
//       reducedArr.push(count);
//     }

//     if (reducedArr.length === 1) {
//       break;
//     }
//     arr = reducedArr;
//     reducedArr = [];
//   }
//   return reducedArr[0];
// }

// console.log(setReducer([2, 4, 9]));
// console.log(setReducer([6, 6, 6, 6]));
// console.log(setReducer([0, 4, 6, 8, 8, 8, 5, 5, 7]));
// console.log(setReducer([9, 4, 1, 1, 1, 2, 3, 9, 4, 6, 2]));
// console.log(setReducer([5, 7, 7, 8, 7, 8, 6, 3, 5, 9, 0, 9, 1, 1])); //
// console.log(setReducer([1, 7, 0, 6, 1, 9, 0, 7, 1, 6, 0, 9, 0])); //

//------------------------------------------------------------------------------------
//Hamming Distance
// function hamming(a, b) {
// const str1 = a.split('');
// const str2 = b.split('');
// let count = 0;
// str1.forEach((val, i, arr) => {
//   if (val !== str2[i]) {
//     count++;
//   }
// });

// return count;

// return (a + b).split('').reduce((acc, val, i, arr) => {
//   if (val !== arr[arr.length / 2 + i] && i < arr.length / 2) {
//     return acc + 1;
//   } else {
//     return acc;
//   }
//   // return val !== arr[arr.length / 2] && i < arr.length / 2 ? acc + 1 : acc;
// }, 0);

//   return (a + b).split('').reduce((acc, val, i, arr) => {
//     return val !== arr[arr.length / 2 + i] && i < arr.length / 2 ? acc + 1 : acc;
//   }, 0);
// }

// console.log(hamming('I like turtles', 'I like turkeys')); //3
// console.log(hamming('Hello World', 'Hello World')); //0
// console.log(hamming('espresso', 'Expresso')); //2

// //------------------------------------Land perimeter----------------------------------------
// function landPerimeter(arr) {
//   function getCount(arr, i, j) {
//     let count = 0;

//     //left
//     if (j - 1 < 0) {
//       count++;
//     } else if (arr[i][j - 1] !== 'X') {
//       count++;
//     }

//     //right
//     if (j + 1 >= arr[i].length) {
//       count++;
//     } else if (arr[i][j + 1] !== 'X') {
//       count++;
//     }

//     //top
//     if (i - 1 < 0) {
//       count++;
//     } else if (arr[i - 1][j] !== 'X') {
//       count++;
//     }

//     //bottom
//     if (i + 1 >= arr.length) {
//       count++;
//     } else if (arr[i + 1][j] !== 'X') {
//       count++;
//     }

//     return count;
//   }

//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] !== 'X') {
//         continue;
//       }
//       count += getCount(arr, i, j);
//     }
//   }
//   return `Total land perimeter: ${count}`;
// }

// console.log(landPerimeter(['XOOXO', 'XOOXO', 'OOOXO', 'XXOXO', 'OXOOO']));

// function test(arr) {
//   arr.reduce((acc, val, i, arr) => {}, 0);
// }

/*
['XOOXO',
 'XOOXO',
 'OOOXO',
 'XXOXO',
 'OXOOO'] 
 
 */

// function getCount(arr, i, j) {
//   let count = 0;

//   //left
//   if (j - 1 < 0) {
//     count++;
//   } else if (arr[i][j - 1] !== 'X') {
//     count++;
//   }

//   //right
//   if (j + 1 >= arr[i].length) {
//     count++;
//   } else if (arr[i][j + 1] !== 'X') {
//     count++;
//   }

//   //top
//   if (i - 1 < 0) {
//     count++;
//   } else if (arr[i - 1][j] !== 'X') {
//     count++;
//   }

//   //bottom
//   if (i + 1 >= arr.length) {
//     count++;
//   } else if (arr[i + 1][j] !== 'X') {
//     count++;
//   }

//   return count;
// }

// console.log(getCount(['XOOXO', 'XOOXO', 'OOOXO', 'XXOXO', 'OXOOO'], 2, 3));
//------------------------------------Land perimeter----------------------------------------

// function sumOfMinimums(arr) {
//   return arr.reduce(
//     (accum, val) => accum + val.reduce((acc, _, i, ar) => (acc < ar[i] ? acc : ar[i]), val[0]),
//     0,
//   );
// }

// console.log(
//   sumOfMinimums([
//     [1, 2, 3, 4, 5],
//     [5, 6, 7, 8, 9],
//     [20, 21, 34, 56, 100],
//   ]),
// );

// const exp1 = null || ('cat' && 'dog');
// const exp2 = ('' && 'owl') || 0;
// const result = exp1 || exp2;
// console.log('' && 'owl');
