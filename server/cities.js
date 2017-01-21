const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const urlencoded = bodyParser.urlencoded({ extended: false });

const redis = require('redis');
const client = redis.createClient();

client.select((process.env.NODE_ENV || 'development').length);

router.get('/cities', (request, response, next) => {
    client.hkeys('cities', (error, names) => {
        if (error) throw error;

        response.json(names);
    });
});

router.post('/cities', urlencoded, (request, response, next) => {
    const newCity = request.body;
    client.hset('cities', newCity.name, newCity.isVisited, (error) => {
        if (error) throw error;

        response.status(201).json(newCity.name);
    });


});

module.exports = router;
