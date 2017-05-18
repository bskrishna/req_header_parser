var express = require('express');
var app = express();

app.get('/', function (req, res) {
    var resObj =
    {
        ipaddress: "",
        language: "",
        software: ""
    };
    resObj.ipaddress = req.headers['x-forwarded-for'];
    resObj.language = req.headers['accept-language'].split(",");
    resObj.language = resObj.language[0];
    resObj.software = req.headers['user-agent'].split("(")[1].split(")")[0];
    res.writeHead(200, {'content-type': 'text/html'});
    res.write(JSON.stringify(resObj));
    res.end();
});

app.listen(process.env.PORT || 8080, function () {
  console.log('App listening on port 3000!')
});
