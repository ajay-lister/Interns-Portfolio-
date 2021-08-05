const store = require('store');

let mailid;

function openForm(intern) {
  var na = intern.Name;
  var id = intern._id;
  var desc = intern.Description;
  var mail = intern.Mail;
  var skills = intern.Skills;
  // var skills = intern[`${index}`]['skills'];
  document.getElementById("uname").innerHTML = na;
  document.getElementById("id").innerHTML = "<b>ID : </b>" + id;
  document.getElementById("about").innerHTML = desc;

  document.getElementById("mailid").innerHTML = "<strong>&nbsp;Mail Id : </strong>" + mail;
  document.getElementById("skills").innerHTML = skills;

  document.getElementById("myForm").style.display = "block";
  var blur = document.getElementById("blur");
  blur.classList.toggle("active");
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  var blur = document.getElementById("blur");
  blur.classList.toggle("active");
  var blur = document.getElementById("main");
  blur.classList.toggle("active");
}

function setinterndetails(index) {
  var na = intern[`${index}`]["Name"];
  var id = intern[`${index}`]["Id"];
  var desc = intern[`${index}`]["description"];
  var mail = intern[`${index}`]["mail"];
  var skills = intern[`${index}`]["skills"];
  document.getElementById("uname").innerHTML = na;
  document.getElementById("id").innerHTML = "<b>ID : </b>" + id;
  document.getElementById("about").innerHTML = desc;
  document.getElementById("mailid").innerHTML =
    "<strong>&nbsp;Mail Id : </strong>" + mail;
  document.getElementById("skills").innerHTML = skills;
}

function storedetails() {
  var na = document.getElementById("username").value;
  var pwd = document.getElementById("password").value;
  var id = document.getElementById("eid").value;
  var mail = document.getElementById("mid").value;
  var skills = document.getElementById("skills").value;
  var desc = document.getElementById("desc").value;
  var domain = document.getElementById("domain").value;
  i = new intern();
  i.Name = na;
  i.pwd = pwd;
  i.Id = id;
  i.description = desc;
  i.domain = domain;
  i.mail = mail;
  i.skills = skills;
  alert("Registered successfully...!");
}

function setoriginalvalues() {
  var name = localStorage.getItem("uname");
  var id = localStorage.getItem("id");
  var desc = localStorage.getItem("desc");
  var mail = localStorage.getItem("mail");
  var domain = localStorage.getItem("domain");
  var rating = JSON.parse(localStorage.getItem("rating"));
  // var  skills = localStorage.getItem("skills");
  document.getElementById("uname").innerHTML = name;
  document.getElementById("id").innerHTML =
    "&nbsp;&nbsp;&nbsp;<strong>EMPLOYEE ID :</strong>&nbsp;&nbsp;&nbsp;&nbsp;" +
    id;
  document.getElementById("desc").innerHTML =
    "&nbsp;&nbsp;&nbsp;<strong>DESCRIPTION :</strong>&nbsp;&nbsp;&nbsp;&nbsp;<br><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" +
    desc;
  document.getElementById("mail").innerHTML =
    "&nbsp;&nbsp;&nbsp;<strong>EMPLOYEE MAIL ID :</strong>&nbsp;&nbsp;&nbsp;&nbsp;" +
    mail;
  document.getElementById("domain").innerHTML = domain;
  document.getElementById("s1").innerHTML = rating[0];
  document.getElementById("s2").innerHTML = rating[1];
  document.getElementById("s3").innerHTML = rating[2];
  document.getElementById("s4").innerHTML = rating[3];
  document.getElementById("s5").innerHTML = rating[4];
  document.getElementById("s6").innerHTML = rating[5];
  //document.getElementById("skills").innerHTML = skills;
}

function setvalues() {
  document.getElementById("uname").innerHTML = detail["Name"];
  document.getElementById("id").innerHTML =
    "&nbsp;&nbsp;&nbsp;<strong>EMPLOYEE ID :</strong>&nbsp;&nbsp;&nbsp;&nbsp;" +
    details._id;
  document.getElementById("desc").innerHTML =
    "&nbsp;&nbsp;&nbsp;<strong>DESCRIPTION :</strong>&nbsp;&nbsp;&nbsp;&nbsp;<br><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" +
    details.Description;
  document.getElementById("mail").innerHTML =
    "&nbsp;&nbsp;&nbsp;<strong>EMPLOYEE MAIL ID :</strong>&nbsp;&nbsp;&nbsp;&nbsp;" +
    details.Mail;
  document.getElementById("domain").innerHTML = details.Domain;
  document.getElementById("s1").innerHTML = rating[0];
  document.getElementById("s2").innerHTML = rating[1];
  document.getElementById("s3").innerHTML = rating[2];
  document.getElementById("s4").innerHTML = rating[3];
  document.getElementById("s5").innerHTML = rating[4];
  document.getElementById("s6").innerHTML = rating[5];
}

function facebook() {
  window.location.href =
    "https://www.facebook.com/Lister-Technologies-207330099294278";
}

function twitter() {
  window.location.href = "https://twitter.com/listercx?lang=en";
}

function msgform(intern) {
  document.getElementById("mailform").style.display = "block";
  document.getElementById("tomail").innerHTML =
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Receiver Mail-Id :&nbsp;" +
    intern.Mail;
  // mailid = intern.Mail;
  var blur = document.getElementById("blur");
  blur.classList.toggle("active");
}

function closeMsgForm() {
  document.getElementById("mailform").style.display = "none";
  var blur = document.getElementById("blur");
  blur.classList.toggle("active");
  var blur = document.getElementById("main");
  blur.classList.toggle("active");
}

function complete()
{
    document.getElementById("coursecomplete").style.display="block";
}

function clsForm()
{
  document.getElementById("coursecomplete").style.display = "none";
}


function postemail(course, duration) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "managersample7@gmail.com",
    Password: "A123B123",
    To: mailid,
    From: "managersample7@gmail.com",
    Subject: "Course completion-Reg",
    Body:
      "Hi, We request you to complete the course named " +
      "<bold>" +
      course +
      "</bold>" +
      " within a maximum duration of " +
      "<bold>" +
      duration +
      "</bold>" +
      " months.<br> Thank you.",
  }).then(function (message) {
    mailid = "";
    alert("mail sent successfully");
  });
}

function postcompletionmail(obj) {
    const mid = obj.Mail;
    console.log(mid);
    Email.send({
    Host: "smtp.gmail.com",
    Username: "managersample7@gmail.com",
    Password: "A123B123",
    To: mid,
    From: "managersample7@gmail.com",
    Subject: "Course completion-Reg",
    Body:
      "Hi, I'm " + obj.Name+"(Id : "+obj._id+" )"+",I've completed the course : "+
      "<bold>" +
      obj.Course +
      "</bold>" +
      " within the given timeline" +
      " <br> Thank you.",
  }).then(function (message) {
    alert("mail sent successfully");
  });
}


module.exports = mailid;