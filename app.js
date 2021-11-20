const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const fetch = require('node-fetch');
const controller = require('./api/githhub');

//To use static files
app.use('/public', express.static('public'));

//Allow CORS
app.use(cors());

//Setting route where statics files are
publicPath = path.join(__dirname, './public')
app.use(express.static(publicPath))

//Setting express to be able to work with data from forms//
app.use(express.urlencoded({ extended: false })) // without this line data from body does not go through
app.use(express.json())


//Template engine settings//
app.set('views', path.join(__dirname, 'views')) // indica al template engine donde buscar las vistas//
app.set('view engine', 'ejs')

//Routes settings//
const mainRoutes = require('./routes/mainRoutes');
app.use('/', mainRoutes)


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Port up and running on ${PORT}`)
});



module.exports = app;
