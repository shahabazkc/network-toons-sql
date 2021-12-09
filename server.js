const express = require('express');

require('dotenv').config();

const sqlConn = require('./connection/sql_conn');
const app = express();


//Starting the server
app.listen(process.env.PORT,()=>{
    console.log(`server started on port ${process.env.PORT}`);
})