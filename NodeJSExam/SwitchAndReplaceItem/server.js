//Express is for: handeling all the http request
const express = require('express');
//gFs is for: File System is for reading and working with documents
global.gFs = require('fs');
//WHY App,not routing or something?
global.app = express();

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
            break;
        default:
            day = 'Nothing came up';
            break;
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