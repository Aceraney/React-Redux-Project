import React from 'react';
import {Link} from 'react-router'


function resume () {
		return(

			<div className= 'about-header-div'>
				<h2 className = "about-header">
			Resume
			</h2>
			<p> Download my resume in PDF form: </p><Link to="https://drive.google.com/open?id=0B2BKOwsKVC2sTXhHcmtudlJjU3c">Resume</Link>
			
			</div>
	)
	}

	export default resume;