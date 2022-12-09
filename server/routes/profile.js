const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profile");

router.get("/", profileController.getProfile);
router.put("/", profileController.putProfile);
router.get("/:username", profileController.getProfileByUsername);
// router.get("/id/:id", infoController.getInfoById);
// router.get("/title", infoController.getInfoTitle);
// router.post("/", infoController.createInfo);
// router.put("/:id", infoController.updateInfo);
// router.delete("/:id", infoController.deleteInfo);

module.exports = router;