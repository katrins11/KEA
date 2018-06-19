var express = require('express');
var app = express();
global.gFs = require('fs');
app.use(express.static(__dirname + '/public'));

// ******************************************************* //

/* *** * *** * All internal files are incluted here (RAM) * *** * *** */
var projectHTML = gFs.readFileSync(__dirname + '/HTML/project.html', 'utf8');

var data1 = gFs.readFileSync('data.txt', 'utf8');
var data2 = gFs.readFileSync('data2.txt', 'utf8');
var data3 = gFs.readFileSync('data3.txt', 'utf8');

/* *** *** *** Read from file / Callbacks, async and in order *** *** *** */
app.get('/see-name', (req, res)=>{
    var sNameIndexHTML = projectHTML;

    /* *** Callbacks, async and in order *** */
    var sAllLetters = '';
    gFs.readFile(__dirname+'/data.txt','utf8', ( err, sLetter ) => {
        sAllLetters += sLetter;
        sNameIndexHTML = sNameIndexHTML.replace('{{name}}', sLetter);
        gFs.readFile(__dirname+'/data2.txt','utf8', ( err, sLetter ) => {
            sAllLetters += sLetter;
            sNameIndexHTML = sNameIndexHTML.replace('{{nameTwo}}', sLetter);
            gFs.readFile(__dirname+'/data3.txt','utf8', ( err, sLetter ) => {
                sAllLetters += sLetter;
                sNameIndexHTML = sNameIndexHTML.replace('{{nameThree}}', sLetter);                
                // /* *** Display name of user that is clicked on! *** */
                // sNameIndexHTML = sNameIndexHTML.replace('{{name}}', sAllLetters);
                /* *** Put everything together *** */
                return res.send(sNameIndexHTML);
            })
        }) 
    })
})


/* *** *** *** Read from file / Callbacks, async and NOT in order *** *** *** */
app.get('/see-name2', (req, res)=>{
    var sNameIndexHTML = projectHTML;
    
    var iTasks = 3;
    gFs.readFile(__dirname+'/data.txt','utf8', ( err, sLetter ) => {
        iTasks--;
        sNameIndexHTML = sNameIndexHTML.replace('{{name}}', sLetter);
        sendData();
    });
    gFs.readFile(__dirname+'/data2.txt','utf8', ( err, sLetter ) => {
        iTasks--;
        sNameIndexHTML = sNameIndexHTML.replace('{{nameTwo}}', sLetter);
        sendData();
    });
    gFs.readFile(__dirname+'/data3.txt','utf8', ( err, sLetter ) => {
        iTasks--;
        sNameIndexHTML = sNameIndexHTML.replace('{{nameThree}}', sLetter);
        sendData();
    });
    function sendData(sLetter){
        if(iTasks == 0){
            return res.send(sNameIndexHTML);
        }
    }

})


/* *** *** *** *** *** PORT *** *** *** *** *** */
app.listen(1990, err=>{
    if(err){
        console.log('err', 'cannot use that port');
        return;
    }
    console.log('ok', 'server is listening on port 1990');
})
