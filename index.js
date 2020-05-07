
const express= require('express');
const db= require('./config/mongoose');
const bodyParser = require('body-parser')
const apiRoutes = require('./route/adminController')
const port=8000;

const app=express();
app.use(bodyParser.json())
app.use('/bus', apiRoutes)
app.listen(port,function(err)
{
    if(err)
    {
        console("ERROR: Server is not listening on the port", port);
        return;
    }
    console.log("Server is up & Successfully running on the port",port);
})