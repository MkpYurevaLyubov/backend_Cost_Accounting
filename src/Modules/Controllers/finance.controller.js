const Finance = require("../../Models/finance.model");

module.exports.allFinance = (req, res) => {
  Finance.find({}, (err, result) => {
    if (err) return res.status(500).send("Something broke!");
    res.send(result);
  });
};
