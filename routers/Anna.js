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
    '\n <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fmiro.medium.com%2Fmax%2F1000%2F1*qyAOepULOa_kVehhEIySKA.jpeg&imgrefurl=https%3A%2F%2Fmedium.com%2Fswlh%2Fyes-your-cat-can-get-coronavirus-10b9fc732e3a&tbnid=tXjTq63ONSn_NM&vet=12ahUKEwiq6bzJ5KzsAhVzI6YKHaIlC0sQMygGegUIARCHAQ..i&docid=nrp7owRWMd3RkM&w=1000&h=777&q=cat&ved=2ahUKEwiq6bzJ5KzsAhVzI6YKHaIlC0sQMygGegUIARCHAQ" height="70%">'
    );
});

module.exports = router;
