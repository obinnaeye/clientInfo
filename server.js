var express = require('express');
var app = express();
var useragent = require('useragent');



app.enable('trust proxy');

app.get(["/", "/whoami"], function (req, res) {
  var agent = useragent.parse(req.headers['user-agent']);
  
  var jsonData = {
      ipaddress: req.headers['x-forwarded-for'],
      language:  req.headers["accept-language"].slice(0, 5),
      software: agent.toString()
  }
    
  res.send(jsonData);
});



app.listen(process.env.PORT, function () {
  console.log('Example app listening on port:', process.env.PORT);
});