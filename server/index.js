
// Express App Setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet')
const config = require('config');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(helmet())

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(5000, err => {
    console.log('Listening');
});
