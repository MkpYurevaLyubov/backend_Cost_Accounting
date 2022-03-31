const express = require("express");
const router = express.Router();

const financeControllers = require("../Controllers/finance.controller");

router.get("/allFinance", financeControllers.allFinance);

module.exports = router;
