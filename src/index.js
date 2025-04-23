const express = require("express");
const cors = require("cors");
const path = require("path");
const mysql = require("mysql2/promise");

const server = express();

server.use(cors());

const port = 5000;
server.listen(port, () => {
  console.log("server is runing on http://localhost:" + port);
});

const staticServerPath = "./web/dist";
server.use(express.static(staticServerPath));

server.use("/images", express.static(path.join(__dirname, "images")));

//datos farzos
const prove = [
  {
    photo: "http://localhost:5000/images/patri.jpg",
    image:
      "https://weremote.net/wp-content/uploads/2023/04/desarrolladora-usando-chat-gpt-1920x1405.jpg",
    name: "Arte Interactivo",
    slogan: "Preservando el arte a través de la tecnología",
    desc: "Una plataforma donde los usuarios pueden explorar movimientos artísticos a lo largo de la historia.",
    repo: "https://github.com/Patrigar10?tab=repositories",
    demo: "https://github.com/Patrigar10?tab=repositories",
    technologies: "HTML, CSS, React, Node.js, Express, MySQL",
    autor: "Patri",
    job: "Desarrolladora Full Stack",
  },
  {
    photo: "http://localhost:5000/images/paloma.PNG",
    image:
      "https://weremote.net/wp-content/uploads/2023/04/desarrolladora-usando-chat-gpt-1920x1405.jpg",
    name: "Música Viva",
    slogan: "Fusionando música y tecnología",
    desc: "Una plataforma donde los artistas pueden subir sus canciones, recibir comentarios de sus seguidores y generar estadísticas sobre el rendimiento de sus canciones.",
    repo: "https://github.com/PalomaFJ",
    demo: "https://github.com/PalomaFJ",
    technologies: "HTML, CSS, React, Node.js, Express, MySQL",
    autor: "Paloma",
    job: "Desarrolladora Full Stack",
  },
  {
    photo: "http://localhost:5000/images/irma.jpg",
    image:
      "https://weremote.net/wp-content/uploads/2023/04/desarrolladora-usando-chat-gpt-1920x1405.jpg",
    name: "Espacios Virtuales",
    slogan: "Construyendo ideas en el mundo digital",
    desc: "Una plataforma para diseñar planos arquitectónicos en 3D y recorrerlos en realidad aumentada.",
    repo: "https://github.com/IrmaPineiro",
    demo: "https://github.com/IrmaPineiro",
    technologies: "HTML, CSS, React, Node.js, Express, MySQL",
    autor: "Irma",
    job: "Desarrolladora Full Stack",
  },
  {
    photo: "http://localhost:5000/images/laura.PNG",
    image:
      "https://weremote.net/wp-content/uploads/2023/04/desarrolladora-usando-chat-gpt-1920x1405.jpg",
    name: "Lau Chef",
    slogan: "Recetas sabrosas, soluciones digitales",
    desc: "Un sitio web para compartir recetas, donde los usuarios pueden encontrar y publicar recetas, añadir ingredientes, y valorar platos.",
    repo: "https://github.com/LauM25",
    demo: "https://github.com/LauM25",
    technologies: "HTML, CSS, React, Node.js, Express, MySQL",
    autor: "Laura",
    job: "Desarrolladora Full Stack",
  },
];

/*server.get("/api/infoprojects", (req, res) => {
  if (prove.length === 0) {
    res.json({
      status: "error",
      result: [],
    });
  } else {
    res.json({
      status: "success",
      result: prove,
    });
  }
});*/

async function getConnection() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    database: 'defaultdb',
    user: '',
    password: '',
    port: '10141'

  });
  connection.connect();
  return connection;

}

server.get('/api/infoprojects'), async (req, res) => {
  const connection = await getConnection()
}

