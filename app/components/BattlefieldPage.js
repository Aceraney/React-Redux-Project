import React from 'react';
import NavbarInstance from '../components/navbarInstance';

import {getBFStats} from '../utils/battlefieldHelper';
import BattlefieldGrid from '../components/BattlefieldGrid'
import SinglePlayer from './SinglePlayer'

//main page for the /battlefield route. Calls the navbar instance and calls the battlefield Grid
//which maps the userArray which contains the user data to a SinglePlayer instance.




const BattlefieldPage = React.createClass({
//set the initial state to ''
    getInitialState: function () {
    return {
      username: ''
    }
  },
    //updates the username field after each character typed
        handleUpdateUser: function(e){
        this.setState({
            username: e.target.value
            
        })

    },
    //called when form is submitted. Saves the state of username to the variable username. Resets the form value
    //to '' as well as the state. Calls the reducer searchUser which calls the API and populates the userArray
    //in store. These components are then rendered by the Battlefield Grid.
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
                <BattlefieldGrid userArray = {this.props.users} removeUser={this.props.removeUser}/>
                
                
                
                
            
            </div>
                    
            )
    }
});




export default BattlefieldPage;