
const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('<h1>Hello SITCON!</h1><p>We successfully deployed an app! :)</p>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
