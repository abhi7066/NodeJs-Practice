const http = require('http');
const routes = require('./routes') // alias can be anything

console.log(routes.someText);

// const server = http.createServer(routes); if single module is exported
const server = http.createServer(routes.handler);

server.listen(3000);
