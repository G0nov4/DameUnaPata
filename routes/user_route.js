const express = require('express');
const router = express.Router();


let UserController = require('../controllers/user');


/// rutas

router.route('/signup')
.get(UserController.index)
.post(UserController.create);







//.post()






module.exports = router;