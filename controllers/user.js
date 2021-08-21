const User = require('../models').User;
const bcrypt = require('bcrypt');

module.exports = {
    //siginup
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
      
    },
     //sigin
    signin: (req,res)=>{
        res.render('./user/signin.hbs');
    },
    login: async(req,res)=>{
        const mail = req.body.email;
        const pass = req.body.pass;
        console.log(mail);
        console.log(pass);

        await User.findAll({
        where: {
            email: mail
        }
        }).then(async(usuario)=>{
            console.log(usuario);
            if(usuario.length== 0){
                res.send("Fuiste jakiado xd");
            }
            else{
                await bcrypt.compare(pass,usuario[0].password_hash,(err,resp)=>{
                    if(err){
                        res.send("ERROR")
                    }
                    if(!resp){
                        console.log("Contraseña Incorrecta");
                    }
                    console.log(resp);
                })

                
                console.log(usuario[0].password_hash);
                res.redirect('/');

            }

        }).catch((error)=>{
            console.log("ERROR")
            console.log(error);

        })


        
        
    }

   
        




}
