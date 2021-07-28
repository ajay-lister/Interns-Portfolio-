
const express = require('express')
const app = express()
const path = require('path')
const { router } = require('../Database layer/interns')
// const { details } = require('../Database layer/interns')
const source = require('../Resources/source/source.js')
app.use(express.json())



app.use('/', router)
app.use('/validate', router)
app.use('/fetchall', router)

app.use("/public", express.static(path.join(__dirname + '/../Resources')))
//app.use("/database", express.static(path.join('H:/js practise/portfolio project' + '/Database layer')))

app.get('/Homepage', function (req, res) {
  res.sendFile(path.join(__dirname + "/../View layer/Homepage.html"));
})


app.get('/demoprofile', function (req, res) {
  res.sendFile(path.join(__dirname + "/../View layer/Internslist.html"));
})

app.get('/logout', function (req, res) {

  res.sendFile(path.join(__dirname + "/../View layer/Homepage.html"));
})

app.get('/signup', function (req, res) {
  res.sendFile(path.join(__dirname + "/../View layer/Signuppage.html"))
})

app.set('view engine', 'ejs')


app.listen(7000, () => {
  console.log("Server is runnig...")
})

