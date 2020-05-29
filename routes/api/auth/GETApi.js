const express = require('express');
const router = express.Router();
const {currentUser} = require('../../../models/users/loggedUserController');
const {getMobile} = require('../../../models/users/forgotPasswordController');
const {verifyToken} = require('../../../middlewares/authMiddleware');
//const passport = require('passport');

router.get('/currentUser', verifyToken, currentUser);

router.get('/getMobile/:email', getMobile);
/*router.get('/google', passport.authenticate('google', {session:false, 
	scope:['profile','email']
}))

router.get('/google/redirect', passport.authenticate('google',{session:false, FailureRedirect:'http://localhost:3000/login'}), (req, res)=>{
	
	res.send(req.user)
});*/





module.exports = router;