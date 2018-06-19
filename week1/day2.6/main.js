
function Person(name, items) {
  if (!(this instanceof Person)) {
    console.log('I am not a person', name);
    return new Person(name, items);
  }
  this.name = name;
  // console.log(this);
  // const person = { name };

  this.items = items;

  // this.take = take;


  // return this;
  // return person;
}

Person.prototype.take = function take(item, target) {
    // protect code to retrieve item
    console.log('this is ', item);
  if (!target || !Array.isArray(target.items)) {
    console.log('target has no items');
    throw new Error('target must have an items array');
  }

  for (let index = 0; index < target.items.length; index++) {
    if (target.items[index] === item) {
      // slice (index, ?endIndex) => ['gold'] => ['lint', 'gum', 'gold']
      // splice (index, ?numOfPositions) => ['gold'] => ['lint', 'gum']
      this.items.push(item);
      target.items.splice(index, 1);

      return true;
    }
  }

  return false;
}

const jason = Person('Jason', ['phone', 'keys', 'money']);
const bob = new Person('Bob', ['lint', 'gum', 'gold']); // ['gold']

// console.log(jason.name); // Jason
// console.log(jason);
// console.log(jason instanceof Person);



jason.take('gold', bob);
bob.take('money', jason);

console.log(jason);
console.log(bob);

const backpack = {
  items: ['map', 'compass', 'trailmix'],
};
// backpack.take = jason.take;
console.log(backpack);

jason.take('trailmix', backpack);
// backpack.take('gold', jason);

const bound = bob.take.bind(backpack, 'gold');

console.log(bound(jason));
console.log(bob);
console.log(jason);
console.log(backpack);
