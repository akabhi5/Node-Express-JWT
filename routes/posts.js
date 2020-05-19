const router = require('express').Router();
const verify = require('./verifyToken')
const User = require('../models/User');

router.get('/', verify, (req, res) => {
    res.json({
        current_user: req.user,
        posts: {
            title: 'my first post',
            description: 'some random data hahahaahah'
        }
    });
});

module.exports = router;