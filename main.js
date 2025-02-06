const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const chalk = require('chalk');

var port = 80;

app.get('/', (req, res) => {res.sendFile(__dirname + '/PUBLIC/HTML/landing.html');});

app.use(express.static('PUBLIC'));

app.get('*', (req, res) => {res.sendFile(__dirname + '/PUBLIC/HTML/404.html', 404);});

server.listen(port, () => {
    console.log(chalk.grey('[' + chalk.red('START') + ']Web Server Launched on port: ' + chalk.red(port)));
});