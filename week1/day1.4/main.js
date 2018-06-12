var myVar;
var index;
var array;
myVar = 'a string';
myVar = 5;

// console.log(index);


array = ['cat', 'things', 'dog'];

array.push(myVar);

// console.log(array[0]);

// for (let index = 0; index < array.length; ++index) {
//   console.log(array[index]);
// }
//
// console.log('outside loop', index);
//


// for (var index in array) {
//   console.log(array[index]);
// }

// for (var [index, element] of array.entries()) {
//   // var index = thing[0];
//   // var element = thing[1];
//
//   console.log('thing is ===> ', index, element);
// }

function printValue(...rest) {
  console.log(rest);
  console.log('inside function');
}

// printValue('Jason', true, false, 99);



function outer() {
  function inner() {
    console.log('inner function', count);
  }
  var count = 0;

  inner();

  console.log('outer function');

  return;
}

var person = {
  'name': 'Jason',
  key: 'no thanks',
  'hair-color': 'purple',
};

person.age = 999;

person['eyeColor'] = 'brown';

console.log(person);

for (var key in person) {
  console.log(person[key]);
}


// console.log(outer());
