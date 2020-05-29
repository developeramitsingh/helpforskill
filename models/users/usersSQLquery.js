const pool = require('../../mySqlConfig/mySqlConfig');

module.exports = {
	createUser:(data, callBack)=>{
		pool.query('insert into users_db.users(name, email, password, mobile) values(?,?,?,?)', 
			[
				data.name,
				data.email,
				data.password,	 			
				data.mobile
			],(error, results)=>{
				if(error){
				 	return callBack(error +" --Inside ");
				}
				return callBack(null, results);
			})
	},

	checkUser:(data, callBack)=>{
		
		pool.query('select * from users_db.users where email = ?',
			[
				data.email
			],(error, results)=>{
				if(error) return callBack(error);
				return callBack(null, results);
			});
	},
	getTableData:(callBack)=>{
		pool.query('select * from users_db.users', [],(error, results)=>{
			if(error) return callBack(error);
			return callBack(null, results);
		})
	},
	updatePassword:(data, callBack)=>{
		pool.query('UPDATE users_db.users SET password = ? WHERE email = ?', 
			[
				data.password,
				data.email
			],(error, results)=>{
				if(error){ return callBack(error)}
				else{
					return callBack(null, results)
				}
			})
	}
	
}
