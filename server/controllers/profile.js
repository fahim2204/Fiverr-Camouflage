const jwt = require("jsonwebtoken");
const Profiles = require("../model/profile");
const { validationResult } = require("express-validator");

// GET profile by Token
exports.getProfile = async(req, res) => {
    const reqToken = req.headers.token;
    await Profiles.findOne({ token: reqToken })
        .then((x) => {
            if (isTokenExpired(x.token)) {
                res.status(401).send({
                    message: "Token is expired",
                });
            } else {
                res.status(200).send(x);
            }
        })
        .catch((err) => {
            res.status(404).send(err);
        });
};

// UPDATE Profile
exports.putProfile = async(req, res) => {
    const reqToken = req.headers.token;
    console.log("body>> ", req.body);
    await Profiles.findOne({ token: reqToken })
        .then((x) => {
            if (isTokenExpired(x.token)) {
                res.status(401).send({
                    message: "Token is expired",
                });
            } else {
                x.modifiedAt = new Date();
                x.fullName = req.body.fullName;
                x.email = req.body.email;
                x.password = req.body.password;
                x.occupation = req.body.occupation;
                x.gender = req.body.gender;
                x.country = req.body.country;
                x.city = req.body.city;
                x.profilePic = req.body.profilePic;
                x.status = 1;
                x.save().then(() => {
                    res.status(200).send({
                        message: "Profile Updated Successfully",
                    });
                }).catch(err => {
                    res.status(500).send({
                        message: "Server Error",
                        error: err,
                    })
                });
            }
        })
        .catch((err) => {
            res.status(404).send(err);
        });
};

// GET Profile by Name
exports.getProfileByUsername = async(req, res, next) => {
    await Profiles.findOne({ username: req.params.username })
        .then((x) => {
            res.status(200).send(x);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

// Check if the Token is expired
const isTokenExpired = (token) => {
    try {
        jwt.verify(token, "fahim2204");
    } catch (err) {
        return true;
    }
    return false;
};

// REGISTER Function
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

// LOGIN Function
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
                    expiresIn: "1h",
                }
            );
            await Profiles.findOneAndUpdate({ username }, { token: token, lastLogin: Date.now() })
                .then(() => {
                    res.status(200).send(token);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
};

//CHECK If profile exists
exports.isProfileExist = async(user) => {
    const _profile = await Profiles.findOne({ username: user });
    if (_profile) {
        return true;
    }
    return false;
};