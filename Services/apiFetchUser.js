const { fetchUserHandler } = require("../Controllers/fetchUserHandlers");

const fetchUser = (req, res) => {
    let { custid } = req.query;
    
    fetchUserHandler(custid).then((response) => {
        if (response.status) {
            res.json({response});
        }
    }).catch((err) => {
        console.log(err);
        return res.status(500).json({ status: false })
    })
};

module.exports = fetchUser;