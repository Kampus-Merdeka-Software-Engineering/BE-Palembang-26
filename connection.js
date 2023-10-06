const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'containers-us-west-149.railway.app',
    user: 'root',
    password: 'wr44oBJbRZyq6Qrbtyo7',
    database: 'railway'
})

// db.connect((err) => {
//     if (err) {
//         throw err
//     }
//     console.log('database connected')
// })


module.exports = db