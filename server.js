const express = require('express');

const app = express();


const userRoute = require('./routes/user_route');

app.use(express.urlencoded({extended: false}));



app.get('/',(req, res)=>{
    res.send(`<h1>Hola mundo Proyecto Dame una patita..</h1>`)
})

app.use(userRoute);

app.listen(3005, ()=>{
    console.log("servidor iniciado..")
});