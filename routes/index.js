var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/list',require('./list/index'));
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
