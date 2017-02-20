import React from 'react';
import SinglePlayerData from '../components/SinglePlayerData';

var style ={
	color:'white'

}



const  SinglePlayer = React.createClass({
	//the functionality of the remove user button. Calls the reducer for removerUser
	

	handleSubmit(e){
        e.preventDefault();
        

        this.props.removeUser(this.props.index)
    },


//The functional components that are rendered for each user in the store. Passes the user itself as props
//the button is used to remove users from that array which is then updated in the grid. When the object
//is no longer present in the grid, it is not rendered.
	
	
    render(){
		return(
			<div  className="col-md-4 text-center singleplayer">
				<SinglePlayerData userArray={this.props.object.data}/>
				<div>
				<button type='button' onClick={this.handleSubmit} className= "btn btn-sm btn-danger">
				Remove User
				</button>
				</div>
				
				</div>


		)
	}
	
});

export default SinglePlayer;