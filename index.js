const express = require('express')
const app = express()
const port = 3000

app.get('*', (req, res) => {
  res.send('Hello World! API_KEY:' + process.env.API_KEY )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})