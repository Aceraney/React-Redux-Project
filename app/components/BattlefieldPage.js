import React from 'react';
import NavbarInstance from '../components/navbarInstance';

import {getBFStats} from '../utils/battlefieldHelper';
import BattlefieldGrid from '../components/BattlefieldGrid'
import SinglePlayer from './SinglePlayer'






const BattlefieldPage = React.createClass({

    getInitialState: function () {
    return {
      username: ''
    }
  },

        handleUpdateUser: function(e){
        this.setState({
            username: e.target.value
            
        })

    },

     handleSubmitUser:function(e){
        e.preventDefault()
        var username = this.state.username;
        console.log("username",username)
        this.refs.form.value='';
        this.setState({
            username:''
        });


        this.props.searchUser(username, "pc")

        
},
    

    

	render() {
        return (
        	<div>
        		<NavbarInstance imgURL={'../assets/battlefield.png'}/>

		        <form className="form-group" onSubmit ={this.handleSubmitUser}>
                    <div >
                        <input ref ="form" className="form-control text-center"
                               placeholder="Battlefield 4 Username"
                               onChange={this.handleUpdateUser}
                               type="text"/>
                    </div>
                    <div style ={{padding:0}}className="col-md-12 text-center but-mar"> 
                        <button
                            className="btn btn-lg btn-success"
                            type="submit">
                            Add A User


                        </button>
                    </div>
                </form>
                <BattlefieldGrid userArray = {this.props.users} />
        		
        		
                
                
        	
        	</div>
            		
        	)
    }
});




export default BattlefieldPage;