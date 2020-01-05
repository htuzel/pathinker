/*global app*/

const jwt = require("jsonwebtoken");
const config = require("config");

const User = require("../models/User.js");

module.exports = function () {

    // POST route to register a user
    app.post("/register", function (req, res) {
        const {
                email,
                password
            } = req.body,
            user = new User({
                email,
                password
            });
        user.save(function (err) {
            if (err) {
                res.status(500)
                    .json({
                        success: false,
                        error: "Internal error please try again"
                    });
            } else {
                res.status(200).json({
                    success: true
                });
            }
        });
    });


    app.post("/authenticate", function (req, res) {
        const {
            email,
            password
        } = req.body;
        User.findOne({
            email
        }, function (err, user) {
            if (err) {
                console.error(err);
                res.status(500)
                    .json({
                        success: false,
                        error: "Internal error please try again"
                    });
            } else if (!user) {
                res.status(401)
                    .json({
                        success: false,
                        error: "Incorrect email or password"
                    });
            } else {
                user.isCorrectPassword(password, function (err, same) {
                    if (err) {
                        res.status(500)
                            .json({
                                success: false,
                                error: "Internal error please try again"
                            });
                    } else if (!same) {
                        res.status(401)
                            .json({
                                success: false,
                                error: "Incorrect email or password"
                            });
                    } else {
                        // Issue token
                        const payload = {
                                email
                            },
                            token = jwt.sign(payload, config.get("Auth.Key"), {
                                expiresIn: "24h"
                            });
                        res.cookie("token", token, {
                            httpOnly: true
                        })
                            .sendStatus(200);
                    }
                });
            }
        });
    });


};