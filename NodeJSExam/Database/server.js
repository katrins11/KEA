//Express is for: handeling all the http request
const express = require('express');
//mySQL is for: The database
const mysql = require('mysql');
//WHY App,not routing or something?
global.app = express();


/* *** *** *** *** *** OUR DATABASE *** *** *** *** *** */
var db = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "password",
//     database: "dbynad",
    database: "tutorial",
    port: 8889
});

/* *** *** *** *** *** CONNET TO THE DATABASE *** *** *** *** *** */
db.connect( err => {
    if(err){console.log(err), process.exit()}
    console.log('connected');
});

/* *** *** *** *** *** DATABASE INSERT *** *** *** *** *** */

// CREATE A SYSTEM THAT SAVES A NEW USER (can hardcode the value)
// WITH THE ID FROM THE USER, SAVE THE PHONE NUMBER.
app.get('/inser-select-insert', (req, res)=>{
    var sUser = "Anna";
    var stmtInsert = 'INSERT INTO users SET sName = ?';
    var stmtGet = 'SELECT iId FROM users WHERE sName = ?';
    var stmtInsertNumber = 'INSERT INTO users Values(iUserId = ?, sName = ?)';
    var jPhone = [];

    db.query(stmtInsert, sUser, (err, jData)=>{
        console.log("uData ", JSON.stringify(jData))
        if(jData.affectedRows == 1){
            console.log('GREAT, JSON user inserted')
            //SELECT USERID
            db.query(stmtGet, sUser, (err, jData)=>{
                console.log('jData', jData)
                if(jData.affectedRows == 1){
                    //INSERT PHONE
                    jPhone =[jData, '99999']
                    db.query(stmtInsertNumber, jData, (err, jData)=>{
                        console.log('jData', jData)
                    })
                }
            })
        }
    })
    res.send('user with name and number has been added');
});

//////////////////////////////////////////////////////////////////

app.get('/insert-using-function', (req, res)=>{
    var jUser = {"sName": "Sandra"};
    var stmt = 'INSERT INTO users SET ?';
    db.query(stmt, jUser, (err, jData)=>{
        insertPhone(jData.insertId)
    })
    res.send('Sandra has been added ');
});

function insertPhone(iUserId){
    var jPhone = {"iUserId": iUserId, "sPhone": "1800"}
    stmt = 'INSERT INTO phones SET ?'
    db.query(stmt, jPhone,(err, jData)=>{
        console.log("jData ", jData)
    })
}

// //////////////////////////////////////////////////////////////////

// //ALWAYS DO THIS IN FRONT END!
// function(err, jData){}
// //FAT ARROW IN SERVER
// (err, jData) => {}

//////////////////////////////////////////////////////////////////

/* INSERTING TO DATABASE */
app.get('/insert-to-database', (req, res)=>{
    var jUser = {"sName": "Kata"};
    var stmt = 'INSERT INTO users SET ?';

    db.query(stmt, jUser, (err, jData)=>{
        console.log("uData ", JSON.stringify(jData))
        if(jData.affectedRows == 1){
            console.log('GREAT, JSON user inserted');
            res.send('322601 x sould have been added ');
        }
        /* OUTCOME:
        {"fieldCount":0,"affectedRows":1,"insertId":4,"serverStatus":2,"warningCount":0,"message":"","protocol41":true,"changedRows":0}
         */
    });
});

//////////////////////////////////////////////////////////////////

/* INSERTING MANY ITEMS IN DATABASE */
app.get('/insert-three-items', (req, res)=>{
    var aData = [[null, "Anna"], [null, "Panna"], [null, "Sanna"]]
    var stmt = 'INSERT INTO users VALUES ?'
    db.query(stmt, [aData], (err, jData) => {
        console.log("jData ", jData)
    })
    res.send('Anna, Panna, Sanna have been added ');
});

//////////////////////////////////////////////////////////////////

/* INSERTING MANY ITEMS IN DATABASE - OTHER WaY OF DOING IT */
app.get('/insert-many-items', (req, res)=>{
    var aData = [null, "X"]
    var stmt = 'INSERT INTO users VALUES (?)'
    db.query(stmt, [aData], (err, jData) => {
        console.log("jData ", jData)
    })
    res.send('many items should have been added ');
});

//////////////////////////////////////////////////////////////////

/* CHECK HOW MANY ROW's WE CAN ADD AT ONCE */
app.get('/how-many-rows-can-be-added', (req, res)=>{
    var aData = [null, "X"]
    var aDatas = []
    for (var i = 0 ; i < 322601 ; i++) {
        aDatas.push(aData);
    }
    // console.log(aDatas);
    var stmt = 'INSERT INTO users VALUES ?'
    db.query(stmt, [aDatas], (err, jData) => {
        console.log("jData ", jData)
    });
    res.send('322601 x should have been added ');
});


