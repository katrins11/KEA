//Express is for: handeling all the http request
const express = require('express');
//mySQL is for: The database
const mysql = require('mysql');
//gFs is for: File System is for reading and working with documents
global.gFs = require('fs');
//WHY App,not routing or something?
global.app = express();

/* *** *** OPENING PAGE *** *** */
app.get('/', (req, res)=>{
    res.send('Ok, this works!')
});


/* *** *** OUR DATABASE *** *** */
global.db = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "password",
    database: "dbynad",
    port: 8889
});
/* *** *** CONNET TO THE DATABASE *** *** */
db.connect( err => {
    if(err){console.log(err), process.exit()}
    console.log('connected');
});

/* *** *** DATABASE INSERT *** *** */
/* *** *** DATABASE SELECT *** *** */
/* *** *** DATABASE UPDATE *** *** */
/* *** *** DATABASE DELETE *** *** */

/* *** *** LISTENING TO PORT *** *** */
var port = 1990;
app.listen(port, err => {
    if(err) {
        console.log("error");
        return;
    }
    console.log("server is running on port 1990");
})