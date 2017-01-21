const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const urlencoded = bodyParser.urlencoded({ extended: false });

router.get('/', urlencoded, (request, response, next) => {
    response.render('index.html');
});

module.exports = router;
