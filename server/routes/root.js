const express = require("express");
const router = express.Router();
const { check } = require('express-validator')
const profileController = require("../controllers/profile");

router.post("/register", [check('username').isLength({ min: 3 })], profileController.postRegister);


module.exports = router;