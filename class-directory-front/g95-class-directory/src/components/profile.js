import React, { Component } from 'react';

export default class Profile extends Component {

    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div className="card profile-card">
                <img className="card-img-top" src={this.props.imgSrc} />
                <h5 className="pt-3 my-auto card-title">{this.props.first}</h5>
                <p>{this.props.last}</p>
            </div>
            );
    }

}
