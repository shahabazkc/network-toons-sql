const fetchUser = require('../Services/apiFetchUser');

const router = require('express').Router();

//Route for fetching the get user Details
router.get('/project1/sp=getCustomers',fetchUser)

module.exports = router;