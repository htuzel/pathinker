
// Express App Setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet')
const config = require('config');
const redis = require('redis');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(helmet())

//Redis
// Redis Client Setup
const redisClient = redis.createClient({
    host: config.get('Redis.Host'),
    port: config.get('Redis.Port'),
    retry_strategy: () => 1000
});

//REDIS TEST ROUTES
app.get('/redis/put', (req, res) => {
    redisClient.hset('test', 'ads', 'Nothing yet!');
    res.send('Done');
});

app.get('/redis/get', (req, res) => {
    redisClient.hgetall('test', (err, values) => {
        res.send(values);
    });
});


//MongoDB
mongoose.connect('mongodb://' + config.get('Mongo.Host') + ':' + config.get('Mongo.Port'))
    .catch(err => {
        console.log(err)
    })

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Yayy! Connected!")
});

app.get('/', (req, res) => {
    res.send('Hello World!');

});


app.listen(5000, err => {
    console.log('Listening');
});