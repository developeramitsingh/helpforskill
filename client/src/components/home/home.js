import React from 'react';
import HomeTestSeries from '../homeTestSeries/homeTestSeries'
import './home.css';
import '../../bootstrap.min.css';


const Home = (props)=>{
	return(
			<div className="App">
				<div className="container-fluid Home">
					<div className="container">
					 	<div className="row">
					 		<div className="col-md-6">
					 			<div className="OrangeHeading">Test Series</div><div className="BlueHeading">At Affordable Price</div>
					 			<div>Help for Skill provides you Test Series at very minimum price so that everybody can be benfited with our efforts.</div>
					 			<div className="section"></div>
					 			

					 			<div className="searchDivHome">
					 				<input type="text" placeholder="Search for exam"/>
					 				<div className="SearchBtn">Search</div>
					 			</div>
					 		</div>
					 	</div>	
					</div>
				</div>

				<div className="section"></div>
				<div className="section"></div>
				<div className="container">
				 	<div className="row">
				 		<div className="col-md-12">
				 			<div className="BlueHeading smallHead center">Test Series for Upcoming Govt Exams</div>
				 			
				 			<hr/>
				 			<div className="section"></div>
				 			<HomeTestSeries/>
				 		</div>
					</div>				
				</div>
			</div>
		)
}


export default Home;