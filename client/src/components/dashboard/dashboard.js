import React, {Component} from 'react';
import MytestSeries from '../testseries/mytestseries'
import '../../bootstrap.min.css'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import './dashboard.css';

class Dashboard extends Component{
	render(){
		return(				
				<div className="container Dashboard">
					{!this.props.authState.isAuthenticated?<Redirect to='/'/>:''}
					<div className="row">
						<div className="col-sm-12">
							
							<h4>My Tests</h4>
							<div className="card z-depth-0">
								<div className="card-content card-contet-custom">
									<div className="container">
										<div className="row">
										{this.props.testPurchased.length>0?(<MytestSeries testid={this.props.testPurchased}/>) : <div className="col-sm-12">You don't have tests</div>}
										</div>
									</div>		
								</div>
							</div>
						</div>
					</div>
				</div>
			)
	}
}

const mapStateToProps = (state)=>{
	return{
		testPurchased:state.AddLoggedInReducer.testPurchased,
		authState: state.AuthReducer,
	}
}

export default connect(mapStateToProps)(Dashboard);