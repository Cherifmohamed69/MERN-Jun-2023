import React, { Component } from 'react';

class PersonCard extends Component {
    render() {
        return <div>
    <h1> {this.props.first_name}, {this.props.last_name}</h1>
    <br/>age :{this.props.age} <br/> hair color : {this.props.hair_color}
</div>;
    }
}
    
export default PersonCard;
