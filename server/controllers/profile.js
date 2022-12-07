const jwt = require("jsonwebtoken");
const Profiles = require("../model/profile");
const { validationResult } = require("express-validator");

exports.getProfile = async(req, res, next) => {
    await Profiles.find()
        .then((x) => {
            res.status(200).send(x);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};
exports.getProfileByUsername = async(req, res, next) => {
    await Profiles.find({ username: req.params.username })
        .then((x) => {
            res.status(200).send(x);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};
exports.postRegister = async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).send(errors.errors);
    } else {
        await Profiles.create(req.body)
            .then((x) => {
                res.status(201).send(x);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    }
};
exports.postLogin = async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await Profiles.findOne({ username });
    if (!user) {
        return res.status(404).send({
            message: "Username or password doesn't matched",
        });
    } else {
        if (user.password !== password) {
            return res.status(401).send({
                message: "Username or password doesn't matched",
            });
        } else {
            //generate jwt token
            const token = jwt.sign({ username: user.username, fullName: user.fullName },
                "fahim2204", {
                    expiresIn: "1d",
                }
            );
            await Profiles.findOneAndUpdate({ username }, { token, lastLogin: Date.now() })
                .then(() => {
                    res.status(200).send(token);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
};
exports.isProfileExist = async(user) => {
    const _profile = await Profiles.findOne({ username: user });
    if (_profile) {
        return true;
    }
    return false;
};