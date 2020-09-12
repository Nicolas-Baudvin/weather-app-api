const express = require("express");
const controller = require("../Controllers");

const router = express.Router();

router.post("/weather/info/", controller.info);

module.exports = router;