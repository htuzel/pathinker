
const cron = require("node-cron");
const config = require("config");
const redis = require("redis");
const mongoose = require("mongoose"),
    redisClient = redis.createClient({
        host: config.get("Redis.Host"),
        port: config.get("Redis.Port"),
        retry_strategy: () => 1000
    }),
    mongoHost = config.get("Mongo.Host"),
    mongoPort = config.get("Mongo.Port");

console.log("Cron is working");

//MongoDB
mongoose.connect("mongodb://" + mongoHost + ":" + mongoPort)
    .catch(err => {
        console.log(err);
    });

//Redis
redisClient.hgetall("test", (err, values) => {
    console.log("Redis Values:", values);
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log("Yayy! Connected!");
});

// schedule tasks to be run on the server   
/*----------------------------------------*/
cron.schedule("* * * * *", function () {
  console.log("running a task every minute");
});