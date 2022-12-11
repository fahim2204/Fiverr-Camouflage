const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const galleryController = require("../controllers/gallery");

router.get("/", galleryController.getGallery);
router.post(
    "/", [
        check("categoryName")
        .not()
        .isEmpty()
        .withMessage("Category Name can not be empty"),
        check("uploadedImage")
        .not()
        .isEmpty()
        .withMessage("Uploaded Image can not be empty"),
        check("resultantImage")
        .not()
        .isEmpty()
        .withMessage("Resultant Image can not be empty"),
        check("user").not().isEmpty().withMessage("User Reference can not be empty"),
    ],
    galleryController.postGallery
);
// router.put("/", galleryController.putGallery);
// router.get("/:username", galleryController.getProfileByUsername);

module.exports = router;