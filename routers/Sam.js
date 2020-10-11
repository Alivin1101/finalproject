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
  '\n <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.connexionfrance.com%2Fvar%2Fconnexion%2Fstorage%2Fimages%2F_aliases%2Fsocial_network_image%2Fmedia%2Fimages%2Fbrown-bear4%2F1071634-1-eng-GB%2FBrown-bear.jpg&imgrefurl=https%3A%2F%2Fwww.connexionfrance.com%2FFrench-news%2F30-000-reward-for-info-on-southwest-France-bear-killer&tbnid=G2nDEZw8Bg5DSM&vet=12ahUKEwjmvs_A5qzsAhV0xYsBHcu0ALsQMygfegUIARDhAQ..i&docid=VHeZvzzGMnPCfM&w=3832&h=2848&q=bear&ved=2ahUKEwjmvs_A5qzsAhV0xYsBHcu0ALsQMygfegUIARDhAQ" height="70%">'
  );
});
module.exports = router;
