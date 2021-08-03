const express = require("express");
const app = express();
const path = require("path");
const { router } = require("../Database layer/interns");
const source = require("../Resources/source/source.js");
app.use(express.json());

app.use("/", router);
app.use("/validate", router);
app.use("/fetchall", router);
app.use("/fetchresult", router);

app.use("/public", express.static(path.join(__dirname + "/../Resources")));

app.get("/Homepage", function (req, res) {
  res.sendFile(path.join(__dirname + "/../View layer/Homepage.html"));
});

app.get("/demoprofile", function (req, res) {
  res.render(path.join(__dirname + "/../View layer/Internslist.ejs"));
});

app.get("/logout", function (req, res) {
  res.sendFile(path.join(__dirname + "/../View layer/Homepage.html"));
});

app.get("/signup", function (req, res) {
  res.sendFile(path.join(__dirname + "/../View layer/Signuppage.html"));
});

app.set("view engine", "ejs");

app.listen(7000, () => {
  console.log("Server is runnig...");
});
