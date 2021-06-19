import React from 'react';
import error_page from './images/page_not_found.svg';
const page_404=() =>{
    return (
		<div>
			<div>
				<img style={{position:'relative'}} src={error_page} width="90%" height="90%" />
                <h3 style={{textAlign:'center',position:'absolute',zIndex:999,left:0,right:0,top:'90%'}}>Please Go Back Page not found</h3>
			</div>
		</div>
	);
}

export default page_404;

