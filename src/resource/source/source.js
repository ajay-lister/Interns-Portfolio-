const store = require('store');

let mailid;

//Description form-Internslist page
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

//Close description form
function closeForm() {
  document.getElementById("myForm").style.display = "none";
  var blur = document.getElementById("blur");
  blur.classList.toggle("active");
  var blur = document.getElementById("main");
  blur.classList.toggle("active");
}


//Links
function facebook() {
  window.location.href =
    "https://www.facebook.com/Lister-Technologies-207330099294278";
}

function twitter() {
  window.location.href = "https://twitter.com/listercx?lang=en";
}

//Nomination message form-Internslist page
function msgform(intern) {
  document.getElementById("mailform").style.display = "block";
  document.getElementById("tomail").innerHTML =
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Receiver Mail-Id :&nbsp;" +
    intern.Mail;
  // mailid = intern.Mail;
  var blur = document.getElementById("blur");
  blur.classList.toggle("active");
}

//Nomination close form-Internslist page
function closeMsgForm() {
  document.getElementById("mailform").style.display = "none";
  var blur = document.getElementById("blur");
  blur.classList.toggle("active");
  var blur = document.getElementById("main");
  blur.classList.toggle("active");
}

//Course complete status - Profile page
function complete()
{
    document.getElementById("coursecomplete").style.display="block";
}

//Course complete status - close form - Profile page
function clsForm()
{
  document.getElementById("coursecomplete").style.display = "none";
}



//Email to manager - course completion - Profile page
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
      " <br> Thank you."
  }).then(function (message) {
    alert("mail sent successfully");
    window.href=window.history.back()
  });
}


module.exports = mailid;