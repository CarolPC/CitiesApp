const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const urlencoded = bodyParser.urlencoded({ extended: false });

const cities = {
    'Amsterdam': true,
    'Eindhoven': true,
    'The Hague': true
};

router.get('/cities', (request, response, next) => {
    response.json(Object.keys(cities));
});

router.post('/cities', urlencoded, (request, response, next) => {
    const newCity = request.body;
    cities[newCity.name] = newCity.isVisited;
    response.status(201).json(newCity.name);
});

module.exports = router;
