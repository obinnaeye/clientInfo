const express = require('express');
const app = express();


app.enable('trust proxy');

app.get('/' || "/whoami", function (req, res) {
  const clientIP = req.ip.slice(7);
  const jsonData = {
      ipaddress: req.headers['x-forwarded-for'],
      info: req.headers['user-agent']
  }
  
    
  res.send(jsonData);
});



app.listen(process.env.PORT, function () {
  console.log('Example app listening on port:', process.env.PORT);
});