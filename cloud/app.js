var express=require('express');
var app=express();

app.set('views','cloud/views');
app.set('view engine','ejs');

app.get('/',function(req, res){
  res.render('hello',{message:'hello world!'});
})

app.listen();