const express = require("express");
const router = express.Router();
const { loginschema } = require("./interntable");
const { internschema } = require("./interntable");
const con = require("./dbconnection");
const bodyParser = require("body-parser");
const alert = require("alert");
//const bcrypt = require("bcrypt");
const Cryptr = require("cryptr");

cryptr = new Cryptr("abc");

const app = express();
con.on("open", () => {
  console.log("Connected....");
});

router.use(bodyParser.urlencoded({ extended: true }));

var detail = [];

router.post("/validate", async (req, res) => {
  var un = req.body.Name;
  var pwd = req.body.Password;

  if (un == "admin" && pwd == "admin") {
    res.redirect("/demoprofile");
  } else {
    loginschema.findOne({ Name: un }, function (err, user) {
      if (err) console.log(err);
      if (cryptr.decrypt(user.Password) != pwd || !user)
        alert("incorrect username/password");
      else {
        internschema.findOne({ Name: un }, function (err, intern) {
          if (err) console.log(err);
          // detail = intern;
          res.render("../View layer/demoprofile", {
            details: intern,
          });
        });
        // res.redirect('/load')
        // res.redirect('/profile',)
      }
    });
  }
});

router.get("/fetchall", async (req, res) => {
  internschema.find({}, function (err, intern) {
    if (err) console.log(err);
    res.render("../View layer/Internslist.ejs", {
      interns: intern,
    });
  });
});

router.post("/", async (req, res) => {
  const pwd = cryptr.encrypt(req.body.Password);

  const login = new loginschema({
    _id: req.body.Eid,
    Name: req.body.Name,
    Password: pwd,
  });

  const intern = new internschema({
    _id: req.body.Eid,
    Name: req.body.Name,
    Domain: req.body.Domain,
    Description: req.body.Description,
    Mail: req.body.Mail,
  });

  try {
    const i1 = await intern.save();
    const i2 = await login.save();
    res.redirect("/Homepage");
  } catch (err) {
    res.send("Error");
  }
});

module.exports = {
  router: router,
  details: detail,
};
