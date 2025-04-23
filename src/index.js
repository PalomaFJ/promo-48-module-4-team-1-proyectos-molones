const express = require("express");
const cors = require("cors");
const path = require("path");
const mysql = require("mysql2/promise");

const server = express();

server.use(cors());

require("dotenv").config();

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
    host: 'adalab-proyectos-molones-adalab-proyectos-molones.b.aivencloud.com',
    database: 'defaultdb',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: '10141'

  });
  connection.connect();
  return connection;

}

server.get('/api/infoprojects', async (req, res) => {
  const connection = await getConnection();

const query = "SELECT authors.autor, authors.job, authors.photo, projects.name, projects.demo, projects.description, projects.slogan, projects.technologies , projects.image, projects.repo, projects.fk_author FROM authors INNER JOIN projects ON authors.idAuthor = projects.fk_author ;"
const [projectsResult] = await connection.query(query);
console.log(projectsResult);
connection.end();
res.json({});
}); 

