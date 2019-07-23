var express = require('express');
var app = express();
var routeHeroes = require('./routes/heroes');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.get('/', (req, res) =>{
    res.send('Home');
});
app.use('/heroes', routeHeroes);

mongoose.connect(
    'mongodb://localhost:27017/mylib',
    {useNewUrlParser: true},
    () => console.log('Connected Database!!!')
);

app.listen(8000, () => {
    console.log('App running http://localhost:8000');
})