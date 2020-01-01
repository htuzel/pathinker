/*global redisClient, app*/

module.exports = function () {

    //REDIS TEST ROUTES
    app.get("/redis/put", (req, res) => {
        redisClient.hset("test", "ads", "Nothing yet!");
        res.send("Done");
    });

    app.get("/redis/get", (req, res) => {
        redisClient.hgetall("test", (err, values) => {
            res.send(values);
        });
    });

    app.get("/status", (req, res) => {
        res.send({
            "success": true
        });
    });
    

};