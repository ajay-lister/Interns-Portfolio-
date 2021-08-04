const express = require("express");
const router = express.Router();
const { loginschema } = require("./interntable");
const { internschema } = require("./interntable");
const { courseschema } = require("./interntable");
// const { skillschema } = require("./interntable");
const con = require("./dbconnection");
const bodyParser = require("body-parser");
const alert = require("alert");
//const bcrypt = require("bcrypt");
// const mailid = require("../resource/source/source")
const Cryptr = require("cryptr");

cryptr = new Cryptr("abc");

const app = express();
con.on("open", () => {
  console.log("Connected....");
});


router.use(bodyParser.urlencoded({ extended: true }));

var detail = [];
let name;
let role;

router.post("/Profile", async (req, res) => {
  var un = req.body.Name;
  var pwd = req.body.Password;
  name=un;
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
          res.render('../view/profile', {
            details: intern
          });
        });
      }
    });
  }
});

router.get("/fetchall", async (req, res) => {
  internschema.find({}, function (err, intern) {
    if (err) console.log(err);
    res.render('../view/Internslist.ejs', {
      interns: intern,
    });
  });
});

// router.get("/fetchresult", async (req, res) => {
//           var skill = req.body.selement;
//           console.log(skill)
//          skillschema.find({Skills : { "$in" :skill}},function(err,skilldetail)
//          {
//               const id = JSON.stringify(skilldetail).substring(49,53);
//               console.log(id)
//              internschema.find({ },function(err,detail)
//             { 
//                 if (err) console.log(err);
//                 //console.log(detail)
//                 res.render("../View layer/Internslist.ejs", {
//                 interns: detail,
//                 });
//          })
//         });
//       });

router.post("/fetchresult" ,async (req,res)=>
{
      // console.log(req.body.selement)
      //res.send("Hello")
      var skill = req.body.selement;
      internschema.find({Skills : skill},function(err,skilled)
         {
               //console.log(skilled)
               res.render("../view/Internslist.ejs", {
                interns: skilled,
                }); 
              })

})


  
router.post("/", async (req, res) => {
  const arr = req.body.Skills.split(",")
  // console.log(arr)
  console.log(req.body)
  console.log(req.query)
  const pwd = cryptr.encrypt(req.body.Password);
  const login = new loginschema({
    _id: req.body.Eid,
    Name: req.body.Name,
    Password: pwd,
    Role: req.body.Rolelist
  });
  const intern = new internschema({
    _id: req.body.Eid,
    Name: req.body.Name,
    Domain: req.body.Domain,
    Skills: arr,
    Description: req.body.Description,
    Mail: req.body.Mail,
    Course: "NA",
    Coursestatus : "NA"
  });

  try {
    const i1 = await intern.save();
    const i2 = await login.save();
    // const i3 = await skill.save();
    res.redirect("/Homepage");
  } catch (err) {
    res.send("Error");
  }
});

router.post("/storecourse", async(req,res)=>{
      //console.log(req.body)
      //res.send("sent")
      const course = req.body.course;
      var f=false;
      internschema.findOneAndUpdate({Mail : "ajay@listertechnologies.com"},{$set :{Course:course}},{upsert:true},function(err)
      {
             if(err) console.log(err)
              f=true;
      })
      internschema.findOneAndUpdate({Mail : "ajay@listertechnologies.com" },{$set :{Coursestatus:"Nominated"}},{upsert:true},function(err)
      {
             if(err) console.log(err)
             alert("Posted message successfully..!");
      })
})

router.post("/update", async(req,res)=>
{ 
      const status = req.query.status;
     internschema.findOneAndUpdate({Name : name},{$set :{Coursestatus:status}},{upsert:true},function(err)
      {
             if(err) console.log(err)
              alert("Accepted the course successfully..!")
      })
})

module.exports = {
  router: router,
  details: detail,
};
