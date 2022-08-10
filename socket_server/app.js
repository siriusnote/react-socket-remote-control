const express = require("express");
const createServer = require("http").createServer;

require("dotenv").config()

const port = process.env.PORT
const app = express()
const server = createServer(app)
const socket = require('./socket')
const logger = require('./logger')


const cors = {
    origin: [
        process.env.CONTROL_URL,
        process.env.DASHBOARD_URL,
    ],
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
};

socket(server, cors)

server.listen(port, () => {
    logger.log('info', `socket server is listening on *:${port}`);
})
