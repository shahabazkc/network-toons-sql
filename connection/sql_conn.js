const sql = require('mysql');


var sqlConnection = sql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    multipleStatements: true,
    connectionLimit: 10
});

try {
    sqlConnection.connect((err) => {
        if (!err) {
            console.log("Connected Successfully");
            sqlConnection.query(process.env.CREATE_USER_TABLE_QUERY, ((err, res) => {
                if (!err) {
                    sqlConnection.query(process.env.CREATE_USERADDRESS_TABLE_QUERY, ((err, result) => {
                        if (!err) {
                            console.log("Created Tables If Not Exist");
                        } else console.log(err);
                    }))
                }
                else console.log(err);
            }))
        }
        else console.log(err)
    });

}
catch (err) {
    console.log("something went wrong while connecting to the database")
}



module.exports = { sqlConnection };