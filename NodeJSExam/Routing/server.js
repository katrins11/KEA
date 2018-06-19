const express = require('express');
const app = express();
const fs = require('fs');

const sIceland = fs.readFileSync( __dirname + '/iceland.html', 'utf8');
const sDenmark = fs.readFileSync( __dirname + '/denmark.html', 'utf8');
const sSweden = fs.readFileSync( __dirname + '/sweden.html', 'utf8');
var sIndexHTML = fs.readFileSync(__dirname + '/index.html', 'utf8');

app.get('/', (req,res) => {
    var returnIndex = sIndexHTML;
    returnIndex = returnIndex.replace('{{content}}', sIceland);
    res.send(returnIndex);
});

app.get('/denmark', (req,res) => {
    var returnIndex = sIndexHTML;
    returnIndex = returnIndex.replace('{{content}}', sDenmark);
    res.send(returnIndex);
});

app.get('/island', (req,res) => {
    var returnIndex = sIndexHTML;
    returnIndex = returnIndex.replace('{{content}}', sIceland);
    res.send(returnIndex);
})
app.get('/sweden', (req,res) => {
    var returnIndex = sIndexHTML;
    returnIndex = returnIndex.replace('{{content}}', sSweden);
    res.send(returnIndex);
})

const port = 1990;
app.listen(port, error=>{
    if(error){
        console.log("error");
    }
    console.log("app ready, go to port 1990");
});