const color = require('colors');
/**
* Create middleware that reports information about the incoming http request
* Certain elements will be objects(body, etc), display the key value pairs
* Items to report iff they have value, use colors (an external module):
*                 method
*                 hostname
*                 ip
*                 body
*                 params
*                 protocol
*                 route
*                 path
*                 query
*/


module.exports = function (request, response, next) {
  console.log('inside logger middleware');

  const keys = ['method', 'hostname', 'ip', 'body', 'params', 'path', 'protocol', 'route', 'query'];

  keys.forEach(key => {
    // console.log('key is ... ', key);

    const data = request[key];

    if (data) {
      // console.log(data);
      if (typeof data === 'object') {
        // further processing
        // data.length ??

        // let hasValue = false;

        // for (const prop in data) {
        //   hasValue = true;
        //   break;
        // }

        // console.log(`${key} has value? : ${hasValue} `);

        if (Object.keys(data).length) {
          console.log(color.random(`The request ${key} object has these properties::`));

          for (const [property, value] of Object.entries(data)) {
            console.log(color.bgCyan(`\t${property} => ${value}`));
          }
        }

      } else {
        console.log(color.blue(`The request ${key} is ${data}`))
      }

    }
  });
  // if (request.method) {

  // }

  // if (request.route) {

  //   console.log(request.route)
  // }

  next();
};
