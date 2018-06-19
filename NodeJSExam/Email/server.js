const express = require('express');
const app = express();
const fs = require('fs');

const nodemailer = require('nodemailer')
const bodyParser = require('body-parser');
app.use(bodyParser());

const ramIndexHTML = fs.readFileSync(__dirname + '/index.html', 'utf8');

app.get('/', (req,res)=>{
    try{
        res.send(ramIndexHTML);
    }
    catch(error){
        console.log(error.message);
        res.status(500).send('Error');
    }
});

app.post('/mail', (req, res)=>{
    try{
        var sEmail = req.body.email;
        console.log(sEmail);
    
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'ynadgallery@gmail.com',
                pass: 'ynad0040'
            }
        });
        const htmlMail = '<p>Congratulations! You got a mail! </p>'
        var mailOptions = {
            from: 'ynadgallery@gmail.com',
            to: sEmail,
            subject: 'Verification mail for YNAD',
            text: 'That was easy!',
            html: htmlMail
        };
              
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log('ERROR - user.js - sending mail: ',error);
            } else {
                console.log('Email sent: ' + info.response);
                res.send('Check your mail');
            }
        });
    }
    catch(error){
        console.log(error.message);
        res.status(500).send('Error');
    }
 
});
/**
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ynadgallery@gmail.com',
            pass: 'ynad0040'
        }
    });
    const htmlMail = '<p>Congratulations! You are now registered to YNAD!<br><br> Please verify your email by typing the following token: <br><br><strong>Token:</strong> "'+secretToken+'" <br> On the following page: <a href="http://localhost:1983/verification">http://localhost:1983/verification</a></p>'
    var mailOptions = {
        from: 'ynadgallery@gmail.com',
        to: req.body.email,
        subject: 'Verification mail for YNAD',
        text: 'That was easy!',
        html: htmlMail
    };
          
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log('ERROR - user.js - sending mail: ',error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

 */

app.listen(1990, error=>{
    if(error){
        console.log('port error');
    }
    console.log('on port 1990');
})