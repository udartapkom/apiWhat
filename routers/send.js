const router = require('express').Router();
const {
    sendMessage,
    reciveMessage,
    delNotification
} = require('../controllers/messages');

router.post('/send', sendMessage);
router.post('/recive', reciveMessage);
router.delete('/del', delNotification);

module.exports = router;