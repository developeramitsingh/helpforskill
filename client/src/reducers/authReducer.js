import { USER_LOADING, USER_LOADED, LOGIN_SUCCESS, SIGNUP_SUCCESS, AUTH_ERROR, LOGIN_FAIL, LOGOUT_SUCCESS, SIGNUP_FAIL} from '../actionTypes/actionTypes';

const initState = {
	token:localStorage.getItem('token'),
	isAuthenticated:null,
	isLoading:null,	
	user:null,
}

const AuthReducer = (state = initState, action)=>{
	switch(action.type){
		case USER_LOADING:
			return {
				...state,
				isLoading:true
			};

		case USER_LOADED:
			return{
				...state,
				isAuthenticated:true,
				isLoading:false,
				user:action.payload
			};
		
		case LOGIN_SUCCESS:
		case SIGNUP_SUCCESS:
			localStorage.setItem('token',action.payload.token)
			console.log(action.payload)			
			return{
				...state,
				token:action.payload.token,
				user:action.payload.user,	
				isAuthenticated:true,
				isLoading:false
			};

		case AUTH_ERROR:
		case LOGIN_FAIL:
		case LOGOUT_SUCCESS:
		case SIGNUP_FAIL:
			localStorage.removeItem("token");
			return{
				...state,
				token:null,
				user:null,
				isAuthenticated:false,
				isLoading:false
			};

		default:
			return state;				
	}
}

export default AuthReducer;