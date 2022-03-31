const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

mongoose.connect("mongodb://localhost:27017/finance", (err) => {
  if (err) return console.log(err);
  app.listen(port, () => {
    console.log(`Сервер ожидает подключения на порту ${port}`);
  });
});