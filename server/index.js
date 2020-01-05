
/* exported redisClient, app, db */
/*global redisClient:writable, app:writable, db:writable*/

// Express App Setup
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const config = require("config");
const redis = require("redis");
const mongoose = require("mongoose"),
    mongoHost = config.get("Mongo.Host"),
    mongoPort = config.get("Mongo.Port");

//Global variables (without var, let, const)
redisClient = redis.createClient({
    host: config.get("Redis.Host"),
    port: config.get("Redis.Port"),
    retry_strategy: () => 1000
});

app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(helmet());

//MongoDB
if (process.env.NODE_ENV !== "test") {
    if (process.env.NODE_ENV !== "production") {
        mongoose.connect("mongodb://" + mongoHost + ":" + mongoPort,
            { autoIndex: false })
            .catch(err => {
                console.log(err);
            });
    } else {
        mongoose.connect("mongodb://" + mongoHost + ":" + mongoPort)
            .catch(err => {
                console.log(err);
            });
    }
}
//Global variables (without var, let, const)
db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log("Yayy! Connected!");
});


if (process.env.NODE_ENV !== "test") {
    app.listen(5000, () => {
        console.log("Listening", 5000);
    });
}

require("./routes")();

module.exports = app;
