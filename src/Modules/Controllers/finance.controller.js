const Finance = require("../../Models/finance.model");

module.exports.allFinance = (req, res) => {
  Finance.find({}, (err, result) => {
    if (err) return res.status(500).send("Something broke!");
    res.send(result);
  });
};

module.exports.createFinance = (req, res) => {
  const { body } = req;
  if (!body.hasOwnProperty("nameCompany")) return res.status(404).send("Error! Company not found");
  if (!body.hasOwnProperty("money")) return res.status(404).send("Error! Money not found");
  if (typeof body.money !== "number") return res.status(422).send("Error! Money value not correct");

  const finance = new Finance(body);

  finance.save(() => {
    res.send(finance);
  });
};

module.exports.deleteFinance = (req, res) => {
  const { id } = req.query;
  if (!id) return res.status(422).send("Error! Id value not correct");

  Finance.findByIdAndDelete(id, (err, result) => {
    if (err) return res.status(404).send('Finance not found');
    res.send(result);
  });
};

module.exports.updateFinance = (req, res) => {
  const { body } = req;
  const { _id } = body;
  if (!body.hasOwnProperty("nameCompany")) return res.status(404).send("Error! Company not found");
  if (!body.hasOwnProperty("money")) return res.status(404).send("Error! Money not found");
  if (!body.hasOwnProperty("_id")) return res.status(404).send("Error! Id not found");
  if (typeof body.money !== "number") return res.status(422).send("Error! Money value not correct");
  if (typeof _id !== "string") return res.status(422).send("Error! Id value not correct");

  const newFinance = body;
  Finance.findOneAndUpdate({ _id }, newFinance, {new: true}, (err, result) => {
    if (err) return res.status(404).send('Finance not found');
    res.send(result);
  });
};