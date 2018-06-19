

function map(array, callback) {
  const results = [];

  // console.log(callback.toString());

  for (let index = 0; index < array.length; index++) {
    // console.log('index + element', array[index], index);
    // const item = array[index];
    // const modded = item + ' this is new content';
    const modded = callback(array[index], index, array);
    results.push(modded);
  }

  return results;
}

const stringArray = ['cat', 'dog', 'cow'];
const numArray = [1, 2, 4, 345, 345, 7, 34];
// console.log(map(stringArray, function (element) {
//   // console.log('inside anon func', element);

//   return element + ' modded in callback';

// }));
// console.log(map(numArray, function (element, indexFromMap) {
//   // console.log('inside anon func', element);
//   return element * indexFromMap;

// }));


// console.log(stringArray);


// console.log('before');

// function printName(name) {
//   setTimeout(function () {
//     console.log(`Hello, ${name} `);
//   }, 2000);
// }

// printName('Jason');

// console.log('after');


function getThingsFromDB(query, callback) {
  console.log(query);

  return setTimeout(function () {
    const data = ['thing1', 'thing2', 'thing3'];
    callback(data);
  }, 2000);
}



getThingsFromDB('select * from things;', function (things) {
  console.log('inside anon func', things);

  things.forEach(thing => console.log(`I am ${thing}`));
 });

