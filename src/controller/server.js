const express = require("express");
const app = express();
const path = require("path");
const { router } = require("../database/interns");
const source = require("../resource/source/source.js");
app.use(express.json());

app.use("/", router);
app.use("/Profile", router);
app.use("/Listofinterns", router);
app.use("/fetchresult", router);
app.use("/storecourse",router);
app.use("/update",router);
app.use("/changeskills",router);
app.use("/redirect",router);

app.use("/public", express.static(path.join(__dirname + "/../resource")));

app.get("/Homepage", function (req, res) {
  // res.sendFile(path.join(__dirname + "/../../view/Homepage.html"));
  res.render(path.join(__dirname + "/../../view/Homepage"),{
         details:{}
  });
});

app.get("/demoprofile", function (req, res) {
  res.render(path.join(__dirname + "/../../view/Internslist.ejs"));
});

app.get("/logout", function (req, res) {
  // res.sendFile(path.join(__dirname + "/../../view/Homepage.html"));
   res.render(path.join(__dirname + "/../../view/Homepage"),{
         details:{}
  });
});

app.get("/signup", function (req, res) {
  res.sendFile(path.join(__dirname + "/../../view/Signuppage.html"));
});


app.set("view engine", "ejs");

app.listen(7000, () => {
  console.log("Server is runnig...");
});