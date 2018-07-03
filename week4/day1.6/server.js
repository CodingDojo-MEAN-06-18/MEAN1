const mongoose = require('mongoose');
const { Schema } = mongoose;
// const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/animals');
mongoose.connection.on('connected', () => console.log('Connected to MongoDB'));

// const person = {
//   name: 'Jason',
//   age: 23
// };

// const name = 'Bob';
// const { name: personName, age } = person;

// console.log(name, age, personName);
'data'
const animalSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please supply an animal name'],
    trim: true,
  },
  legs: {
    type: Number,
    required: [true, 'I need legs'],
    min: [0, 'Give me some legs'],
  },
  eatsPeople: {
    type: Boolean,
    default: false
  },
}, {
    timestamps: {
      createdAt: 'created_at'
    }
});

// register resource animal
// collection => animals
const Animal = mongoose.model('Animal', animalSchema);



// assume some other file
// const Animal = mongoose.model('Animal');

const animal = new Animal({
  name: 'badger',
  legs: 4,
  // eatsPeople: false,
});

// console.log(animal.save());

animal.save()
  .then(animal => {
    // handle animal success
    console.log(animal);
  })
  .catch(error => {
    // handle failure
    // console.log(error.errors.name.message);

    const errors = Object.keys(error.errors).map(key => error.errors[key].message);

    // for (let index = 0; index < keys.length; index++) {
    //   // console.log(keys[index]);
    //   errors.push(error.errors[keys[index]].message);
    // }


    console.log('errors', errors);

    // response.render('errorPage', { errors });
  });

// animal.save(function (error, cat) {
//   // console.log(error, cat);
//   if (error) {
//     // handle error
//     throw error;
//   }

//   // handle cat
//   console.log(cat);
// });
