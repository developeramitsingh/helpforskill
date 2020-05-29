const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = {
	verifyToken:(req, res, next)=>{
		const token = req.header('x-auth-token');
		
		//check for token 
		if(!token){
			console.log("Unauthorized Token")
			return res.status(401).json("Unauthorized Access without Token")
		}

		try{
			const decoded = jwt.verify(token, process.env.jwtSecret)
			//add user form payload
			console.log(decoded)
			console.log("-------------------------")			
			req.user = decoded;
			next();	

		}catch(e){
			console.log("Invalid Token")
			res.status(401).json({msg:"Invaild Token:" +e})
		}		
	}
}