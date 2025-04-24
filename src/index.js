const express = require("express");
const cors = require("cors");
const path = require("path");
const mysql = require("mysql2/promise");

const server = express();

server.use(express.json({ limit: '10mb' }));
server.use(express.urlencoded({ limit: '10mb', extended: true }));

server.use(cors());

require("dotenv").config();

const port = process.env.PORT;
server.listen(port, () => {
  console.log("server is runing on http://localhost:" + port);
});

const staticServerPath = "./src/public-react";
server.use(express.static(staticServerPath));

server.use("/images", express.static(path.join(__dirname, "images")));

//datos farzos

async function getConnection() {
  const connection = await mysql.createConnection({
    host: 'adalab-proyectos-molones-adalab-proyectos-molones.b.aivencloud.com',
    database: 'defaultdb',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_AIVEN_PORT,

  });
  connection.connect();
  return connection;

}

server.get('/api/infoprojects', async (req, res) => {
  const connection = await getConnection();

  const query = "SELECT authors.autor, authors.job, authors.photo, projects.name, projects.demo, projects.description, projects.slogan, projects.technologies , projects.image, projects.repo, projects.fk_author FROM authors INNER JOIN projects ON authors.idAuthor = projects.fk_author ;"
  const [projectsResult] = await connection.query(query);
  connection.end();
  res.status(200).json({
    success: true,
    result: projectsResult
  });
});

server.post('/api/project', async (req, res) => {
  try {
    console.log("req.body:", req.body);
    const connection = await getConnection();
    const authorQuerySQL =
      "INSERT INTO authors (autor, job, photo) VALUES (?, ?, ?)";
    const [authorResult] = await connection.query(authorQuerySQL, [

      req.body.autor,
      req.body.job,
      req.body.photo,
    ]);


    const idNewAuthor = authorResult.insertId;
    const projectQuerySQL =
      "INSERT INTO projects (name, demo, description, slogan, technologies, image, repo, fk_author) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    const [projectResult] = await connection.query(projectQuerySQL, [
      req.body.name,
      req.body.demo,
      req.body.description,
      req.body.slogan,
      req.body.technologies,
      req.body.image,
      req.body.repo,
      idNewAuthor,

    ]);

    connection.end();

    res.status(200).json({
      success: true,
      cardURL: "",
    });

  } catch (error) {
    console.error("Error en el servidor:", error);
    res.status(500).json({ success: false, message: "Error interno del servidor", error: error.message });
  }

});