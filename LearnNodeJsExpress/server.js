const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json('Home')
})

//localhost:8080/
app.listen(8080, () => {
  console.log(`Example app listening on port`)
})