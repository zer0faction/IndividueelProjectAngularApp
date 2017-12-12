const express = require('express');
const app = express();
const http = require('http');

const app = express()

app.use(express.static(__dirname+'/dist'));

const server = http.createServer(app);

app.listen(process.env.PORT || 8080);
