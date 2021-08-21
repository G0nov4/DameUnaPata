const User = require('../models').User;
const bcrypt = require('bcrypt');

module.exports = {
    index: (req,res)=>{
        res.render('./user/signup.hbs');
    },
    create: (req,res)=>{
        const name = req.body.name;
        const lastname = req.body.lastname;
        const phone = req.body.phone;
        const email = req.body.email;
        const password = req.body.pass;
        const rol = "Administrator";

        bcrypt.hash(password, 8, (error, result)=>{
            User.create({
                name,
                lastname,
                phone,
                email,
                password_hash:result,
                rol
            }).then((res) => {
                console.log(res) 
            }).catch((err) => {
                console.log(err)
            });
            console.log('Usuario creado');
            res.redirect('/');
        });
      
    }
}