/* *** *** *** *** *** DATABASE SELECT *** *** *** *** *** */
app.get('/all-users', (req, res)=>{
    db.query('SELECT * FROM users', (err, ajData)=>{
        console.log(ajData)
        /* OUTCOME:
         [ RowDataPacket { iId: 1, sName: 'A' },
           RowDataPacket { iId: 2, sName: 'B' } ] */
        console.log(ajData[0].sName)
        /* A */
        var aAllUsers = [];
        for (var i = 0 ; i < ajData.length ; i++) {
            aAllUsers.push(ajData[i].sName);
        }

        res.send('All Users: ' + aAllUsers);
    })
});



//////////////////////////////////////////////////////////////////
app.get('/getId:id', (req,res)=>{
    // console.log(req.params.id);
    var theId = req.params.id;
    var stmt = 'SELECT * FROM users WHERE iId = ?';
    db.query(stmt, theId, (error, jData)=>{
        res.send(jData);
    });
})


//////////////////////////////////////////////////////////////////
app.get('/select-specific-user', (req, res)=>{
    var sName = 'A' // pretendn this value came from the user
    var stmt = 'SELECT * FROM users WHERE sName = ?'
    db.query(stmt , sName, (err, ajData) => {
        console.log(ajData);
        /* [ RowDataPacket { iId: 1, sName: 'A' } ] */
        res.send('ID of User with the Name A: ' + ajData[0].iId);
    })
});


//////////////////////////////////////////////////////////////////

/* When putting in more then on item => using array */
app.get('/select-by-id-and-name', (req, res)=>{
    var aData = [8,'A']
    var stmt = 'SELECT * FROM users WHERE iId = ? AND sName = ?'
    db.query(stmt , aData, (err, ajData) => {
        console.log(ajData);
        /* [ RowDataPacket { iId: 8, sName: 'A' } ] */
        res.send('This is a specific user, with ID: ' + ajData[0].iId + ' and name: ' + ajData[0].sName);
    })
});

//////////////////////////////////////////////////////////////////

app.get('/select-all-containing-B', (req, res)=>{
    var sName = ['%B%'];
    var stmt = 'SELECT * FROM users WHERE sName LIKE ?';
    db.query(stmt, sName, (err, ajData)=>{
        console.log(ajData[0].sName);
        var aUsers = [];
        for(var i = 0 ; i < ajData.length ; i++){
            aUsers.push(ajData[i].sName);
        }
        res.send('This is a All users containing B in name: ' + aUsers);
    })
    //OR
    // var stmt = 'SELECT * FROM users WHERE sName LIKE "%B%"'
    // db.query(stmt, (err, ajData)=>{
    //     console.log(ajData)
    // })
    //OR
    // db.query('SELECT * FROM users WHERE sName LIKE "%B%"', (err, ajData)=>{
    //     console.log(ajData)
    // })
});


/* *** *** *** *** *** DATABASE UPDATE *** *** *** *** *** */
app.get('/update-user-name', (req, res)=>{
    var sName = ['Katrin', 1913025];
    var stmt = 'UPDATE `users` SET sName = ? WHERE iId = ?';
    db.query(stmt, sName, (err, jData) => {
        console.log("jData ", jData);
        var stmt2 = 'SELECT * FROM `users`';
        db.query(stmt2, (err, jData) => {
            console.log("jData ", jData);
            res.send('Check terminal for change userlist');
        });
    });
});


/* *** *** *** *** *** DATABASE DELETE *** *** *** *** *** */
/* DELETE ALL LINES CONTAINING X */
app.get('/delete-specific-user', (req, res)=>{
    var sName = 'Jon';
    var stmt = 'DELETE FROM `users` WHERE sName = ?';
    db.query(stmt, sName, (err, jData) => {
        console.log("jData ", jData);
        var stmt2 = 'SELECT * FROM `users`';
        db.query(stmt2, (err, jData) => {
            console.log("jData ", jData);
            res.send('Check terminal for change userlist');
        });
    })
});

//////////////////////////////////////////////////////////////////

/* DELETE WITH SPECIFFIC ID AND NAME */
app.get('/delete-user-by-name-and-id', (req, res)=>{
    var sName = [1913034, 'SANTIAGO'];
    var stmt = 'DELETE FROM `users` WHERE iId = ? AND sName = ?';
    db.query(stmt, sName, (err, jData) => {
        console.log("jData ", jData);
        var stmt2 = 'SELECT * FROM `users`';
        db.query(stmt2, (err, jData) => {
            console.log("jData ", jData);
            res.send('Check terminal for change userlist');
        });
    });
});


/* *** *** *** *** *** OPENING PAGE *** *** *** *** *** */
app.get('/', (req, res)=>{
    res.send('Ok, this works!')
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
