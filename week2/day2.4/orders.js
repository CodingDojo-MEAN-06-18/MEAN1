function orderSupplies(item) {
  let warehouse; //undefined
  const deliveryTime = Math.random() * 3000;

  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      warehouse = {
        paint: {
          product: 'Neon Green Paint',
          directions: function() { return 'mix it!' }
        },
        brush: {
          product: 'Horsehair brush',
          directions: function() { return 'start painting!' }
        },
        tarp: {
          product: 'A large tarp',
          directions: function () { return 'cover the floor' }
        }
      };

      if (item in warehouse) {
        resolve(warehouse[item]);
      } else {
        reject(new Error(`Warehouse item ${item} is out of stock`));
      }

    }, deliveryTime);
  });
}

function receivedItem(item) {
  console.log(`Received ${item.product}, time to ${item.directions()}`);
}

const tarp = orderSupplies('tarp');
const paint = orderSupplies('paint');
const paint2 = orderSupplies('paint');
const brush = orderSupplies('brush');
const roller = orderSupplies('roller')

// tarp
//   .then(receivedItem)
//   .then(function () {
//     return paint;
//   })
//   .then(function (item) {
//     receivedItem(item);
//     return paint2;
//   })
//   .then(function (item) {
//     receivedItem(item);
//     return brush
//       .then(receivedItem);
//   })
//   .then(function () {
//     return roller;
//   })
//   .then(receivedItem)
//   .catch(handleError);

Promise.all([tarp, paint, paint2, brush, roller])
  .then(function (items) {
    items.forEach(receivedItem);
  })
  .catch(handleError)

function handleError(error) {

  console.log(error.message);
}


// solution #1
// orderSupplies('paint', function (item) {
//   receivedItem(item);
//   orderSupplies('brush', receivedItem);
// });


// solution #2

// let havePaint = false;

// orderSupplies('paint', function (item) {
//   receivedItem(item);

//   havePaint = true;
// });

// orderSupplies('brush', handleBrush);

// function handleBrush(item) {
//   console.log('....checking for paint...', item);
//   if (havePaint) {
//     return receivedItem(item);
//   }

//   setTimeout(handleBrush, 10, item);
// }

// orderSupplies('brush', function (item) {
//   if (havePaint) {
//     receivedItem(item);
//   } else {
//     const timer = setInterval(function () {
//       console.log('....checking for paint...');

//       if (havePaint) {
//         clearInterval(timer);

//         receivedItem(item);
//       }
//      }, 50);
//   }
// });


// solution #3

// let havePaint = false;
// let haveBrush = false;

// orderSupplies('paint', function (item) {
//   console.log('got paint');
//   receivedItem(item);


//   if (haveBrush) {
//     // ? ???
//     return receivedItem(haveBrush);
//   }

//   havePaint = true;
// });
// orderSupplies('brush', function (item) {
//   console.log('got brush');

//   if (havePaint) {
//     return receivedItem(item);
//   }

//   haveBrush = item;
// });



// const paint = new Promise(function (resolve, reject) {
//   console.log(resolve);
//   console.log(reject);

//   orderSupplies('paint', resolve);
// });

// const brush = new Promise(function (resolve, reject) {
//   console.log(resolve);
//   console.log(reject);

//   orderSupplies('brush', resolve);
// });

// const tarp = new Promise(function (resolve, reject) {
//   orderSupplies('tarp', resolve);
// });


// tarp
//   .then(function (item) {
//     receivedItem(item);
//     return paint;
//   })
//   .then(function (item) {
//     receivedItem(item);

//     return brush;
//   })
//   .then(function (item) {
//     receivedItem(item);
//   })
//   .catch(function () { });

// console.log(paint);


//
