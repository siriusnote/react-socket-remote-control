const logger = require('./logger')

const registerChangeModeListener = require("./handlers/changeMode");
const registerResetListener = require("./handlers/reset");
const Server = require("socket.io").Server

module.exports = (server, cors) => {
    const io = new Server(server, {
        pingInterval: 30000,    // 3 mins
        pingTimeout : 60000,    // 6 mins
        cors: cors
    });

    io.on('connection', (client) => {
        // Logging User IP Address
        const clientIP = client.request.connection.remoteAddress;
        logger.log('info', `User connected from ${clientIP}`);

        // Register Command for Listening
        registerChangeModeListener(client, 'CHANGE_MODE_CALL')
        registerResetListener(client, 'RESET_CALL')
    });

    io.on('disconnect', () => {
        logger.log('info', io.connected); // false
    });

    return io
}