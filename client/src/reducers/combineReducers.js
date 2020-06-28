import {combineReducers} from 'redux';
import ExamListReducer from './examListReducer';
import AddLoggedInReducer from './addLoggedInReducer';
import AuthReducer from './authReducer';
import ErrorAuthReducer from './errorAuthReducer';
import TestLoadReducer from './testLoadReducer';

export default combineReducers({
	ExamListReducer:ExamListReducer,
	AddLoggedInReducer:AddLoggedInReducer,
	AuthReducer:AuthReducer,
	ErrorAuthReducer:ErrorAuthReducer,
	TestLoadReducer:TestLoadReducer
})