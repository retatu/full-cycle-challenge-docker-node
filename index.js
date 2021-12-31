const express = require ('express')
const app = express()
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}
// const mysql = require('mysql')
// const connection = mysql.createConnection(config)
// const sql = `INSERT INTO people (name) values('MATHEUS')`;
// connection.query(sql)
// connection.end()

const port = 5000;

app.get('/', (req, res)=> {
  res.send('Code.education Rocks!');
})

app.listen(port, () => {
  console.log(`running at ${port}`)
})