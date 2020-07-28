var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors())
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

app.get('/', function(req, res){
    a = []
    for (i = 0; i<20; i++){a.push(getRandomInt(1, 100))}

    res.send(a);
});

app.listen(4000, function(){
    console.log('Servidor online.');

});

