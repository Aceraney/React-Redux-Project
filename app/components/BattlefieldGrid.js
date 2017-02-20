import React from 'react';
import SinglePlayer from './SinglePlayer'

//maps the userArray from the store to the Single Player instance for each array element.

const BattlefieldGrid = React.createClass({
    render() {
        return (
            <div>
                {this.props.userArray.map((object, index)=> <SinglePlayer key ={index} index={index} object ={object} removeUser={this.props.removeUser}/>)}
            </div>
        )
    }
});

export default BattlefieldGrid;
