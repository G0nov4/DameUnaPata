const express = require('express');

const app = express();

app.use(express.urlencoded({extended: false}));



app.get('/',(req, res)=>{
    res.send(`<h1>Hola mundo Proyecto Dame una patita..</h1>`)
})


app.listen(3000, ()=>{
    console.log("servidor iniciado..")
});