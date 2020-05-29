const { createUser, checkUser, getNewUser} = require('./usersSQLquery');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();


module.exports = {
	signupUser: (req, res)=>{
		let body = req.body;
		
		checkUser(body, (err, results)=>{
			if(results.length>0){
				res.status(500).json({"msg":"Email id already exists"});	
			}
			else
			{
				//create salt
				bcrypt.genSalt(10, (err, salt)=>{
					bcrypt.hash(body.password, salt, async (err, hash)=>{
						if(err){throw err};
						body.password = await hash;
						
						//calling createUser Query function fro userSQLquery file
						createUser(body, (err, results)=>{
							if(err){
								console.log(err);
								return res.status(500).json({
									success:0,
									msg:err
								});
							}
							
							jwt.sign(
									{email:body.email},
									process.env.jwtSecret,
									{expiresIn:(3600*24*7*30)},
									(err, token)=>{
										if(err) throw err;
										return res.status(200).json({
											token:token,
											success:1,
											user:{
												name: body.name,
												email: body.email,
												mobile:body.mobile	
											}
											
										})
									}
								)
							
						})
					})
				})				
			} 			
			
		});

		 
	}	
}