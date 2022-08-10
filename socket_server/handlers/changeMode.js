module.exports = (socket, command) => {
    socket.on(command, (mode) => {
        console.log(command, mode)
        socket.broadcast.emit('CHANGE_ROUTE', `/${mode}`)
    })
}