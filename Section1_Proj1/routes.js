const userData = (req, res) => {
    const url = req.url;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Home Page</title><head>');
        res.write('<body><form action=\'/create-user\' method="POST"><input type="text" name="username"><button type="submit">Send</button><form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>User Datails</title><head>');
        res.write('<body><ul><li>User1</li><li>User2</li><li>User3</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        return req.on('end', () => {
            const parseMsg = Buffer.concat(body).toString();
            const username = (parseMsg.split('=')[1]).toUpperCase();
            res.write('<html>');
            res.write('<head><title>Create user</title><head>');
            res.write(`<body><h1>Welcome, ${username}</h1></body>`);
            res.write('</html>');
            res.end();
        });

    }


};

module.exports = userData;