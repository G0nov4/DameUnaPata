const express = require('express');
const router = express.Router();


let UserController = require('../controllers/user');


/// rutas

router.route('/signup')
.get(UserController.index)
.post(UserController.create);

router.route('/signin')
.get(UserController.signin)
.post(UserController.login);







//.post()






module.exports = router;