import React from 'react';
import SinglePlayer from './SinglePlayer'

const BattlefieldGrid = React.createClass({
    render() {
        return (
            <div>
                {this.props.userArray.map((object, index)=> <SinglePlayer key ={index} index={index} object ={object}/>)}
            </div>
        )
    }
});

export default BattlefieldGrid;
