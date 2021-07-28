let intern = [
  {
    Id: "I048",
    Name: "Ajay Shankar",
    skills: "Java,JavaScript,HTML,CSS,MySQL,Machine learning,Big data",
    pwd: '123',
    domain: "Full-stack development",
    description: "B.Tech Computer Science Engineering grad from SASTRA University, currently working on JavaScript,HTML and CSS.",
    mail: "ajayshankar.ag@listertechnologies.com"
  },


  {
    Id: "I049",
    Name: "Srinivasalu",
    skills: "Data science,Mysql,python,Machine learning,JavaScript,HTML,CSS",
    pwd: '123',
    domain: "Full-stack development",
    description: "B.Tech Computer Science Engineering grad from Savitha Engineering college, currently working on JavaScript,HTML and CSS.",
    mail: "srinivasalu@listertechnologies.com"
  },


  {
    Id: "I050",
    Name: "Sneha",
    skills: "database management,Mysql,python,operation tools,HTML,CSS,JavaScript",
    pwd: '123',
    domain: "Devops",
    description: "B.Tech Computer Science Engineering grad from VIT university, currently working on operational tools and front end.",
    mail: "sneha@listertechnologies.com"
  },


  {
    Id: "I051",
    Name: "Rahul",
    skills: "python,Machine learning,data science,big data,Hadoop,Spark,Pig",
    pwd: '123',
    domain: "Data Analyst",
    description: "B.Tech Computer Science Engineering grad from VIT university, currently working on data analysis,data science,python",
    mail: "rahul@listertechnologies.com"
  },
  {
    Id: "I052",
    Name: "Pooja",
    skills: "email marketing,digital marketing,business management",
    pwd: '123',
    domain: "Full-stack development",
    description: "B.Tech Computer Science Engineering grad from Manipal university, currently working on marketing management and email marketing",
    mail: "pooja@listertechnologies.com"
  },
  {
    Id: "I053",
    Name: "Reshma",
    skills: "Java,JavaScript,HTML,CSS,MySQL,Machine learning",
    pwd: '123',
    domain: "Full-stack development",
    description: "B.Tech Computer Science Engineering grad from SRM university, currently working on currently working on JavaScript,HTML and CSS.",
    mail: "reshma@listertechnologies.com"
  }

];

const { details } = require('../../Database layer/interns')

// function validateForm() {
//   var un = document.getElementById("username").value;
//   var pwd = document.getElementById("password").value;
//   var f = false;
//   for (var i = 0; i < intern.length; i++) {

//     if (un === intern[`${i}`]['Name'] && pwd === intern[`${i}`]['pwd']) {
//       localStorage.setItem("uname", un);
//       localStorage.setItem("pwd", pwd);
//       localStorage.setItem("id", intern[`${i}`]['Id']);
//       localStorage.setItem("mail", intern[`${i}`]['mail']);
//       localStorage.setItem("desc", intern[`${i}`]['description']);
//       localStorage.setItem("skills", intern[`${i}`]['skills']);
//       localStorage.setItem("domain", intern[`${i}`]['domain']);
//       localStorage.setItem("rating", JSON.stringify(intern[`${i}`]['rating']));
//       return true;
//     }
//   }
//   alert('Incorrect username/password please check...!');
//   return false;
// }

function openForm(n) {
  switch (n) {
    case 0: setinterndetails(0); break;
    case 1: setinterndetails(1); break;
    case 2: setinterndetails(2); break;
    case 3: setinterndetails(3); break;
    case 4: setinterndetails(4); break;
    case 5: setinterndetails(5); break;
  }
  document.getElementById("myForm").style.display = "block";
  var blur = document.getElementById('blur');
  blur.classList.toggle('active');
}


function closeForm() {
  document.getElementById("myForm").style.display = "none";
  var blur = document.getElementById('blur');
  blur.classList.toggle('active');
  var blur = document.getElementById('main');
  blur.classList.toggle('active');
}

// function setvalues() {
//   var name = localStorage.getItem("uname");
//   var id = localStorage.getItem("id");
//   var desc = localStorage.getItem("desc");
//   var mail = localStorage.getItem("mail");
//   var skills = localStorage.getItem("skills");
//   document.getElementById("uname").innerHTML = name;
//   document.getElementById("id").innerHTML = "<b>ID : </b>" + id;
//   document.getElementById("about").innerHTML = desc;
//   document.getElementById("mailid").innerHTML = "<strong>&nbsp;Mail Id : </strong>" + mail;
//   document.getElementById("skills").innerHTML = skills;
// }

function setinterndetails(index) {
  var na = intern[`${index}`]['Name'];
  var id = intern[`${index}`]['Id'];
  var desc = intern[`${index}`]['description'];
  var mail = intern[`${index}`]['mail']
  var skills = intern[`${index}`]['skills'];
  document.getElementById("uname").innerHTML = na;
  document.getElementById("id").innerHTML = "<b>ID : </b>" + id;
  document.getElementById("about").innerHTML = desc;
  document.getElementById("mailid").innerHTML = "<strong>&nbsp;Mail Id : </strong>" + mail;
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
  document.getElementById("id").innerHTML = "&nbsp;&nbsp;&nbsp;<strong>EMPLOYEE ID :</strong>&nbsp;&nbsp;&nbsp;&nbsp;" + id;
  document.getElementById("desc").innerHTML = "&nbsp;&nbsp;&nbsp;<strong>DESCRIPTION :</strong>&nbsp;&nbsp;&nbsp;&nbsp;<br><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + desc;
  document.getElementById("mail").innerHTML = "&nbsp;&nbsp;&nbsp;<strong>EMPLOYEE MAIL ID :</strong>&nbsp;&nbsp;&nbsp;&nbsp;" + mail;
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
  document.getElementById("id").innerHTML = "&nbsp;&nbsp;&nbsp;<strong>EMPLOYEE ID :</strong>&nbsp;&nbsp;&nbsp;&nbsp;" + details._id;
  document.getElementById("desc").innerHTML = "&nbsp;&nbsp;&nbsp;<strong>DESCRIPTION :</strong>&nbsp;&nbsp;&nbsp;&nbsp;<br><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + details.Description;
  document.getElementById("mail").innerHTML = "&nbsp;&nbsp;&nbsp;<strong>EMPLOYEE MAIL ID :</strong>&nbsp;&nbsp;&nbsp;&nbsp;" + details.Mail;
  document.getElementById("domain").innerHTML = details.Domain;
  document.getElementById("s1").innerHTML = rating[0];
  document.getElementById("s2").innerHTML = rating[1];
  document.getElementById("s3").innerHTML = rating[2];
  document.getElementById("s4").innerHTML = rating[3];
  document.getElementById("s5").innerHTML = rating[4];
  document.getElementById("s6").innerHTML = rating[5];
}

function facebook() {
  window.location.href = "https://www.facebook.com/Lister-Technologies-207330099294278";
}

function twitter() {
  window.location.href = "https://twitter.com/listercx?lang=en";
}

