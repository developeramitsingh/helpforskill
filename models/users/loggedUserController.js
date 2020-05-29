const {checkUser} = require('./usersSQLquery');
const {checkOAuthUser} = require('../oauthUsers/authUsersSQLquery');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
	currentUser:(req, res)=>{
		const body= req.user;
		console.log("--------------")
		console.log(body)
		console.log("--------------END")
		
		if(body.provider){ //check for oAuth provider 
			checkOAuthUser(body.id, (err, results)=>{
				if(err) {res.status(400).json({msg:err})}
				else{
					console.log("results oAuth" + results)
					if(results.length>0){
						return res.status(200).json({
							id:results[0].id,
							name:results[0].name,
							email:results[0].email,
							provider:results[0].provider,														
						})
					}
					else{
						return res.status(200).json({"msg":"User is not Registered"})
					}
				}	
			})

		}else{
			checkUser(body, (err, results)=>{
				if(err){res.status(400).json({msg:err})}
				else{
					console.log("results", results)
					if(results.length>0){
						return res.status(200).json(
							{
								name:results[0].name,
								email:results[0].email,							
								mobile:results[0].mobile 
							})
					}
					else{
						return res.status(200).json({"msg":"User is not Registered"})
					}
				}

			})	
		}
		
	}
}