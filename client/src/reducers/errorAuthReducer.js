import { GET_ERRORS, CLEAR_ERRORS } from '../actionTypes/actionTypes';

const initState ={
	msg:null,
	status : null,
	id:null
}

const ErrorAuthReducer = (state = initState, action) =>{
	switch(action.type){
		case GET_ERRORS:
			return {
				...state,
				msg:action.payload.msg,
				status:action.payload.status,
				id:action.payload.id
			};

		case CLEAR_ERRORS:
			return {
				msg:null,
				status:null,
				id:null
			};

		default:
			return state;	
	}
}

export default ErrorAuthReducer;