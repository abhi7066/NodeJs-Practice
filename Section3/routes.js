const fs = require('fs');

// function requestHandler ((req, res)=>{}) we could write this way also
const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            // console.log(parseBody);        ---> 'message=i+am+ready%21'
            const message = parseBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!<h1></body>');
    res.write('</html>');
    res.end();
};

// module.exports = requestHandler; // requestHandler is stored in the module.exports which is global object

// module.exports = {
//     handler: requestHandler,
//     someText: 'Random test which you want to pass'
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'Random test which you want to pass2';


exports.handler = requestHandler;
exports.someText = 'Random test which you want to pass2';