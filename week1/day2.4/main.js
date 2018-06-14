

function Person(name, items) {
  if (!(this instanceof Person)) {
    console.log('I am a not person', name);
    return new Person(name, items);
  }
  // const person = { name };
  this.name = name;
  this.items = items;

  // console.log(this);
  // this.take = take;



  // return this;
}

Person.prototype.take = function take(item, target) {
  console.log(this);
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

console.log(WeakSet.prototype);
// jason.name => Jason
// console.log(jason);

// console.log(take('gold', bob));

console.log(jason);
console.log(bob);
