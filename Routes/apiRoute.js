const fetchUser = require('../Services/apiFetchUser');

const router = require('express').Router();

router.get('/project1/sp=getCustomers',fetchUser)

module.exports = router;