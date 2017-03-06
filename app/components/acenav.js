import React from 'react';
import {Link} from 'react-router';
import {NavDropdown, Nav, NavItem, MenuItem, Navbar} from 'react-bootstrap';



const AceNav = React.createClass({
	  componentWillMount: function(){
   
    document.title="Ace Raney"
    document.body.style.background='#fcfbe3';    

},
componentWillUnmount: function(){

},

	render() {
        return (

        	<div>
        	<Navbar inverse collapseOnSelect className='acenav'>
        	
    <Navbar.Header>
      <Navbar.Brand className='acebrand'>
      <Link to="/">
        Ace Raney
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem><Link to='/about'>About</Link></NavItem>
        <NavDropdown eventKey={3} title="Projects" id="basic-nav-dropdown">
          <Link to='/dra'>
          	<MenuItem className="menu-item">
          	<Link to='/dra' className="menu-item">DroeseRaney Architecture</Link>
          	</MenuItem>
          </Link>
          <MenuItem divider />
           <Link to='/battlefield'>
           <MenuItem>
           <Link to='/battlefield' className="menu-item">Battlefield 4 Statistics</Link>
           </MenuItem>
           </Link>
          
        </NavDropdown>
        
        
      </Nav>
      <Nav pullRight>
        <NavItem><Link to ="/resume"> Resume</Link></NavItem>
        <NavItem><Link to ="/contact"> Contact</Link></NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  {this.props.children}
  </div>
        			)
    }
});

export default AceNav;