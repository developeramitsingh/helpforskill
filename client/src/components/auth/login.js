import React, {useState, useEffect} from 'react';
import '../../bootstrap.min.css';
import './login.css';
import { Button, Form, Row,Col, FormGroup, Label, Input, Alert } from 'reactstrap';
import {connect} from 'react-redux';
import {loginUser, googleAuth} from '../../actions/authActions'
import {Redirect} from 'react-router-dom'
import { GoogleLogin } from 'react-google-login';
import {returnErrors, clearErrors} from '../../actions/errorActions';
import ForgotPassword from './forgotPassword'

const Login = (props)=>{

	const [user, updateUser] = useState({email:'',password:''});
	const [isForget, setForget] = useState('default');
	const [isLogin, setLogin] = useState('default');

	const handleChange = (e)=>{
		const {name, value} = e.target;		
		updateUser({...user, [name]:value})
	}

	const handleSubmit = (e)=>{
		e.preventDefault();		
		const newUser = {				
			email:user.email,				
			password:user.password
		}
		props.loginUser(newUser);		
	}

	const responseGoogle=(res)=>{
		if(res.error){
			console.log(res.error)
			props.returnErrors({msg:res.error}, 400, "Login Fail")

		}else{
			const {googleId, name, email} = res.profileObj;
			let body = {
				id:googleId, 
				name:name, 
				email:email, 
				provider:"google"
			};

			body = JSON.stringify(body);
			console.log(body)
			props.googleAuth(body);	
		}		
	}

	const toggleClass = ()=>{
		console.log("back")
		isLogin==='loginAnim'?setLogin('default'):setLogin('loginAnim');
		isForget==='forgotAnim'?setForget('default'):setForget('forgotAnim');	
	}

	return(
			<div>{props.authState.isAuthenticated?<Redirect to='/dashboard'/>:''}				
				<div className="container">	
					<div className="row">
						<div className="col-md-12">
							<div className="loginDiv">
								<div className="loginGroup" className={isLogin}>								
									<div className="smallHead pb-4">Login Now</div>
									<FormGroup>										
										<Row form className="mt-1">
											<Col md={12}>
											<GoogleLogin
											    clientId="851011634786-sh1mefte3gea2j1e0q0t8mc8mtntafaf.apps.googleusercontent.com"
											    clientSecret="OXtdLi3UiQqHgXL7aHGHuaq_"
											    className="GoogleBtn"
											    buttonText="Login With Google"
											    onSuccess={responseGoogle}
											    onFailure={responseGoogle}
											    cookiePolicy={'single_host_origin'}
											  />												
											</Col>												
										</Row>
									</FormGroup>

									<Row form className="mt-4">
										<Col md={12}>
											<hr className="line"></hr><Label className="space">or</Label><hr className="line"></hr>
										</Col>
									</Row>	
								<Form onSubmit={handleSubmit} className="mt-2">
									{props.errorState.msg?<Alert color="danger">{props.errorState.msg.msg}</Alert>:""}
									{props.authState.isAuthenticated?<Alert color="success">Login Success</Alert>:""}

									<Input type="email" className="FormInput" onChange={handleChange} name ="email" placeholder="Email" autoComplete="email" required/>
									<Input type="password" className="FormInput" name="password" onChange={handleChange} placeholder="Password" autoComplete="new-password" required/>
									<Row form className="mt-5">
										<Col md={12}>
											<input type="submit" className="FormBtn" value="Login" name="Login" onSubmit={handleSubmit}/>											
										</Col>
									</Row>		
									<Row form className="mt-4">	
										<Col md={12}>
											<Label className="LabelLink" onClick={toggleClass}>Forgot password?</Label>											
										</Col>										
									</Row>							
								</Form>
							</div>
							<div className="forgotGroup" className={isForget} style={{display:'none'}}>
								<Row form>
									<Col md={12}>
										<ForgotPassword toggleClass={toggleClass}/>	
									</Col>
								</Row>
							</div>
						</div>	
							
							
							
						</div>
					</div>
				</div>
			</div>
		)
}
const mapStateToProps = (state)=>{
	return{
		authState: state.AuthReducer,
		errorState:state.ErrorAuthReducer
	}	
}

export default connect(mapStateToProps, {loginUser, googleAuth, returnErrors})(Login);