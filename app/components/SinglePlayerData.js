import React from 'react';


var style ={
	color:'white'

}





function SinglePlayerData (props) {

console.log("props", props);

//remove decimals from SPM (Score per minute)
var spm = props.userArray.extra.spm;
	
	spm=spm.toString();
	spm = spm.substring(0, spm.indexOf('.'));
	//remove non significant decimals from the KDR item(Kill death Ratio)
	var kdr = props.userArray.extra.kdr;
	kdr=kdr.toString();
	kdr = kdr.substring(0, kdr.indexOf('.')+3);

	//remove non significant decimals from the WLR item(Win loss ratio)

	var wlr = props.userArray.extra.wlr;
	wlr=wlr.toString();
	wlr = wlr.substring(0, wlr.indexOf('.')+3);

	//remove non significant decimals from the KPM item(Kills per minute)
	var kpm = props.userArray.extra.kpm;
	kpm=kpm.toString();
	kpm = kpm.substring(0, kpm.indexOf('.')+3);

	//visual component that displays the actual data for each user.
	return(

		<div>
			<p className="playertitle" style={style}>{props.userArray.uName}
			</p>
			<p style={style}>Rank: {props.userArray.rank}
				</p>
				<p style={style}>Skill {props.userArray.skill}
				</p>
				<p style={style}>Win/Loss: {wlr}
				</p>
				<p style={style}>SPM: {spm}
				</p>
				<p style={style}>KPM {kpm}
				</p>
				<p style={style}>KDR: {kdr}
				</p>
</div>
				)
}

export default SinglePlayerData;