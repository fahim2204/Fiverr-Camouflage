const Profiles = require("../model/profile");
const { validationResult } = require('express-validator')

exports.getProfile = async(req, res, next) => {
    await Profiles.find().then(x => { res.status(200).send(x) }).catch(err => { res.status(500).send(err) })
}
exports.getProfileByUsername = async(req, res, next) => {
    await Profiles.find({ username: req.params.username }).then(x => { res.status(200).send(x) }).catch(err => { res.status(500).send(err) })
}
exports.postRegister = async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).send(errors);
    }
    const _profile = await Profiles.findOne({ username: req.body.username })
    if (_profile) {
        res.status(409).send("username already exists")
    } else {
        await Profiles.create(req.body).then(x => { res.status(201).send(x) }).catch(err => { res.status(500).send(err) })
            // res.status(409).send("username already exists")
    }
}