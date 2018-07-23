// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

const register_router = require('../modules/register/routers/router')

module.exports = {
  register_router: register_router
}
