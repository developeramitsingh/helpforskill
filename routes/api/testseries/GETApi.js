const express  = require("express");
const router = express.Router();
const {verifyToken} = require('../../../middlewares/authMiddleware')

//importing models schema for testseries apis
const ExamList = require('../../../models/testseries/examListSchema');
const Sets = require('../../../models/testseries/setsSchema');


//returns all exams present in database
router.get("/getexamlist", (req, res)=>{
	/*if(req.session.page_views){
		req.session.page_views++;
		res.send("you visited this page  "+req.session.page_views +" times");

	}else{
			req.session.page_views =1 ;
			res.send("welcome to this page for the first time");
	}*/
	
	ExamList.find()
		.then(exams => res.json(exams));

	res.cookie('name','Amit', {expire: 36000 + Date.now()});
	
});


//returns all sets of particular exam by exam id
router.get("/gettestsets/:id", (req, res)=>{
	const examID= req.params.id;
	Sets.find()
		.then((set) => {
						 set = set.filter(item => item.test_id == examID)
						 res.json(set);
			 		  })
		.catch(err=> res.json(err))
});	

//return a set of particular exam by 
router.get("/gettestset/:testid/:testsetno", (req, res)=>{
	const examID = req.params.testid;
	const setNo = req.params.testsetno;
	
	Sets.find()
		.then((wholeset) =>{
			wholeset = wholeset.filter(set=> {
				return (set.test_id == examID && set.test_set == setNo)
			})
			res.json(wholeset)
			
		})	
})

module.exports = router;