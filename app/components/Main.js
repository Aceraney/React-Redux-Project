import React from 'react';
import NavbarInstance from '../components/navbarInstance';


const Main = React.createClass({
    render() {
        return (
            <div>
            	<NavbarInstance imgURL={'../assets/dra.png'}/>
            		{this.props.children}
                
            </div>
        )
    }
});

export default Main;