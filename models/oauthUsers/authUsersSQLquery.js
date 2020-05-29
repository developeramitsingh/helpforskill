const pool = require('../../mySqlConfig/mySqlConfig');

module.exports = {
	createOAuthUser:(data, callBack)=>{
		pool.query('insert into users_db.users_oauth(id, name, email, provider) values(?,?,?,?)', 
			[
				data.id,
				data.name,	 			
				data.email,				
				data.provider
			],(error, results)=>{
				if(error){
				 	return callBack(error);
				}
				return callBack(null, results);
			});
	},

	checkOAuthUser:(id, callBack)=>{		
		pool.query('select * from users_db.users_oauth where id = ?',
			[
				id
			],(error, results)=>{
				if(error) return callBack(error);
				return callBack(null, results);
			});
	},
}	