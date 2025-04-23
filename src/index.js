const express = require("express");
const cors = require("cors");
const path = require("path");
const mysql = require("mysql2/promise");

const server = express();

server.use(cors());

require("dotevn").config();

const port = 5000;
server.listen(port, () => {
  console.log("server is runing on http://localhost:" + port);
});

const staticServerPath = "./web/dist";
server.use(express.static(staticServerPath));

server.use("/images", express.static(path.join(__dirname, "images")));

//datos farzos

async function getConnection() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    database: 'defaultdb',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: '10141'

  });
  connection.connect();
  return connection;

}

server.get('/api/infoprojects'), async (req, res) => {
  const connection = await getConnection()
}

