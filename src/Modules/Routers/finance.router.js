const express = require("express");
const router = express.Router();

const { allFinance, createFinance } = require("../Controllers/finance.controller");

router.get("/allFinance", allFinance);
router.post("/createFinance", createFinance);

module.exports = router;
