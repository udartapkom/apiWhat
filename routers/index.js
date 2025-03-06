const router = require('express').Router();
const send = require('./send')

router.use('/', send);

module.exports = router;