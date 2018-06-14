var array;
var index;
var myVar;

myVar = 'my string';
myVar = 5;

// console.log(myVar);

array = ['cat', 'dog', 'things'];

array.push(myVar);

array[array.length] = 'no push';

// console.log(array.pop());

// console.log(array);

// console.log('index on 20', index);

// for (let index = 0; index < array.length; index++) {
//   console.log('inside loop', index, array[index]);
// }

// console.log('outside loop', index);

// for (var index in array) {
  // console.log('this is index ==> ', index, array[index]);
//   console.log('for in', index);
// }
//
//
// for (var element of array) {
//   console.log('for of', element);
// }

// for (var [index, element] of array.entries()) {
//   // var index = thing[0];
//   // var element = thing[1];
//   console.log('more things', index, element);
// }


// function printValue(...rest) {
//   // childInfo = 'some child data';
//   // console.log(arguments);
//   console.log(rest);
//   console.log('inside func', rest[0]);
// }
// printValue('Jason', 345, true, false);
// console.log(childInfo);

var person = {
  'name': 'Jason',
  key: 'this is a key',
  'hair-colour': 'purple',
};

person.age = 999;
person['eyeColour'] = 'red';
// console.log(person);
for (var key in person) {
  // console.log(person[key]);
}


function count() {
  var counter = 0;

  function child() {
    return ++counter;
  }

  return child;
}

count = count();
console.log(count);
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());

// count() => 1
// count() => 2
// count() => 3
// count() => 4
// count() => 5
// count() => 6
