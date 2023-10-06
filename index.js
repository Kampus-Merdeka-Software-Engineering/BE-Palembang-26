const express = require('express')
const bodyParser = require('body-parser')
const db = require('./connection')


const app = express()
app.use(express.json())
app.use(bodyParser.raw())
app.use(bodyParser.json())



app.post('/user', (req, res) => {
    const { email, password, confirmPassword, username} = req.body
    console.log(req.body)
    const sql = `INSERT INTO users (email, password, confirm_Password, username) VALUES 
    ('${email}', '${password}', '${confirmPassword}', '${username}')`
    db.query(sql, (error, result) => {
        if (error) console.log(error)
        console.log(result)
    })
    res.send("ok")
})




app.listen(5000, () => {
    console.log('port berjalan...')
})