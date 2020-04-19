var express = require('express');
var router = express.Router();
const general = require('../controllers/general');

router.get('/', general.showHome);
router.get('/about', general.showAbout);
router.get('/contact', general.showContact);

module.exports = router;
