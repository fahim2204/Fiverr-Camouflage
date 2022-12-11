const jwt = require("jsonwebtoken");
const Gallery = require("../model/gallery");
const { validationResult } = require("express-validator");

// GET profile by Token
exports.getGallery = async(req, res) => {
    await Gallery.find({ isPublic: 1 })
        .then((x) => {
            res.status(200).send(x);
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

// ADD Gallery Image Function
exports.postGallery = async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).send(errors.errors);
    } else {
        await Gallery.create(req.body)
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