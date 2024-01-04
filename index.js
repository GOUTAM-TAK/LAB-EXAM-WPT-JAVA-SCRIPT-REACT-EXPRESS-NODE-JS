//add all dependencies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
var router = require('./Router/router');
//middle ware

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use("/",router);

app.listen(9090,function() {
    console.log("Server is running on port 9090");
});
module.exports =app;