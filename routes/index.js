require('node-jsx').install();
var express = require('express');
var React = require('react');
var router = express.Router();

var helloLabel = React.createFactory(require('../components/HelloNeoLable'));



router.get('/', function(req, res, next) {
	var hello = React.renderToString(helloLabel());
  res.render('index', { title: hello });
});

module.exports = router;
