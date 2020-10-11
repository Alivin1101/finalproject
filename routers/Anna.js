var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route

router.get('/', function(req, res) {
  res.send('Anna\'s home page');
});

// define the about route
router.get('/about', function(req, res) {
  res.send(
    '<h1> Hi,my name is Anna.</h1>'+
    '\n <img src="https://www.google.com/url?sa=i&url=http%3A%2F%2Farxiv-ai.com%2Forgnization%3Fname%3DSenseTime%2520Research%2520%26%2520THU%2520%26%2520NTU&psig=AOvVaw0QHWFI-9yW44cqfYbWuxMD&ust=1602514023259000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCB5o3krOwCFQAAAAAdAAAAABAJ" height="70%">'
    );
});

module.exports = router;
