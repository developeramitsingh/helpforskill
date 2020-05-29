const {checkUser} = require('./usersSQLquery');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcryptjs');

module.exports = {
	login:(req, res)=>{
		const body = req.body;
		console.log("body " , body)
		checkUser(body, (err, results)=>{
			if(err){
				console.log(err); 
				return res.status(400).json({success:0, msg:err})
			}
			else if(results.length>0){
				const userPwd = results[0].password; //getting password of 1st search obj				
				bcrypt.compare(body.password, userPwd).then((isMatch)=>{
						if(!isMatch){ return res.status(400).json({success:0, msg:"Password did not Match"})}
						else{
							jwt.sign(
								{email:body.email},
								process.env.jwtSecret,
								{expiresIn:(3600*24*7*30)},
								(err, token)=>{
									if(err) {throw err}
									return res.status(200).json(
									{	
										token:token,
										success:1, 
										user:{
												name: results[0].name,
												email: results[0].email,
												mobile:results[0].mobile	
											}
									})
								}
							)
						}	
					}).catch(err=>console.log(err))			
			}
			else{
				res.status(400).json({success:0, msg:"Email and Password Wrong"})
			}
			
				
		})
	}
}