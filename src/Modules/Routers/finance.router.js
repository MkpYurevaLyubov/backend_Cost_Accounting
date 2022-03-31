const express = require("express");
const router = express.Router();

const { allFinance, createFinance, deleteFinance, updateFinance } = require("../Controllers/finance.controller");

router.get("/allFinance", allFinance);
router.post("/createFinance", createFinance);
router.delete("/deleteFinance", deleteFinance);
router.patch("/updateFinance", updateFinance);

module.exports = router;
