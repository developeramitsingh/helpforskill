import React from 'react';
import './sectionQues.css'

const QuesComponent = ()=>{
	return (
			<div className="quesCont row">
					<div className="ques">
						A clock strikes once at 1 o’clock, twice at 2 o’clock, thrice at 3 o’clock and so on. How many times will it strike in 24 hours
					</div>
					<div className="optionCont">
						<fieldset id="optionGroup">
							<div className="option">	
								<input type="radio" value="A. 1/55" name="optionGroup" className="option"/><span>A. 1/55</span>
							</div>
							<div className="option">
								<input type="radio" value="B. 1/55" name="optionGroup" className="option"/><span>B. 1/55</span>
							</div>
							<div className="option">
								<input type="radio" value="C. 1/55" name="optionGroup" className="option"/><span>C. 1/55</span>
							</div>
							<div className="option">
								<input type="radio" value="D. 1/55" name="optionGroup" className="option"/><span>D. 1/55</span>
							</div >
						</fieldset>
					</div>
				</div>	

		)
}

export default QuesComponent;