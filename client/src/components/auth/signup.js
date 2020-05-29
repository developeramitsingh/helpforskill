import React, {useState, useEffect} from 'react';
import '../../bootstrap.min.css';
import './signup.css';
import { SocialIcon } from 'react-social-icons';
import { Button, Form, Row,Col, FormGroup, Label, Input, Alert } from 'reactstrap';
import {connect} from 'react-redux';
import {signupUser, googleAuth} from '../../actions/authActions'
import {Redirect} from 'react-router-dom'
import { GoogleLogin } from 'react-google-login';
import {returnErrors, clearErrors} from '../../actions/errorActions';
import { USER_LOADING, USER_LOADED, LOGIN_SUCCESS, SIGNUP_SUCCESS, AUTH_ERROR, LOGIN_FAIL, LOGOUT_SUCCESS, SIGNUP_FAIL, GET_LOGGED_IN_USER} from '../../actionTypes/actionTypes';

const Signup = (props)=>{
	const [user, updateUser] = useState({name:'', email:'',mobile:'', password:'', repassword:''});
	const [formErrors, updateErrors] = useState({name:'', email:'', mobile:'', password:'', repassword:''});
	
	
	const handleChange = (e)=>{
		const {name, value} = e.target;
		
		updateUser({...user, [name]:value})
  		

		let fErrors = formErrors;
		switch(name){
			case "name":
				fErrors.name = value.length < 3  && value.length > 0? "Minimum 3 characters required":'';	
				break;

			case "email":
				fErrors.email = value.length < 5  && value.length > 0? "Email is not valid":'';
				break;
			
			case "mobile":
				fErrors.mobile = checkMobile(value)  && value.length > 0? '':'Not a valid number';
				break;			
			
			default:
				break;			
		}		

	}

	useEffect(()=>{
			let password = user.password.length > 0 ? validatePassword() : '';
			let repassword = user.repassword.length > 0? validatePassword():'';	
			updateErrors({...formErrors, password:password, repassword:repassword})
			
	},[user.name, user.email, user.mobile, user.password, user.repassword])



	const checkMobile = (mobile)=>{
		let inValue = mobile;
		if(inValue.match(/^([+]\d{2})?\d{10}$/)){			
			console.log("Mobile Matched..")
			return true;					
		}else{			
			console.log("Mobile not Matched..")					
			return false;			
		}		
	}

	const validatePassword = ()=>{		
		if(user.password.length < 7){
			return 'Password must be 8 characters long'
		}
		if((user.password!=="" && user.repassword!=="")){
			if(user.password === user.repassword){								
				console.log("Password Matched..")
				return '';		
				
			}else{
				return 'Password did not match';
			}			
		}else{			
				return '';
		}		
	}

	const formValid = (errors)=>{
		let isValid = true;
		Object.values(errors).forEach(val =>{
			val.length > 0 && (isValid = false);
		})
		
		return isValid;
	}

	const handleSubmit = (e)=>{
		e.preventDefault();
		if(formValid(formErrors)){
			console.log(`Submitting... 
				Name: ${user.name}
				Email: ${user.email}
				Mobile: ${user.mobile}
				Password: ${user.password} 
				`);
			const newUser = {
				name:user.name,
				email:user.email,
				mobile:user.mobile,
				password:user.password
			}

			props.signupUser(newUser);
		}
		else{
			console.error("form invalid")
			console.log(formErrors)
		}
	}

	const responseGoogle=(res)=>{
		if(res.error){
			console.log(res.error)
			props.returnErrors({msg:res.error}, 400, "Signup Fail")

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

	return(
			<div>
				{props.authState.isAuthenticated?<Redirect to='/dashboard'/>:''	}			
				<div className="container">	
					<div className="row">
						<div className="col-md-12">
							<div className="SignupDiv">
									
									<div className="smallHead pb-4">Sign Up</div>
									<FormGroup>										
										<Row form className="mt-1">
											<Col md={12}>
											<GoogleLogin
											    clientId="851011634786-sh1mefte3gea2j1e0q0t8mc8mtntafaf.apps.googleusercontent.com"
											    clientSecret="OXtdLi3UiQqHgXL7aHGHuaq_"
											    className="GoogleBtn"
											    buttonText="Signup With Google"
											    onSuccess={responseGoogle}
											    onFailure={responseGoogle}
											    cookiePolicy={'single_host_origin'}
											  />												
											</Col>												
										</Row>
									</FormGroup>

									<Row form className="mt-3">
										<Col md={12}>
											<hr className="line"></hr><Label className="space">or</Label><hr className="line"></hr>
										</Col>
									</Row>	
								
								<Form onSubmit={handleSubmit}>
									{props.errorState.msg?<Alert color="danger">{props.errorState.msg.msg}</Alert>:""}
									{props.authState.isAuthenticated?<Alert color="success">Signup Success</Alert>:""}
									<Input type="text" className="FormInput" onChange={handleChange} name ="name" placeholder="Full name" autoComplete="name" required/>
									{formErrors.name?<span className="error">{formErrors.name}</span>:''}

									<Input type="email" className="FormInput" onChange={handleChange} name ="email" placeholder="Email" autoComplete="email" required/>

									{formErrors.email?<span className="error">{formErrors.email}</span>:''}
									
									<Input type="text" className="FormInput" name ="mobile" onChange={handleChange} autoComplete="phone" placeholder="Mobile" required/>

									{formErrors.mobile?<span className="error">{formErrors.mobile}</span>:''}

									<Input type="password" className="FormInput" name="password" onChange={handleChange} placeholder="Password" autoComplete="password" required/>

									{formErrors.password.length>0?<span className="error">{formErrors.password}</span>:''}
									
									<Input type="password" className="FormInput" name="repassword" onChange={handleChange} placeholder="Retype Password" autoComplete="password" required/>

									{formErrors.repassword.length>0?<span className="error">{formErrors.repassword}</span>:''}
									
									<Row form className="mt-4">
										<Col md={12}>
											<input type="submit" value="Signup" className="FormBtn" name="Signup" onSubmit={handleSubmit}/>											
										</Col>
									</Row>							
								</Form>
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

export default connect(mapStateToProps, {signupUser,googleAuth, returnErrors})(Signup);