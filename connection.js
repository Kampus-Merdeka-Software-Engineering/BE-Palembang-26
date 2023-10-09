const {Sequelize} =require('sequelize')

const db = new Sequelize('mysql://root:Ux36GS0dmP9YjAUM0PLm@containers-us-west-178.railway.app:5612/railway')

async function testDatabaseConnection() {
    try {
      await db.authenticate();
      console.log('Koneksi ke database berhasil.');
    } catch (error) {
      console.error('Koneksi ke database gagal:', error);
    } 
}


testDatabaseConnection()
module.exports = db