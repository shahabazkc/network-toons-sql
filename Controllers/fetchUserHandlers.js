const { sqlConnection } = require("../connection/sql_conn");

const fetchUserHandler = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let query = `select * from users where userId=${userId};`;
            sqlConnection.query(query, ((err, user) => {
                if (!err) {
                    sqlConnection.query(`select * from usersaddress where userId=${userId};`, ((err, result) => {
                        if (!err) {
                            resolve({ user, result, status: true });
                        }
                        else return { status: false };
                    }));
                }
                else return { status: false };
            }));
        } catch (err) {
            return { status: false };
        }
    })
};

module.exports = { fetchUserHandler };