const sql = require('mysql');


var sqlConnection = sql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    multipleStatements: true,
    connectionLimit: 10
});
sqlConnection.connect((err) => {
    if (!err) console.log("Connected Successfully");
    else console.log(err)
});

module.exports = { sqlConnection };