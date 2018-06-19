const express = require('express');
const app = express();
const fs = require('fs');

var io = require('socket.io')(1981);

var ramIndexHTML = fs.readFileSync(__dirname + '/index.html', 'utf8');

app.get('/', (req,res)=>{
    var sendIndex = ramIndexHTML;
    res.send(sendIndex);
});

io.on('connection', function(socket){
    socket.on('the message', function(jData){
        io.emit('the message', jData);
    });
});

var port = 1990;
app.listen(port, error => {
    if(error){
        console.log("something went wrong");
    }
    console.log("we are at port 1990");
})
