import React, {useState} from  'react'
import {NavLink} from 'react-router-dom'
import '../../materialize.min.css'
import './nav.css'

const SignoutLinks = ()=>{

	let [visible, showMenu] = useState("none");
	
	const toogleMenu = ()=>{
		
		visible==="block"?showMenu(visible = "none"):showMenu(visible = "block");

	}

	
	return(
			<div>
				<ul className="right" id="signoutMenu" style={{display:visible}}>
					<li><NavLink to='/' className='links' onClick={toogleMenu}>Home</NavLink></li>
					<li><NavLink to='/aboutus' className='links' onClick={toogleMenu}>About Us</NavLink></li>
					<li><NavLink to='/testSeries' className='links' onClick={toogleMenu}>Test Series</NavLink></li>
					<li><NavLink to='/login' className='links' onClick={toogleMenu}>Login</NavLink></li>
					<li><NavLink to='/signup' className='links' onClick={toogleMenu}>Signup</NavLink></li>
									
				</ul>
				
				<div className="MobileIcon" onClick={toogleMenu}>
			    	 <i className="material-icons" style={{fontSize:'40px'}}>menu</i>
			  	</div>
			</div>
		)
		
}

export default SignoutLinks;