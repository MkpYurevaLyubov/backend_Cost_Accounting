const express = require("express");
const router = express.Router();

const { allFinance } = require("../Controllers/finance.controller");

router.get("/allFinance", allFinance);

module.exports = router;
