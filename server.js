const express = require('express');

require('dotenv').config();
const apiRoute = require('./Routes/apiRoute');
const sqlConn = require('./connection/sql_conn');
const app = express();

app.use('/api',apiRoute);

//Starting the server
app.listen(process.env.PORT,()=>{
    console.log(`server started on port ${process.env.PORT}`);
})