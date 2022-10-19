const express = require('express');

const bodyParser = require('body-parser');

const ejs = require('ejs');

const app = express();

app.set('view engine','ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended : true}));

app.get('/',function(req,res){
  let welcome = "hello";
  res.render('index',{wel : welcome});
});
app.post('/',function(req,res){
  let add = req.body.Address;
  let type = req.body.type;
  console.log(add);
  console.log(type);
  res.redirect('/');
});
app.listen(3000,function(response){
  console.log('server is running');
});
