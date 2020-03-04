const express = require("express");
const bodyParser = require("body-parser");

const business = require("./libs/business/business.route");

const app = express();

app.use(function(req, res, next){

res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Credentials', 'true');
res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH,HEAD');
res.header('Access-Control-Expose-Headers','Content-Length');
res.header('Access-Control-Allow-Headers', 'Accept, Authorization,Content-Type, X-Requested-With, Range');

if(req.method === 'OPTIONS'){
    return res.send(200);
}
else{
    return next();
}
});

app.use(bodyParser.json());
business.businessRoutes(app);

app.listen(3000, function (){
    console.log("Now Listening at port %s",3000);
});