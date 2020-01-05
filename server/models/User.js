const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require("bcryptjs"),

    saltRounds = 5,
    UserSchema = new mongoose.Schema({
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        status: {
            type: String,
            default: "active"
        }
    },
    { timestamps: true });

UserSchema.pre("save", function (next) {
    if (this.isNew || this.isModified("password")) {
        const document = this;
        bcrypt.hash(document.password, saltRounds,
            function (err, hashedPassword) {
                if (err) {
                    next(err);
                } else {
                    document.password = hashedPassword;
                    next();
                }
            });
    } else {
        next();
    }
});

UserSchema.methods.isCorrectPassword = function (password, callback) {
    bcrypt.compare(password, this.password, function (err, same) {
        if (err) {
            callback(err);
        } else {
            callback(err, same);
        }
    });
};

UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", UserSchema);