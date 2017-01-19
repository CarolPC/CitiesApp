const express = require('express');
const router = express.Router();

router.get('/cities', (request, response, next) => {
    const cities = ['Amsterdam', 'Rotterdam', 'The Hague'];
    response.json(cities);
});

module.exports = router;
