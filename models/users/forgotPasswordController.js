const {updatePassword, checkUser} = require('./usersSQLquery');
const {getBcryptHash} = require('../../common/bcrypt');


module.exports = {

	getMobile:(req, res)=>{								
		checkUser(req.params, (err, results)=>{
			if(err){return res.status(500).json({success:0, msg:err})}
			else{				
				if(results.length>0){
					return res.status(200).json({success:1, mobile:results[0].mobile})	
				}
				else{
					return res.status(200).json({success:1, mobile:'', msg:"Email id not found"})
				}				
			}	
		})
	},

	forgotPassword:(req, res)=>{		
		let body = req.body;

		let pass = new Promise((resolve, reject)=>{
			getBcryptHash(body.password, (err, hash)=>{
				if(err){
					console.log(err)
					reject(err)
				}else{
					console.log("Callback: " + hash)
					resolve(hash);
				}
			})
		})

		pass.then(hash=>{
			body.password = hash;		

			updatePassword(body, (err, results)=>{
				if(err){return res.status(500).json({success:0, msg:err})}
				else{
					return res.status(200).json({success:1, msg:results})
				}	
			})//calling query to update password
		})		
		
	}

}