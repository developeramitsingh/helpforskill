import {createStore, applyMiddleware, compose} from 'redux';
import combineReducers from'./reducers/combineReducers';
import thunk from 'redux-thunk';

const middleware = [thunk];


const initstate = {
	
}

const store = createStore(combineReducers, initstate, compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	))


export default store;