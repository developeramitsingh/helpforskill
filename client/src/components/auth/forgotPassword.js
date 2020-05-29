import React, {useState, useEffect} from 'react'
import './forgotPassword.css'
import axios from 'axios'
import {returnErrors, clearErrors} from '../../actions/errorActions'

const ForgotPassword = (props)=>{
	const [inputOTP, updateInputOTP] = useState(null);
	const [sentOTP, updateOTP] = useState({otp:null, msg:''});
	const [user, updateUser] = useState({email:'', mobile:'', isOTPValidated:null, password:'', isPassValid:false, isSubmit:null});
	const [haserror, updateError] = useState(null);
	
	const fetchMobile =()=>{
		const config = {
			headers:{
				"Content-type":"application/json",
				'Access-Control-Allow-Origin': '*'
			}
		}

		let email = user.email;		
		axios.get('http://localhost:5000/auth/get/getMobile/'+email, config)
			.then(res=>{
				console.log(res.data);
				let mobile = res.data.mobile;
				if(mobile!==''){
					updateUser({...user, mobile:mobile})
					sendOTP(mobile)
				}else{
					updateError(res.data.msg)
				}
			}).catch(err=>{
				console.log(err);
				updateError(err.msg)
			})			
	}

	const callOTPApi = (otp, number)=>{
		
		let data="authorization=WpyixZMguJ7eSYhBVlPQo4f9UIv5j3tcEL8kO2aGmFXb1wdTA6TfcKMzHuGkELIqPtwV4jQ7SbiO2dxr&sender_id=FSTSMS&language=english&route=qt&message=27049&variables={AA}&variables_values="
		let mobile = "&numbers="+number;

		axios.get("https://www.fast2sms.com/dev/bulk?"+data+otp+mobile)
			.then(res=>{
				console.log(res);
				updateOTP({otp, msg:"OTP Sent"});
			}).catch(err=>{
				console.log("error is coming")
				console.log(err);
			})
	}

	const callPasswordApi = (data)=>{
		const config = {
			headers:{
				'Content-type': 'application/json',
				'Access-Control-Allow-Origin':'*'
			}
		}
		
		let body =JSON.stringify({
			email:data.email,
			password:data.password
		});

		console.log(body)
		axios.post('http://localhost:5000/auth/post/forgotPassword/', body,config)
			.then(res=>{
					console.log(res)
			}).catch(err=>{
				console.log(err)
				//returnErrors()
			})
	}

	const generateOTP = ()=>{
		let otp = '';
		let str= "1234567890";
		for(let i=0;i<4;i++){
			otp+= str[Math.floor(Math.random()*10)]
		}		
		return otp;
	}

	const sendOTP=(mobile)=>{
		let otp = generateOTP();
		callOTPApi(otp, mobile)		
		console.log(otp, mobile);
		
	}

	const submitOTP = (e)=>{
		e.preventDefault();
		console.log(inputOTP , "input--")
		console.log(sentOTP, "Sent --")
		if (inputOTP==null){
			updateError("Please enter OTP");
		}
		else if(inputOTP === sentOTP.otp){
			console.log("matched");
			updateUser({...user, isOTPValidated:true})
			updateError(null);
		}
		else{
			console.log("not Matched");
			updateError("Enter correct OTP");
		}
	}	

	const handleForgot =(e)=>{
		e.preventDefault();
		if(user.email!==''){
			updateError(null)
			fetchMobile()	
		}else{
			updateError("Please enter email id")	
		}		
	}

	const submitPassword = (e)=>{
		e.preventDefault();
		if(haserror || user.isPassValid === false){
			updateError("Please enter valid Password")
		}else{
			updateUser({...user, isSubmit:true})
			updateError(null)
			console.log("Submitting... " , user.password, user.email);
			callPasswordApi({password:user.password, email:user.email})
		}
		
	}

	const handleChange =(e)=>{
		let val = e.target.value;		
		updateUser({...user, email:val});
		updateError(null)
	}

	const checkRetypePass = (val)=>{
		console.log(val)
		console.log(user.password)
		let error = val;
		error = val!== user.password?"Password is not Matching":''
		return error;
	}

	const checkLength= (val)=>{
		if(val.length>=8){
			return '';
		}else{
			return 'Password must be 8 characters long';
		}
	}

	const handlePassword = (e)=>{
		let name = e.target.name;
		let val  = e.target.value;
		let error = '';
		switch(name){
			case "password":
				error = val.length>0?checkLength(val):''
				updateError(error)
				updateUser({...user, password:val})
				break;
			case "repassword":
				error = val.length>0?checkRetypePass(val):''
				updateError(error)
				error?updateUser({...user, isPassValid:false}):updateUser({...user, isPassValid:true})
				break;
			default:
				break;		
		}
	}

	const resetState = ()=>{
		props.toggleClass();
		updateInputOTP(null);
		updateOTP({otp:null, msg:''});
		updateUser({email:'', mobile:'', isOTPValidated:null, isPassValid:false, password:'', isSubmit:null});
		updateError('')
	}


	useEffect(()=>{
		console.log(user);		
		console.log(inputOTP)
	},[user.email, user.mobile, user.isOTPValidated, inputOTP, user.password, user.repassword, user.isPassValid])

	return(
			<div>
				<div className="ForgotDiv" style={{display:'block'}}>									
					{!user.mobile?<form>						
						<div className="smallHead p-3">Reset Your Password</div>
						<input type="email" className="FormInput" onChange={handleChange} placeholder="Enter your email" autoComplete="email" required/>
						
						<input type="submit" className="FormBtn mt-4" onClick={handleForgot} value="Submit"/>
					</form>:''}

					{user.mobile && !user.isOTPValidated?<form>
						<div className="smallHead p-3">Enter OTP</div>
						{sentOTP.msg?<span className="success">OTP Sent to {user.mobile}</span>:''}
						<input type="text" className="FormInput" onChange={(e)=>updateInputOTP(e.target.value)} placeholder="Enter OTP" autoComplete="off" required/>
						
						<input type="submit" className="FormBtn mt-4" onClick={submitOTP} value="Submit"/>
					</form>:''}

					{user.isOTPValidated && !user.isSubmit?<form>
						<div className="smallHead p-3">Enter a New Password</div>
						
						<input type="password" className="FormInput" name="password" onChange={handlePassword} placeholder="Password" autoComplete="off" required/>
						
						<input type="password" className="FormInput" name="repassword" onChange={handlePassword} placeholder="Retype Password" autoComplete="off" required/>

						<input type="submit" className="FormBtn mt-4" onClick={submitPassword} value="Submit"/>

					</form>:''}

					{user.isSubmit?<div className="smallHead p-3">Password Changed</div>:''}

					<br/>
					{haserror?<span className="error">{haserror}</span>:''}
					<br/>					
					<label className="LabelLink mt-5" onClick={resetState}>Back to Login</label>
				</div>

			</div>

		)
}

export default ForgotPassword;
