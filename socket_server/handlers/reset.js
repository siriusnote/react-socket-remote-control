module.exports = (socket, command) => {
    socket.on(command, (msg) => {
        console.log(command)
        socket.broadcast.emit('RESET_OUT', msg)
    })
}