const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const financeSchema = new Schema({
  nameCompany: String,
  money: Number,
  date: { type: Date, default: Date.now },
}, {versionKey: false});

module.exports = mongoose.model("Finance", financeSchema);
