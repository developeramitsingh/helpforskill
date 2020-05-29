const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const setsSchema = new Schema({
	test_id:{
		type:String,
		required:true
	},
	test_name:{
		type:String,
		required:true
	},
	test_set:{
		type:"number",
		required:true
	},
	total_ques:{
		type:"number",
		required:true
	},
	total_marks:{
		type:"number",
		required:true
	},
	negative_marks:{
		type:"number",
		required:true
	},
	time:{
		type:String,
		required:true
	},
	Sections:{
		type:Array
	}
	
});

module.exports = SetsSchema = mongoose.model('Sets', setsSchema);