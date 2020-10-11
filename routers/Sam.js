var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route

router.get('/', function(req, res) {
  res.send('Sam\'s home page');
});

// define the about route
router.get('/about', function(req, res) {
  res.send(
      '<h1> Hi,my name is Sam.</h1>'+
  '\n <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fstore.line.me%2Fstickershop%2Fproduct%2F1008584%2Fzh-Hant&psig=AOvVaw27V_D1jeHC5OhlRsSip_sj&ust=1602514156164000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICm68vkrOwCFQAAAAAdAAAAABAD" height="70%">'
  );
});
module.exports = router;
