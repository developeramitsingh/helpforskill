import React from 'react'
import '../../bootstrap.min.css';
import {NavLink} from 'react-router-dom';
import '../../materialize.min.css'
import './footer.css'
import logo from '../../logo.png'
import { SocialIcon } from 'react-social-icons';

const Footer = ()=>{
	return (
		<div>
			<div className="Footer">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="row footerArea1">
								<img className="Logo" src={logo} alt="Logo"/>
								<h3>Help for Skills</h3>
							</div>
							<p> Help for Skills's team always made working together easy; from new needs popping up, to last minute changes, the overall approach was hard-working but always positive. Even post-launch, the team Help for Skill has continued to be helpful and interactive, making it easy to solve any issues quickly and resolutely.</p>
						</div>
						<div className="col-md-3">
							<ul className="footerArea2">
								<li><NavLink to='/' className="Links">Home</NavLink></li>
									<li><NavLink to='/aboutus' className="Links">About Us</NavLink></li>
									<li><NavLink to='/testseries' className="Links">Test Series</NavLink></li>
									<li><NavLink to='/login' className="Links">Contact Us</NavLink></li>
							</ul>					
						</div>
						<div className="col-md-3">
							<div className="row">
								<div className="col-md-12">
									Email: helpforskill@gmail.com
								</div>
							</div>
							<div className="row">	
								<div className="col-md-12">
									Phone: +91-9968470534
								</div>
							</div>	

							<div className="row">
								<div className="col-md-4 padding">
									<SocialIcon url="https://www.facebook.com" network="facebook" bgColor="#F4F7FE" style={{ height: 40, width: 40 }}/>
								</div>
								<div className="col-md-4 padding">
								<SocialIcon network="twitter" url="https://www.twitter.com" bgColor="#F4F7FE" style={{ height: 40, width: 40 }}/>
								</div>
								<div className="col-md-4 padding">
								<SocialIcon network="youtube" url="https://www.youtube.com" bgColor="#F4F7FE" style={{ height: 40, width: 40 }}/>
								</div>
							</div>

							
						</div>
					</div>
				</div>				 
			</div>
			<div className="footer-copyright">
		            <div className="container">
		            © 2020 Help for Skill
		            
		            </div>
		    </div>
		</div>		
		)
}

export default Footer;