const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
  res.send('Olá, essa é a aplicação Wallet App!')
})

app.listen(port, () => {
  console.log(":)")
})