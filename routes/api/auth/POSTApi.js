const express = require('express');
const router = express.Router();
const {signupUser} = require('../../../models/users/signupController');
const {login} = require('../../../models/users/loginController');
const {googleAuth} = require('../../../models/oauthUsers/authUsersController');
const {forgotPassword} = require('../../../models/users/forgotPasswordController')

router.post('/login', login)

router.post('/signup', signupUser)

router.post('/google', googleAuth);

router.post('/forgotPassword', forgotPassword);

module.exports = router;