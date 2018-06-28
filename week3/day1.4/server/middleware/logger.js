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
  console.log('logger middleware');
  const keys = ['method', 'hostname', 'ip', 'body', 'params', 'path', 'protocol', 'route', 'query'];

  keys.forEach(key => {
    const data = request[key];
    // console.log('key', key)
    // console.log(request[key]);
    if (data) {

      if (typeof data === 'object') {

        if (Object.keys(data).length) {
          console.log(color.dim(`The request ${key} object has the following properties: `));
          for (const [prop, value] of Object.entries(data)) {
            console.log(color.red(`${prop} => ${value}`));
          }
        }

        // console.log('OBJECT KEYS', Object.keys(data))
        // let hasLength = false;
        // for (const param in data) {
        //   hasLength = true;
        //   break;
        // }

        // console.log('has length', hasLength);

      } else {
        console.log(color.random(`The request ${key} is ${data}`));
      }
      // console.log(data);
    }
  });

  // console.log('params', request.params);

  next();
};
