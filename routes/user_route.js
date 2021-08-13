const express = require('express');
const router = express.Router();


let UserController = require('../controllers/user');


/// rutas

router.route('/signup')
.get(UserController.index)
//.post()






module.exports = router;