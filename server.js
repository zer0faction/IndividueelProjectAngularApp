const express = require('express');
const app = express();

app.user(express.static('AngularIndividueel'+'/dist'));

app.listen(process.env.PORT || 8080);
