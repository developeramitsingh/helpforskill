const initState = {
	user:"Guest",
	testPurchased:[],
}

const AddLoggedInReducer = (state = initState, action)=>{
	switch(action.type){
		case "loggedInUser":
			return{
				...state,
				user:action.payload
			}
		default:
			return {
				...state	
			}	
	}	
}

export default AddLoggedInReducer;