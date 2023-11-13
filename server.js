const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {cors: { origins: ['http://localhost:3000'] }});

io.on('connection', (socket) => {
  socket.on('chatMessage', (message) => {
    io.emit('chatMessage', message);
  });
  socket.on('disconnect', () => {
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});