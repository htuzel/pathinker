/*global redisClient, app*/

const jwtAuth = require("../middlewares/jwtAuth");

module.exports = function () {

    //REDIS TEST ROUTES
    app.get("/redis/put", (req, res) => {
        redisClient.hset("test", "ads", "Nothing yet!");
        res.json({
            success: true
        });
    });

    app.get("/redis/get", (req, res) => {
        redisClient.hgetall("test", (err, values) => {
            res.json(values);
        });
    });

    app.get("/status", (req, res) => {
        res.json({
            "success": true
        });
    });

    app.get("/jwt-test", jwtAuth, (req, res) => {
        res.json({
            "success": true
        });
    });
    

};