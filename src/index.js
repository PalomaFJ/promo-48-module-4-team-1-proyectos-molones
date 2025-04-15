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
