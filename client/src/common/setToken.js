import axios from 'axios';

export setToken = (token)=>{
	 axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
} 