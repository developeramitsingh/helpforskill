const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const examListSchema = new Schema({
	test_id:{
		type:String,
		
	},
	test_name:{
		type:String,
		
	},
	test_info:{
		type:String,
		
	},
	test_price:{
		type:String,
		
	},
	total_tests:{
		type:"number",
		
	},
	test_available:{
		type:"boolean",
		
	}
});

module.exports = ExamList = mongoose.model('ExamList', examListSchema);
