//Express is for: handeling all the http request
const express = require('express');
//mySQL is for: The database
const mysql = require('mysql');
//gFs is for: File System is for reading and working with documents
global.gFs = require('fs');
//WHY App,not routing or something?
global.app = express();


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


/* *** *** All internal files are incluted here *** *** */
var user = require(__dirname + '/project.js');

/* *** *** OPENING PAGE *** *** */
app.get('/', (req, res)=>{
    res.send('Ok, this works!')
  });

/* *** *** SWITCH *** *** */
app.get('/what-day-is-it', (req, res)=>{
    var day;
    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case  6:
            day = "Saturday";
    }
    console.log(day);
    var sTodayIsHTML = gFs.readFileSync( __dirname + '/HTML/todayIs.html', 'utf8');

    /* ***  Replace placeholder *** */
    sTodayIsHTML = sTodayIsHTML.replace('{{title}}', 'Today Is!');
    sTodayIsHTML = sTodayIsHTML.replace('{{day}}', day);
    res.send(sTodayIsHTML);
});

/* *** *** LISTENING TO PORT *** *** */
var port = 1990;
app.listen(port, err => {
    if(err) {
        console.log("error");
        return;
    }
    console.log("server is running on port 1990");
})