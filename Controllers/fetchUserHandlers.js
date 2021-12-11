const { sqlConnection } = require("../connection/sql_conn");

const fetchUserHandler = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {

            //Query for finding the user
            let query = `select * from users where userId=${userId};`;

            sqlConnection.query(query, ((err, user) => {
                //If there is no error
                if (!err) {

                    //Query for Fetching the user address from address table with reference userId
                    sqlConnection.query(`select * from usersaddress where userId=${userId};`, ((err, result) => {
                        if (!err) {
                            resolve({ user, result, status: true });
                        }
                        else return { status: false };
                    }));

                }
                else return { status: false };
            }));
        } catch (err) {//error handling
            return { status: false };
        }
    })
};

module.exports = { fetchUserHandler };