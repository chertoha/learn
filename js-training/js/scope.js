console.log('SCOPE');

console.log('1)');
if (true) {
  var a = 'Var a';
}

console.log('var a=', a); //Var a

console.log('2)');

for (let i = 0; i < 10; i++) {
  var b = 'Var b';
}

console.log('var b=', b);

console.log('3)');
function func() {
  c = 'Var c';
}
var c;
console.log('var c=', c);

console.log('4) Closures - замыкание');

const closure = a => {
  const obj = {};
  obj.a = a;

  return b => {
    obj.b = b;
    return obj;
  };
};

const F = closure('Name');
const obj = F('last name');

console.log(obj);

console.log('5) Closures in for - замыкание ');

for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

console.log('6) Custom map function');

function cmap(arr, callback) {
  const newArr = [];

  arr.forEach(value => {
    const temp = callback(value);
    if (temp) {
      newArr.push(temp);
    } else {
      newArr.push(value);
    }
  });
  return newArr;
}

const arr = [1, 7, 10, 2, 5];
const newArr = cmap(arr, val => {
  return `test${val}`;
});
console.log('NewArr = ', newArr);

console.log('7) Custom filter function');
function cFilter(arr, callback) {
  const newArr = [];

  arr.forEach(value => {
    const isTrue = callback(value);
    if (isTrue) {
      newArr.push(value);
    }
  });
  return newArr;
}

const filteredArr = cFilter(arr, val => {
  return val >= 5;
});

console.log(filteredArr);

console.log('8) arguments');

function argFunc(...args) {
  console.log(arguments);
  console.log(args);
}

argFunc(1, 33, 2);

console.log('typeof', typeof null);

console.log(Array(8).join('js' - 1) + ' RULES');
