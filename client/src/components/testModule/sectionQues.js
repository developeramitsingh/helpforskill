import React from 'react'
import './sectionQues.css'
import QuesComponent from './quesComponent'

const SectionQues = ()=>{


	return(
			<div className ="SectionQues container-fluid">
				<div className="quesNumCont row">
					<div className="quesNum">
						Question No. 1
					</div>
					<div className="marksCont">
						Marks
						<span className="positive">+1</span>
						<span className="negative">-0.25</span>
					</div>
				</div>
				<QuesComponent/>

				<div className="quesBtns row">
					<div className="col-sm-12 col-lg-4 p-2">
						<div className="btn markRevBtn">Mark for Review & next</div>
					</div>

					<div className="col-sm-12 col-lg-4 p-2">
						<div className="btn clearResBtn">Clear Response</div>
					</div>

					<div className="col-sm-12 col-lg-4 p-2">
						<div className="btn saveBtn">Save & next</div>
					</div>
				</div>
				
			</div>
		)
}

export default SectionQues;