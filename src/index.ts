const express = require("express")
const app =  express()
const { join } = require('node:path');
const { createServer } = require('node:http');
const { Server } = require('socket.io');
const PORT = 3000;
const server = createServer(app);
const io = new Server(server)
// const io = require('socket.io').

app.get("/" , (req : any , res : any) => {
    // res.send("App is up and running")
    res.sendFile(join(__dirname , '../index.html'));
})

// io.on('connection', (socket:any) => {
//     console.log('a user connected');
//     socket.on('chat message', (msg : string) => {
//         console.log('message: ' + msg);
//       });
//   });
io.on('connection', (socket : any) => {
    socket.on('chat message', (msg : string) => {
      io.emit('chat message', msg);
    });
  });

server.listen(PORT , () => {
    console.log(`App is running on PORT ${PORT}`);
})

