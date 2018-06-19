//exam.com/alex
//exam.com/?name=katrin&lastname=sig


app.get('/:name', (req,res)=>{
    var sName = req.params.name;

})

app.get('/', (req,res)=>{
    var sName = req.query.name;
})

