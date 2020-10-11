let express = require('express');
let router = express.Router();
let Henry = require('./Henry.js');
let Alice = require('./Alice.js');
let Bob = require('./Bob.js');
router.get('/', (req, res) => {
    let options = {
        root: __dirname,
        dotfiles: 'deny'
    }
    res.sendFile("index.html", options)
})
router.use('/Henry', Henry);
router.use('/Alice', Alice);
router.use('/Bob', Bob);

module.exports = router;