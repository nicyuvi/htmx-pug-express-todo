var express = require('express');
var router = express.Router();

const payload = {
  title: 'heading 1',
  message: 'using pug',
  subtitle: 'subtitle',
};
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', payload);
});

module.exports = router;
