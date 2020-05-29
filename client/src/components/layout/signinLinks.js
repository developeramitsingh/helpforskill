import React, {Component} from  'react'
import {NavLink} from 'react-router-dom'
import '../../materialize.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css'
import {connect} from 'react-redux'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {logoutUser} from '../../actions/authActions';


class Signinlinks extends Component{
	constructor(props){
		super(props)
		this.state = {
			dropdownOpen:false
		}
	}
	toggle = ()=>{
		this.setState({
			dropdownOpen:!this.state.dropdownOpen
		})
	}
	render(){
		return(
				
				<ul className="right">
					<li><NavLink to='/' className='links'>Home</NavLink></li>
					<li><NavLink to='/dashboard' className='links'>Dashboard</NavLink></li>
					
					<li><ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
						<DropdownToggle caret style={{background:'#0B1052'}}>Welcome {this.props.user.name}</DropdownToggle>
							<DropdownMenu style={{width:'100% !important'}}>
								
								<DropdownItem ><div className="center" onClick={this.props.logoutUser}>Logout</div></DropdownItem>

							</DropdownMenu>
						</ButtonDropdown>
					</li>	

				</ul>

			)
	}	
}

const mapStateToProps = (state)=>{
	return {
		user:state.AuthReducer.user
	}
}
export default connect(mapStateToProps, {logoutUser})(Signinlinks);