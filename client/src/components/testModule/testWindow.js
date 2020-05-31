import React, {useState} from 'react';
import '../../materialize.min.css';
import logo from '../../logo.png';
import './testWindow.css'
const TestWindow = ()=>{
	return (
			<div className="testWindow">
				<div className="container-fluid">
					<div className="row bshadow pd-10">											
						<div className="col-sm-12 col-lg-8">
							<div className="sectionHeading">
								<img className="testLogo" src={logo} alt="logo"/>
								<h3 className="ExamName">NIC Technical Assitants</h3>
							</div>	
						</div>
						<div className="col-sm-12 col-lg-4">
							<div className="timerSection">
								<div className="timeLeft">Time Left: <span className="timeSpan">02:55:10</span></div>
								<div className="pauseTime button">Pause</div>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-sm-12 col-lg-8">
							<div className="sectionContainer">						
								<div className="sections">
									<b>Sections |</b>
									<div className="sectionName activeSection">Section A: General</div>
									<div className="sectionName">Section B: Technical</div>		
								</div>
								<div className="switchLanguage">
									<label>View in</label>
									<select name="language" defaultValue="English" id="langaugeSelect">
										<option defaultValue="Hindi">Hindi</option>
										<option defaultValue="English">English</option>						
									</select>
								</div>
							</div>
						</div>
					</div>

				</div>	
			</div>	

		)
}

export default TestWindow;