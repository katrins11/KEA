//Express is for: handeling all the http request
const express = require('express');
//WHY App,not routing or something?
const app = express();
const bodyParser = require('body-parser');
global.gFs = require('fs');

app.use(bodyParser());

app.get('/', (req, res) => {
    var sIndexHTML = gFs.readFileSync( __dirname + '/index.html', 'utf8');
    res.send(sIndexHTML);
});

app.post('/log-in', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

/* *** *** *** *** *** LISTENING TO PORT *** *** *** *** *** */
var port = 1990;
app.listen(port, err => {
    if(err) {
        console.log("error");
        return;
    }
    console.log("server is running on port 1990");
})