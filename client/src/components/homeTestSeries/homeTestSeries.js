import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import configCors from '../../configCORS/configCORS';
import images from '../../res/images/images'
import '../../materialize.min.css';
import './homeTestSeries.css';
import Loading from '../loading/loading'

class HomeTestSeries extends Component{
	

	componentDidMount(){		
		this.props.loadingData()
		axios.get('http://localhost:5000/testseries/get/getexamlist', configCors)
	 		.then(async (res)=>{
	 		
			this.examListArray = await res.data
			this.props.upadateExamListToServer(this.examListArray)					
			console.log(this.examListArray)

			})					
	}

	render(){
	this.examsLists = this.props.examList
	console.log(this.examsLists);

	this.AllHomeExam = this.examsLists.map((exam) => {
			console.log("Mapping loop... "+ exam.test_id)
			let imagefilter = images.exams.filter(o => o.name===exam.test_id);
			return(
					
					<div className="col s12 m3" key={exam._id}>		
					<div className="card cardCustom z-depth-2">
						<div className="card-image">
							<img className="ExamImage" src={imagefilter[0].path} alt="Exam Pic"/>
						</div>	
						<div className="card-title">{exam.test_name}</div> 
						
						<div className="card-content center">	
							<div className="ExamInfo">{exam.test_info}</div>
							<div className="BuyNowBtn">BUY NOW</div>
						</div>
						<div className="priceDiv right">
							<div className="priceTag">{exam.test_price}</div>
						</div>
						
					 </div>
					</div>				
				)
		});	

		return(
				<div>
					<div className="container">
						<div className="row">
							<div className="col-md-12 center">
								{this.props.isLoading?<Loading/> :this.AllHomeExam}
							</div>
						</div>
					</div>
				</div>
				
			);
	}	
}


const mapStateToProps = (state)=>{
	return {
		isLoading:state.ExamListReducer.loading,
		examList:state.ExamListReducer.homeTestSeries.ExamList
	}
}
const mapDispatchToProps = (dispatch) =>{
	return{
		loadingData:()=>{dispatch({type:"loadingData"})},
		upadateExamListToServer: (examListArray)=>{dispatch({type:"updateExamListFromServer", "payload":examListArray})},
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeTestSeries)