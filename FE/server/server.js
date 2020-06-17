const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

const issueList = require("./mock/issueInitData.js");

const labelPickerList = require("./mock/labelPickerList.js");
const milestonePickerList = require("./mock/milestonePickerList.js");
const assigneerPickerList = require("./mock/assigneerPickerList.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/issueList", (req, res) => {
  res.send(issueList);
});

app.get("/api/labelPickerList", (req, res) => {
  res.send(labelPickerList);
});

app.get("/api/milestonePickerList", (req, res) => {
  res.send(milestonePickerList);
});

app.get("/api/assigneerPickerList", (req, res) => {
  res.send(assigneerPickerList);
});

app.listen(port);
