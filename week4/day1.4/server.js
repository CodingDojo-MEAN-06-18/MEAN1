const mongoose = require('mongoose');
const { Schema } = mongoose;



mongoose.connect('mongodb://localhost/animals');

mongoose.connection.on('connected', () => console.log('Connected to MongoDB'));


// const person = {
//   name: 'Jason',
//   age: 567,
// };

// const name = 'Bob';
// // const age = person.age;
// const { name: personName, age } = person;

// console.log(name, age,  personName);

const animalSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide an animal name'],
    trim: true,
  },
  age: Number,
  legs: {
    type: Number,
    required: [true, 'Give me legs!'],
    min: [0, 'I need more legs'],
  },
  eatsPeople: {
    type: Boolean,
    default: false,
  },
}, {
    timestamps: true,
});

// collection => animals
const Animal = mongoose.model('Animal', animalSchema);



// assume different file

// const Animal = mongoose.model('Animal');

// console.log(Animal);

const animal = new Animal({
  name: 'Bob',
  legs: 0,
  eatsPeople: true,
});



// animal.save(function (error, animal) {
//   // console.log(error, animal);
//   if (error) {
//     // handle error
//     throw error;
//   }


//   // handle data

//   console.log(animal);
// });

// console.log(animal.save());

animal.save()
  .then(animal => {
    // success
    console.log(animal);
  })
  .catch(error => {
    // handle error
    // console.log(error.errors.name.message);


    const errors = Object.keys(error.errors)
      .map(key => error.errors[key].message);


    // console.log(keys);

    // for (let index = 0; index < keys.length; index++) {
    //   errors.push(error.errors[keys[index]].message);
    // }

    console.log('errors', errors);

    // response.render('errorPage', { errors });
  });
