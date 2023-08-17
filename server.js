const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.listen(8080, function(){
    console.log('listening on 8080')
});

app.get('/',function(req,res){
    res.sendFile(__dirname+ '/index.html');
});

app.get('/about',function(req,res){
    res.sendFile(__dirname+ '/about.html');
});