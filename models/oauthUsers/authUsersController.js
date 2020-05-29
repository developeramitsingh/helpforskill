const {checkOAuthUser, createOAuthUser}  = require('./authUsersSQLquery')
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
	googleAuth:(req, res)=>{
		let body = req.body;
		
		checkOAuthUser(body.id, (err, results)=>{
			if(err){return res.status(400).json({success:0, msg:err})}
			else{
					console.log(results)
					if(results.length>0)
					{
						console.log("login user");						
						jwt.sign(
									{id:results[0].id, provider:results[0].provider},								
									process.env.jwtSecret,
									{expiresIn:(3600*24*7*30)},
									(err, token)=>{
										if(err) {throw err}
										return res.status(200).json({	
													token:token,
													success:1, 
													user:{
															name: results[0].name,
															email: results[0].email,
															provider:results[0].provider
														}
												})										
									}
								)
					}
					else
					{
						console.log("user is not Present");
						createOAuthUser(body, (err, results)=>{
							if(err){return res.status(400).json({success:0, msg:err})}
							else{					
									jwt.sign(
												{id:body.id, provider:body.provider},								
												process.env.jwtSecret,
												{expiresIn:(3600*24*7*30)},
												(err, token)=>{
													if(err) {throw err}
													return res.status(200).json({												
																token:token,
																success:1, 
																user:{
																		name: body.name,
																		email: body.email,
																		provider:body.provider
																	}
															})
												}
											)				
								
								}		
						})
					}
				}	
		})
	}	
}

