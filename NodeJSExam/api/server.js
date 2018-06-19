var express = require('express');
var app = express();
var forecastApiKey = "0bfbcaf72a6ff01d35bdab5a5d7321ee";
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Reykjavik,IS&appid=' + forecastApiKey + '&units=metric';
var request = require('request');
global.gFs = require('fs');

app.get('/weather', function (req, res) { 
    var indexHTML = gFs.readFileSync( __dirname + '/index.html', 'utf8');

    request(url, function (err, result, body) {
        var data = JSON.parse(body);
        var sCityName = data['name'];
        var sTemperature = data.main['temp'];
        var sSunsetTime = new Date(data.sys['sunset']*1000);

        indexHTML = indexHTML.replace('{{sCityName}}', sCityName);
        indexHTML = indexHTML.replace('{{sTemperature}}', sTemperature);
        indexHTML = indexHTML.replace('{{sSunsetTime}}', sSunsetTime);
        res.send(indexHTML);
  })

})


/* *** *** *** *** *** PORT *** *** *** *** *** */
app.listen(1990, err=>{
    if(err){
        console.log('err', 'cannot use that port');
        return;
    }
    console.log('ok', 'server is listening on port 1990');
})