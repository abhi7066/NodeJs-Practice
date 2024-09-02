##### Creating a Node Server

````javascript
const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method, req.headers);
    // process.exit();  This will quit server and event loop will stop listening.

});

server.listen(3000);
````


##### Sending responses using write method

```javascript
const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method, req.headers);
    res.setHeader('content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first node js page</title></head>');
    res.write('<body><h1>Hello from Node js!</h1></body>');
    res.write('</html>');
    res.end();
  git
});

server.listen(3000);
````

// ##### Sending responses using write method
