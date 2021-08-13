const User = require('../models').User;

module.exports = {
    index: (req,res)=>{
        res.render('./user/signup.hbs');
    }
}