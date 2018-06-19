const express = require('express');
const app = express();
const mysql = require('mysql');
const fs = require('fs');

const bodyParser = require('body-parser');
app.use(bodyParser());

// var db = mysql.createConnection({
//     host: "localhost",
//     user: "admin",
//     password: "password",
//     //database: "dbynad",
//     database: "tutorial",
//     port: 8889
// });
// db.connect( err => {
//     if(err){console.log(err), process.exit()}
//     console.log('connected');
// });


