
const initstate ={
	homeTestSeries:{
		ExamList:[]		
	},
	loading:false

}
const ExamListReducer = (state = initstate, action)=>{
	
	if(action.type==="updateExamListFromServer"){
		return{
			...state,
			homeTestSeries:{
				ExamList: action.payload				
			},
			loading:false
		}
	}
	if(action.type ==="loadingData"){
		return{
			...state,
			loading:true	
		}
	}

	return state;
	
}

export default ExamListReducer;

