const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/cities', (request, response) => {
    const cities = ['Amsterdam', 'Eindhoven', 'The Hague'];
    response.json(cities);
});

module.exports = app;
