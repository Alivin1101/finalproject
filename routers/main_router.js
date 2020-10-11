let express = require('express');
let router = express.Router();
let Henry = require('./Henry.js');
let Anna = require('./Anna.js');
let Sam = require('./Sam.js');
router.get('/', (req, res) => {
    let options = {
        root: __dirname,
        dotfiles: 'deny'
    }
    res.sendFile("index.html", options)
})
router.use('/Henry', Henry);
router.use('/Anna', Anna);
router.use('/Sam', Sam);

module.exports = router;