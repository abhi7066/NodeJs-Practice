// Creating a node server

// const http = require('http');

// const server = http.createServer((req, res)=>{
//     console.log(req.url, req.method, req.headers);
//     process.exit()

// });

// server.listen(3000);

const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method, req.headers);
    res.setHeader('content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first node js page</title></head>');
    res.write('<body><h1>Hello from Node js!</h1></body>');
    res.write('</html>');
    res.end();

});

server.listen(3000);