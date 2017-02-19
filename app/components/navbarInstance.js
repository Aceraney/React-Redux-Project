import React from 'react';
import {NavDropdown, Nav, NavItem, MenuItem, Navbar} from 'react-bootstrap';
import Link from "react-router";

var whichElement;
var headStyle ={
  color:'white',
  fontSize:150
}

function RightSide(){
  if(whichElement==="DRA"){
  return(
    <Nav pullRight>
      <NavItem>
        <p>214 / 987 / 1902</p>
      </NavItem>
      <NavItem>
        <p>contact@droeseraney.com</p>
      </NavItem>
      <NavItem>
          
          2120 Sylvan Ave
          <span>
          <br/>
          </span>
           Dallas TX 75208        
      </NavItem>
    </Nav>
  )
}
  else if(whichElement==='bf'){
    return(
      <div className="text-center" style={headStyle}>
        <h1>Compare yourself with your friends!</h1>
        </div>

      )
  }
};



function NavbarInstance (props){

  if(props.imgURL==='../assets/dra.png'){
    whichElement="DRA";
  }
  else{
    whichElement="bf";
  }
    	return (
    		<Navbar inverse collapseOnSelect fluid>
    			<Navbar.Header>
      				<Navbar.Brand>
        				<img src={props.imgURL}/>
     				</Navbar.Brand>
     			<Navbar.Toggle />
    			</Navbar.Header>
    		<Navbar.Collapse>
      
      
       
       <RightSide/>
      
    </Navbar.Collapse>
  </Navbar>
    	)
  	}


export default NavbarInstance;