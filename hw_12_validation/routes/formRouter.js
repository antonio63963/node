const express = require("express");
const router = express.Router();
const formCtrl = require("../controllers/formCtrl");

router.post("/req", formCtrl);

module.exports = router;