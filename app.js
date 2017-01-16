const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send('OK');
});

module.exports = app;
