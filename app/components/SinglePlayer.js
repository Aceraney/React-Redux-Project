import React from 'react';

var style ={
	color:'white'

}



function SinglePlayer (props) {
	

		return(
			<div className="col-md-4 text-center singleplayer">
			<p className="playertitle" style={style}>{props.object.data.uName}
			</p>
			<p style={style}>Rank: {props.object.data.rank}
				</p>
				<p style={style}>Skill {props.object.data.skill}
				</p>
				<p style={style}>Skill: {props.object.data.skill}
				</p>
				<p style={style}>SPM: {props.object.data.extra.spm}
				</p>
				<p style={style}>KDR: {props.object.data.extra.kdr}
				</p>
				
				</div>


		)

	
}

export default SinglePlayer;