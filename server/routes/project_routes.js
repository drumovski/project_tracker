const express = require("express");
const router = express.Router();
const getProjects = require("./")

router.get("/", getProjects)

module.exports = router;
