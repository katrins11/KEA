const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser());

const fs = require('fs');
var request = require('request');

var ramIndex = fs.readFileSync(__dirname + '/index.html', 'utf8');

app.get('/', (req,res)=>{
    res.send(ramIndex);
});

app.post('/sms', (req, res)=>{
    
    var sMobile = req.body.number;
    var sMessage = secretTokenGenerator();
    var apiToken = '$2y$10$H.KvGdTTPrMYwuThvdkSP.v3rAcGU5sCuBui1eHaCdLIZV2Cmi.Sm';

    request.post({url:'http://smses.io/api-send-sms', 
        form: { 
            apiToken: apiToken, 
            mobile: sMobile, 
            message: sMessage 
        }
    }); 
    res.send('Message has been send');

    function secretTokenGenerator(){
        var length = 4,
        charset = "0123456789",
        retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    }
    
});

app.post('/hi', (req, res)=>{
    res.send(req.body);
});



app.listen(1990, error=>{
    if(error){
        console.log('error');
        return;
    }
    console.log('port 1990');
})