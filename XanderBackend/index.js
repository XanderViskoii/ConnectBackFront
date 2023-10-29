console.log("Xander bhai aur backend");

require('dotenv').config()
const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('XanderViskoii')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please make projects as soon as possible</h1>')
})
app.get('/youtube', (req, res) => {
    res.send('<h2>Xander aur code</h2>')
})


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port`);
})

