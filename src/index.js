const express = require("express");
const cors = require("cors");

const server = express();


server.use(cors());

const port = 5000
server.listen(port, () => {
    console.log("server is runing on http://localhost:" + port);
})

const staticServerPath = "./web/dist";
server.use(express.static(staticServerPath));

//datos farzos
const prove = [
    {
        photo: "https://weremote.net/wp-content/uploads/2023/04/desarrolladora-usando-chat-gpt-1920x1405.jpg",
        image: "https://weremote.net/wp-content/uploads/2023/04/desarrolladora-usando-chat-gpt-1920x1405.jpg",
        name: "Proyectos molones",
        slogan: "Tu proyecto de confianza",
        desc: "Bienvenido al Chiquito Ipsum, el generador de texto de relleno para tus diseños de antes de los dolores.",
        repo: "https://github.com/",
        demo: "https://github.com/",
        technologies: "VS HTML CSS",
        autor: "Patri",
        job: "Desarrolladora FullStack",
    },
    {
        photo: "https://weremote.net/wp-content/uploads/2023/04/desarrolladora-usando-chat-gpt-1920x1405.jpg",
        image: "https://weremote.net/wp-content/uploads/2023/04/desarrolladora-usando-chat-gpt-1920x1405.jpg",
        name: "Proyectos molones",
        slogan: "Tu proyecto de confianza",
        desc: "Bienvenido al Chiquito Ipsum, el generador de texto de relleno para tus diseños de antes de los dolores.",
        repo: "https://github.com/",
        demo: "https://github.com/",
        technologies: "VS HTML CSS",
        autor: "Paloma",
        job: "Desarrolladora FullStack",
    },
    {
        photo: "https://weremote.net/wp-content/uploads/2023/04/desarrolladora-usando-chat-gpt-1920x1405.jpg",
        image: "https://weremote.net/wp-content/uploads/2023/04/desarrolladora-usando-chat-gpt-1920x1405.jpg",
        name: "Proyectos molones",
        slogan: "Tu proyecto de confianza",
        desc: "Bienvenido al Chiquito Ipsum, el generador de texto de relleno para tus diseños de antes de los dolores.",
        repo: "https://github.com/",
        demo: "https://github.com/",
        technologies: "VS HTML CSS",
        autor: "Irma",
        job: "Desarrolladora FullStackora",
    },
    {
        photo: "https://weremote.net/wp-content/uploads/2023/04/desarrolladora-usando-chat-gpt-1920x1405.jpg",
        image: "https://weremote.net/wp-content/uploads/2023/04/desarrolladora-usando-chat-gpt-1920x1405.jpg",
        name: "Proyectos molones",
        slogan: "Tu proyecto de confianza",
        desc: "Bienvenido al Chiquito Ipsum, el generador de texto de relleno para tus diseños de antes de los dolores.",
        repo: "https://github.com/",
        demo: "https://github.com/",
        technologies: "VS HTML CSS",
        autor: "Laura",
        job: "Desarrolladora FullStack",
    }
]

server.get("/api/infoprojects", (req, res) => {
    if (prove.length === 0) {
        res.json({
            status: "error",
            result: []
        })
    } else {
        res.json({
            status: "success",
            result: prove
        });
    }
})
