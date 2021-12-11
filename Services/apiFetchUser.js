const { fetchUserHandler } = require("../Controllers/fetchUserHandlers");

const fetchUser = (req, res) => {

    let { custid } = req.query;

    //Fetch user handler
    fetchUserHandler(custid).then((response) => {
        if (response.status) {
            res.status(200).json({ response });
        }
        else {
            res.status(500).json({ status: false });
        }
    }).catch((err) => {//Error handling
        return res.status(500).json({ status: false })
    })
};

module.exports = fetchUser;