import React from 'react';
import NavbarInstance from '../components/navbarInstance';
import globalStyles	 from '../assets/styles/global.css';


const Main = React.createClass({
    render() {
        return (
            <div>
            	
            		{this.props.children}
                
            </div>
        )
    }
});

export default Main;