const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();


const userRoute = require('./routes/user_route');

app.use(express.urlencoded({extended: false}));

// motor de vista
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layout'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs'
}));

app.use(express.static(path.join(__dirname, 'public')));


app.get('/',(req, res)=>{
    res.render('body.hbs')
})

app.use(userRoute);

app.listen(3005, ()=>{
    console.log("servidor iniciado..")
});