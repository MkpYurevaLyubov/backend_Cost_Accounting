const express = require("express");
const router = express.Router();

const { allFinance, createFinance, deleteFinance } = require("../Controllers/finance.controller");

router.get("/allFinance", allFinance);
router.post("/createFinance", createFinance);
router.delete("/deleteFinance", deleteFinance);

module.exports = router;
