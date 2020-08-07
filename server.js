const express = require('express');
const app = express();
const hostname = 'localhost';
const port = 3000;

app.use((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Your New Express Server</h1></body></html>');
    });

app.listen(port, hostname, () => { console.log(`Server running on port ${port}`)});