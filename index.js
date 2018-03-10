var express = require('express');
var params = require('./params.js');
var consolidate = require('consolidate');
console.log(params);

var app = express();

var vera = {
  name: "Vera",
  age: 26,
  nationality: 'Serbian'
}

var nemanja = {
  name: "Nemanja",
  age: 31,
  nationality: 'Serbian'
}

app.engine('html', consolidate.handlebars);
app.set('views', __dirname + '/views');
app.set('view engine', 'html')

var staticRouter = express.static(__dirname + '/public');
app.use(staticRouter);

app.get('/test', function(request, response){
   response.render('index', {
     nemanja: nemanja,
     vera: vera,
   });
});

app.listen(8080, function(){
  console.log('server started');
});
