import React from 'react';
import images from '../../res/images/images'
import strings from '../../res/strings/strings'
import './MyTestSeries.css';


const MytestSeries=(props)=>{
	const examPurchased = props.testid;
	
	
 
	const examCard = examPurchased.map((examItem) =>{
		let imagefilter = images.exams.filter(o => o.name===examItem.id);
				
		return (
			<div className="col s12 m4">		
				<div className="card cardCustom z-depth-2"   key={examItem.id}>
					<div className="card-image">
						<img className="ExamImage" src={imagefilter[0].path} alt="Exam Pic"/>
					</div>	
					<div className="card-title">{examItem.name}</div> 
					
					<div className="card-content">	
						<div className="ExamInfo">{strings.exam[examItem.id]}</div>
					</div>
				</div>
			</div>	
			)
	});

	return(
			<div>
				{examCard}				
			</div>
		)
	
}

export default MytestSeries;