import React from 'react';
import {Spinner} from 'reactstrap';

const Loading = ()=>{
	return (
			<div>
				<Spinner style={{ width: '3rem', height: '3rem', color:"#F2C508"}}/>				
			</div>
		)
}


export default Loading