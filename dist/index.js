"use strict";
const express = require("express");
const app = express();
const { join } = require('node:path');
const { createServer } = require('node:http');
const { Server } = require('socket.io');
const PORT = 3000;
const server = createServer(app);
const io = new Server(server);
// const io = require('socket.io').
app.get("/", (req, res) => {
    // res.send("App is up and running")
    res.sendFile(join(__dirname, '../index.html'));
});
io.on('connection', (socket) => {
    // console.log(socket);
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});
server.listen(PORT, () => {
    console.log(`App is running on PORT ${PORT}`);
});
