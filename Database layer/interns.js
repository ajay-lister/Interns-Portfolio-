const express = require("express");
const router = express.Router();
const { loginschema } = require("./interntable");
const { internschema } = require("./interntable");
const { skillschema } = require("./interntable");
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

router.get("/fetchresult", async (req, res) => {
          var skill = req.body.selement;
          console.log(skill)
         skillschema.find({Skills : { "$in" :skill}},function(err,skilldetail)
         {
              const id = JSON.stringify(skilldetail).substring(49,53);
              console.log(id)
             internschema.find({ },function(err,detail)
            { 
                if (err) console.log(err);
                //console.log(detail)
                res.render("../View layer/Internslist.ejs", {
                interns: detail,
                });
         })
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

  const skill = new skillschema({
    _id: req.body.Eid,
    Skills : ["Java","Html"],
    Rating : [7,8],
  });


  try {
    const i1 = await intern.save();
    const i2 = await login.save();
    const i3 = await skill.save();
    res.redirect("/Homepage");
  } catch (err) {
    res.send("Error");
  }
});

module.exports = {
  router: router,
  details: detail,
};
