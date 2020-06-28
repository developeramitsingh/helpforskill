import {LOAD_EXAM, EXAM_LOADING} from "../actionTypes/actionTypes"
import {returnErrors, clearErrors} from './errorActions';
import axios from 'axios';

export const loadExam = (exam_id, exam_set)=> (dispatch)=>{
	const config ={
		headers:{
			'Content-type':"application/json",
			'Access-Control-Allow-Origin':true
		}
	}

	axios.get("http://localhost:5000/testseries/get/gettestset/"+ exam_id+"/"+exam_set, config)
		.then((res)=>{
			dispatch({type: LOAD_EXAM, payload: res.data})
			console.log(res.data)
		}).catch((err)=>{
			dispatch(returnErrors(err, err.status, err.id))
		})
	
}

export const loadingExam = ()=>(dispatch)=>{
	dispatch({type:EXAM_LOADING})
}