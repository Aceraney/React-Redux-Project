import React from 'react';

var style ={
	color:'white'

}



function SinglePlayer (props) {
	//remove non significant decimals from the SPM item
	var spm = props.object.data.extra.spm;
	
	spm=spm.toString();
	spm = spm.substring(0, spm.indexOf('.'));
	//remove non significant decimals from the KDR item
	var kdr = props.object.data.extra.kdr;
	
	kdr=kdr.toString();
	kdr = kdr.substring(0, kdr.indexOf('.')+3);
	
	

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
				<p style={style}>SPM: {spm}
				</p>
				<p style={style}>KDR: {kdr}
				</p>
				
				</div>


		)

	
}

export default SinglePlayer;