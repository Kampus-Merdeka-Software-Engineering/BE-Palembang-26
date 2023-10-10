const express = require('express')
const bodyParser = require('body-parser')
const db = require('./connection')


const app = express()
app.use(express.json())
app.use(bodyParser.raw())
app.use(bodyParser.json())

// endpoint signUp
app.post('/user', (req, res) => {
    const { email, password, confirm_Password, username} = req.body
    const sql = `INSERT INTO users (email, password, confirmPassword, username) VALUES 
    ('${email}', '${password}', '${confirm_Password}', '${username}')`
    db.query(sql, (error, fields) => {
        if (error) {
            console.log(error)
            res.status(500).json({ msg : "invalid"})
        } else {
            res.json(fields)
        }
    })
})

// endpoint chat consultation
app.post('/chat', (req, res) => {
    const { Nama, Keluhan, Usia_Kehamilan, Riwayat_Penyakit, Pembayaran_Via } = req.body
    const sql = `INSERT INTO chats (Nama, Keluhan, Usia_kehamilan, Riwayat_Penyakit, Pembayaran_Via) VALUES 
    ('${Nama}', '${Keluhan}', '${Usia_Kehamilan}', '${Riwayat_Penyakit}', '${Pembayaran_Via}')`
    db.query(sql, (err, fields)=>{
        if(err) {
            console.log(err)
            res.status(500).json({ msg : "invalid"})
        } else {
            res.json(fields)
        }
    })
})


app.listen(3900, () => {
    console.log('port berjalan...')
})