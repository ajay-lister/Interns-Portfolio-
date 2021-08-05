//imports
const express = require("express");
const router = express.Router();
const { loginschema } = require("./interntable");
const { internschema } = require("./interntable");
const { courseschema } = require("./interntable");
const con = require("./dbconnection");
const store = require('store');
const bodyParser = require("body-parser");
const alert = require("alert");
const Cryptr = require("cryptr");

cryptr = new Cryptr("abc");

const app = express();
con.on("open", () => {
  console.log("Connected....");
});

//middleware
router.use(bodyParser.urlencoded({ extended: true }));

var detail = [];
let name;
let role;

//Profile page routing
router.post("/Profile", async (req, res) => {
  var un = req.body.Name;
  var pwd = req.body.Password;
  name=un;
  
  if (un == "admin" && pwd == "admin") {
    res.redirect("/demoprofile");
  } else {
    loginschema.findOne({ Name: un }, function (err, user) {
      if (err) console.log(err);
      if(user==null)
      {
        alert("Incorrect Username..Please try again!")
      }
      else if (cryptr.decrypt(user.Password) != pwd){
        alert("Incorrect Password..Please try again!");
        res.redirect("/Homepage")
      }
      else {
        role = user.Role;
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


//Internslist page routing
router.get("/fetchall", async (req, res) => {
  internschema.find({}, function (err, intern) {
    if (err) console.log(err);
    if(role=="Intern"){
   res.render('../view/Intern.ejs', {
      interns: intern,
    });
  }
  else
  {
     res.render('../view/Internslist.ejs', {
      interns: intern,
    });   
  }
  });
});


//Search operation
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


//Sign up   
router.post("/", async (req, res) => {
  const arr = req.body.Skills.split(",")
  // console.log(arr)
  // console.log(req.body)
  // console.log(req.query)
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
    res.redirect("/Homepage");
  } catch (err) {
    res.send("Error");
  }
});


//Nominate operation
router.post("/storecourse", async(req,res)=>{
  
      const course = req.body.course;
      const mail = req.body.mail;
      var f=false;
      internschema.findOneAndUpdate({Mail : mail},{$set :{Course:course}},{upsert:true},function(err)
      {
             if(err) console.log(err)
              f=true;
      })
      internschema.findOneAndUpdate({Mail : mail},{$set :{Coursestatus:"Nominated"}},{upsert:true},function(err)
      {
             if(err) console.log(err)
             alert("Posted message successfully..!");
             res.redirect("/fetchall")
      })
})



//Update course status
router.post("/update", async(req,res)=>
{ 
      const status = req.query.status;
      if(status=="Accepted"){
     internschema.findOneAndUpdate({Name : name},{$set :{Coursestatus:status}},{upsert:true},function(err)
      {
             if(err) console.log(err)
              alert("Accepted the course successfully..!")
      })
    }
    else
    {
         internschema.findOneAndUpdate({Name : name},{$set :{Coursestatus:status}},{upsert:true},function(err)
      {
             if(err) console.log(err)
            alert('sent')
      }) 
    }
})

//exports 
module.exports = {
  router: router,
  details: detail,
};
