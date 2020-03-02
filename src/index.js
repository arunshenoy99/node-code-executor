const express = require('express')
const runScript = require('./utils/runScript')

const app = express()


app.post('/run', (req, res) => {
    const lang = req.query.lang
    const code = req.body.code
    if (!lang && !code) {
        res.status(400).send()
    } 
    runScript(lang, code, (data) => {
        res.send(data)
    })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Server is up and running on port ' + PORT)
})