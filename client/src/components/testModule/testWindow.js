import React, {useState} from 'react';
import '../../materialize.min.css';
import logo from '../../logo.png';
import './testWindow.css'
import SectionQues from './sectionQues';
const TestWindow = ()=>{
	return (
			<div className="testWindow">
				<div className="container-fluid">
					<div className="row bshadow pd-10">								
						<div className="col-sm-12 col-md-8">
							<div className="sectionHeading">
								<img className="testLogo" src={logo} alt="logo"/>
								<h3 className="ExamName">NIC Technical Assitants</h3>
							</div>	
						</div>
						<div className="col-sm-12 col-md-4">
							<div className="timerSection">
								<div className="timeLeft">Time Left: <span className="timeSpan">02:55:10</span></div>
								<div className="pauseTime button">Pause</div>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-sm-12 col-md-9">
							<div className="sectionContainer">						
								<div className="sections">
									<b>Sections |</b>
									<div className="sectionName activeSection">Section A: General</div>
									<div className="sectionName">Section B: Technical</div>		
								</div>
								<div className="switchLanguage">
									<span><b>View in</b></span>
									<select name="language" defaultValue="English" id="langaugeSelect">
										<option defaultValue="Hindi">Hindi</option>
										<option defaultValue="English">English</option>						
									</select>
								</div>
							</div>
							
							<SectionQues/>
						</div>

						<div className="col-sm-12 col-md-3">
							<div className="markReviewCont">
								<div className="activeUser"><span>&#x263A;</span> Amit</div>
								<hr/>
								<div className="legendsReview">
									<div>
										<span id="answered">1</span>Answered
										<span id="marked">10</span>Marked
									</div>
									
									<div>					
										<span id="notVisited">2</span>Not Visited
										<span id="markedAnswered">20</span>Marked and Answered
									</div>
									
									<div>	
										<span id="notanswered">12</span>Not Answered
									</div>	
								</div>
								<hr/>
								<div className="currentReviewSection">
									SECTION : Section A : General
								</div>
							</div>
						</div>

					</div>

				</div>	
			</div>	

		)
}

export default TestWindow;