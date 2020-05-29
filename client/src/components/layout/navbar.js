import React, {Component} from  'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import logo from '../../logo.png'
import '../../materialize.min.css'
import './nav.css'
import SigninLinks from './signinLinks'
import SignoutLinks from './signoutLinks'


class Navbar extends Component{
	render(){
		return(
				<nav className="navCustom">
					<div className="container">
						<div className="nav-wrapper">
					      <Link to='/' className="brand-logo"><img className="logoImg" src={logo} alt="logo"/></Link>
					      
					      <ul id="nav-mobile" className="right">
					      	{this.props.user === null?<SignoutLinks/>:<SigninLinks/>} 	
						  </ul>
					    </div>
				    </div>
				</nav>

			)
	}
}

const mapStateToProps = (state)=>{
	return {
		user: state.AuthReducer.user
	}
}

export default connect(mapStateToProps)(Navbar);