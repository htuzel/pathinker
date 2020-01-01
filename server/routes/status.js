/*global redisClient, app*/

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
    

};