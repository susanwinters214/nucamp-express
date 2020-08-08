const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const campsiteRouter = require('./routes/campsiteRouter');
const hostname = 'localhost';
const port = 3000;
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/campsites', campsiteRouter);
app.use(express.static(__dirname + '/public'));

app.get((req, res) => {    
    res.sendFile(__dirname + './index.html') = 200;   
});


app.listen(port, hostname, () => { console.log(`Server running on port ${port}`)});