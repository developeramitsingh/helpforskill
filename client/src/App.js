import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Dashboard from './components/dashboard/dashboard';
import Login from './components/auth/login';
import Signup from './components/auth/signup';
import Home from './components/home/home';
import TestWindow from './components/testModule/testWindow';
import Footer from './components/footer/footer';
import {loadUser} from './actions/authActions'
import './materialize.min.css';
import './App.css';



class App extends Component {
	
	componentDidMount(){
		this.props.loadUser();		
	}

	render(){		
		return (
			<BrowserRouter>
		    	<div className="App">
		      		<Navbar/>
		       		<Switch>
		       			<Route exact path='/' component={Home}/>
		       			<Route path='/dashboard' component={Dashboard}/>
		       			<Route path='/testSeries' component={TestWindow}/>
		       			<Route path='/login' component={Login}/>
		       			<Route path='/signup' component={Signup}/>		       					       			
		       		</Switch>
		       		<Footer/>
		    	</div>
	    	</BrowserRouter>
	  	);	
	}	  
}



export default connect(null,{loadUser})(App);
