const express = require('express');
const app = express();
const fs = require('fs');

var remIndex = fs.readFileSync(__dirname + '/index.html', 'utf8');
var data = fs.readFileSync(__dirname + '/data.txt', 'utf8');

app.get('/', (req,res)=>{
    res.send(remIndex);
});
app.get('/my-info', (req,res)=>{
    res.send(data);
});

app.listen(1990, error =>{
    console.log('1990');
});