##### Creating a Node Server

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // process.exit();  This will quit server and event loop will stop listening.
});

server.listen(3000);
```

##### Sending responses using write method

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader("content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first node js page</title></head>");
  res.write("<body><h1>Hello from Node js!</h1></body>");
  res.write("</html>");
  res.end();
  git;
});

server.listen(3000);
```

##### Redirecting requests and Parsing request body

```javascript
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    // checking if url is '/' or not, if yes then following will run.
    res.write("<html>");
    res.write("<head><title>Enter Message</title><head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end(); // use return because it should not run following code.
  }
  if (url === "/message" && method === "POST") {
    // checking if url is '/message' or not
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parseBody = Buffer.concat(body).toString(); // Streams and buffer concept is used
      // console.log(parseBody);        ---> message=I+am+ready%21
      const message = parseBody.split("=")[1]; // This will split message into two parts by (=) sign and get 1st position index from it.
      fs.writeFileSync("message.txt", message);
    });
    res.statusCode = 302; // code for redirect
    res.setHeader("Location", "/"); // redirect location
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title><head>");
  res.write("<body><h1>Hello from my Node.js Server!<h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
```

```javascript
return req.on("end", () => {   // used return because we don't want the code after req.on block to get executed in the same request.
  const parseBody = Buffer.concat(body).toString();
  const message = parseBody.split("=")[1];
  // writeFileSync - Synchronus and block the next code to get executed.
  // eg. if file size is 100MB then it will take a lot time to write in file and slow down the time.

  // writeFile - Async and dosn't block the code.
  fs.writeFile("message.txt", message, (err) => {   
    // Event listener is created for callback implicitly by NodeJs(We don't write)
    // callback inside writeFile triggered when error occure during writting a file.
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  });
});
```