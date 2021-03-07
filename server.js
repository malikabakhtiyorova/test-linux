const http = require("http");
const express = require("express");
const  WebSocket  = require("ws");
const server = http.createServer(express);
const PORT =  process.argv.PORT || 4000;
const  wss  =  new WebSocket.Server({ server });

wss.on("connection", function connection(ws) {
    ws.on("message",function incoming(data) {
        wss.clients.forEach(function each(client) {
            if(client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(data)
            }
        })
    })
});

server.listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT)
});