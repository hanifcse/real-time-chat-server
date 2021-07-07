const app = require('express')()
const server = require('http').createServer(app)
// const io = require('socket.io')(server, {
//     cors: {
//         origin: '*',
//     }
// })

const io = require("socket.io")(httpServer, {
    cors: {
      origin: "https://example.com",
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      credentials: true
    }
  });
  

io.on('connection', socket => {
    console.log('connection made successfully')
    socket.on('message', payload => {
        console.log('Message received on server: ', payload)
        io.emit('message', payload)
    })
})

server.listen(7000, () => {
    console.log('I am listening at port: 7000)');
})

