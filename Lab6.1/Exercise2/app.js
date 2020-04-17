var express = require('express');
var bodyParser = require("body-parser");
var app = express();
app.listen(3000);
var requestTime=function(req,res,next){
    req.requestTime=Date.now()
    next()
}
app.use(requestTime)
app.get('/greet', function(req,res){
    console.log('GET received: ' +req.requestTime);
    res.send('GET: hello world!');
})

app.post('/greet',function(req,res){
    console.log("POST received: "+req.requestTime);
    res.end('POST:Hello World !!');
  })

  app.put('/greet', function (req, res) {
      console.log("Put request received: " +req.requestTime);
    res.send('PUT: Hello World!!!');
  })
