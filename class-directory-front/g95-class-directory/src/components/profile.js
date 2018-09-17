import React, { Component } from 'react';

export default class Profile extends Component {

    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div className="card profile-card">
                <img className="card-img-top" src={this.props.imgSrc} />
                <section className="card-body rounded-bottom py-2 my-auto ">
                    <h5 className="card-title">{this.props.first}</h5>
                    <p>{this.props.last}</p>
                </section>
            </div>
            );
    }

}
