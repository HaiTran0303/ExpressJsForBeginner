const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const AccountModel = require('./models/account')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/register', (req, res, next) => {
  var username = req.body.username
  var password = req.body.password

  AccountModel.findOne({
    username: username
  })
  .then(data => {
    if(data){
      res.json('username da ton tai')
    }else{
      return AccountModel.create({
        username: username,
        password: password
      })
    }
  })

  .then(data =>{
    res.json('Tao tai khoan thanh cong')
  })
  .catch(err =>{
    res.status(500).json('Tao tai khoan that bai')
  })
})

app.post('/login', (req, res, next) => {
  var username = req.body.username
  var password = req.body.password

  AccountModel.findOne({  
    username: username,
    password: password
  })
  .then(data =>{
    if(data){
      res.json('dang nhap thanh cong')
    }else{
      res.status(300).json('username/password khong dung')
    }
  })
  .catch(err =>{
    res.status(500).json('Loi server')
  })
})

app.get('/', (req, res) => {
    res.json('Home')
})

//localhost:8080/
app.listen(8080, () => {
  console.log(`Example app listening on port`)
})