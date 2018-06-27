var express = require('express')
app = express()

app.use('/scripts', express.static(__dirname + '/node_modules'));
app.use('/site-assets', express.static(__dirname + '/'));
app.use(express.static(__dirname + '/View'))

//assuming app is express Object.
app.get('/',function(req,res){

res.sendFile('index.html');
});


app.listen(process.env.PORT || 3003, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3003))
})
