const express = require ('express')
const mysql = require('mysql2/promise');
const app = express()
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}
let connection = null;


const addPerson = async () => {
  connection = await mysql.createConnection(config)
  const sql = `INSERT INTO person (name) values('MATHEUS');`;
  await connection.execute(sql)
}

const getAllPeople = async () => {
  const [rows] = await connection.query('SELECT * FROM person;');
  return rows;
}

const port = 5000;

app.get('/', async (req, res) => {
  await addPerson();
  const people = await getAllPeople();
  let template = "<table>"
  people.forEach((person) => {
    template += `<tr><td>${person.name}</td></tr>`
  });
  template += "</table>"
  res.send('Code.education Rocks! <br> '+template);
})

app.listen(port, () => {
  console.log(`running at ${port}`)
})