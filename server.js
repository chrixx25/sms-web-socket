const express = require('express');
const http = require('http');
const webSoscket = require('ws');

const port = 5000;
const server = http.createServer(express);
const wss = new webSoscket.Server({server});

wss.on('connection', function connection(ws) {

    ws.on('message', function incoming(data) {
        wss.clients.forEach(function each(client) {
            if(client != ws && client.readyState == webSoscket.OPEN) {
                client.send(data);
            }
        })
    });

});

server.listen(port, function() {
    console.log('server is uup');
});



