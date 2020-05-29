const bcrypt = require('bcryptjs');


module.exports = {
	getBcryptHash: (password, callback)=>{		
		bcrypt.genSalt(10, (err, salt)=>{
			bcrypt.hash(password, salt, async (err, hash)=>{
				if(err){callback(err,null)}
				else{
					callback(null, hash)
				} 				
			})
		})
		
	},

	compareBcrypt:(password, userPwd)=>{
		bcrypt.compare(password, userPwd)
			.then((isMatch)=>{
				if(!isMatch)
				{ 
					return false;
				}	
				else{
					return true;
				}
			})	
	}
}