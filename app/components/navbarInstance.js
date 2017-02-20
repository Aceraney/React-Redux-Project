import React from 'react';
import {NavDropdown, Nav, NavItem, MenuItem, Navbar} from 'react-bootstrap';
import {Link} from "react-router";

//this element renders the navbar on both pages. The main homepage and /battlefield. 
//Uses "whichElement" to decide what the navbar should look like. 
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

//img url is passed as a prop from main depending what the route is. This prop is then
//used to determine which version of the right side of the navbar should be rendered.

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
        				
                <Link to="/battlefield">
                	<img className = "navimg" src={props.imgURL}/>
                </Link>
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