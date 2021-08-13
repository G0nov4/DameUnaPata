const User = require('../models').User;

module.exports = {
    index: (req,res)=>{
        res.send('Este es el signup');
    }
}