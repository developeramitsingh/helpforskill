const express  = require("express");
const router = express.Router();


//importing models schema for testseries apis
const ExamList = require('../../../models/testseries/examListSchema');
const Sets = require('../../../models/testseries/setsSchema');


router.post("/putnewexam", (req,res)=>{
	const newExam = new ExamList({
		test_id:req.body.test_id,
		test_name:req.body.test_name,
		test_info:req.body.test_info,
		test_price:req.body.test_price,
		total_tests:req.body.total_tests,
		test_available:req.body.test_available
	})
	newExam.save()
		.then(examAdded => res.json(examAdded))
		.catch(err => console.log(err + " cant add new exam"))
	
})


router.post("/putexamques", (req, res)=>{
	const newExamSet = new Sets({
		test_id: req.body.test_id,
	    test_name:req.body.test_name,
	    test_set: req.body.test_set,
	    total_ques: req.body.total_ques,
	    total_marks: req.body.total_marks,
	    negative_marks: req.body.negative_marks,
	    time: req.body.time,
	    Sections:req.body.Sections
	})
	newExamSet.save()
		.then(examsetAdded => res.json(examsetAdded))
		.catch(err => console.log(err))
})


module.exports = router;