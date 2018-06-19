

function map(array, callback) {
  const results = [];


  for (let index = 0; index < array.length; index++) {
    // console.log('index', index, array[index]);

    // const item = array[index] + ' what are you talking about?';

    // console.log('item', item);

    const result = callback(array[index], index, array);

    // console.log('result from callback', result);

    results.push(result);
  }

  return results;
}


const stringArray = ['cawt', 'dawg', 'caow'];

const res = map(stringArray, function (element, indexFromMap) {
  // console.log('inside anon func', element, indexFromMap);

  return `Found ${element} at ${indexFromMap}`;
});

const rez = map(res, function (element, indexFromMap) {
  // console.log('inside anon func', element, indexFromMap);

  return element + indexFromMap;
});

// console.log(res);
// console.log(rez);


// console.log('before');

// function printName(name) {
//   setTimeout(function () {
//     console.log(`Hello ${name}`);
//   }, 3000);
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
  console.log('inside callback 2 seconds in the future!', things);

  things.forEach(thing => console.log(`I am ${thing}`));
 });

