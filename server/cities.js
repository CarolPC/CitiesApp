const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const urlencoded = bodyParser.urlencoded({ extended: false });

const redis = require('redis');
const client = redis.createClient();

client.select((process.env.NODE_ENV || 'development').length);

router.get('/cities', (request, response) => {
    client.hkeys('cities', (error, names) => {
        if (error) throw error;

        response.json(names);
    });
});

router.post('/cities', urlencoded, (request, response) => {
    const newCity = request.body;

    if (!newCity.name || !newCity.isVisited) {
        response.sendStatus(400);
        return false;
    }

    client.hset('cities', newCity.name, newCity.isVisited, (error) => {
        if (error) throw error;

        response.status(201).json(newCity.name);
    });
});

router.delete('/cities/:name', (request, response) => {
    client.hdel('cities', request.params.name, (error) => {
        if (error) throw error;

        response.sendStatus(204);
    });
});

module.exports = router;
