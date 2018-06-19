

function Person(name, items) {
  if (!(this instanceof Person)) {
    // console.log('I am a not person', name);
    return new Person(name, items);
  }
  // this = new Person()
  // const person = { name };
  this.name = name;
  this.items = items;

  // console.log(this);
  // this.take = take;



  // return this;
}

// class Person {
//   constructor(name, items) {
//     this.name = name;
//     this.items = items;
//   }

//   take() { }
// }

Person.prototype.take = function take(item, target) {
  // console.log(this);
  if (!target || !Array.isArray(target.items)) {
    throw new Error('target requires an items array');
  }

  for (let index = 0; index < target.items.length; index++) {
    if (item === target.items[index]) {
      // slice copy of content
      // splice mutates array
      this.items.push(item);
      target.items.splice(index, 1);
      // ['gold']

      return true;
    }
  }

  return false;
}


const jason = Person('Jason', ['phone', 'keys', 'money']);
const bob = new Person('Bob', ['lint', 'gum', 'gold']);
// jason.name => Jason
// console.log(jason);

console.log(jason.take('gold', bob));

console.log(jason);
console.log(bob);


const backpack = {
  items: ['compass', 'map', 'trailmix'],
};
console.log(backpack);
jason.take('trailmix', backpack)
console.log(backpack);
console.log(jason);

// backpack.take = jason.take;

const func = bob.take.bind(backpack, 'gold');
console.log(backpack);
console.log(jason);
console.log(func(jason));
