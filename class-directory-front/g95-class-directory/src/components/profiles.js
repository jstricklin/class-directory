import React, { Component } from 'react';
import Profile from './profile'

export default class Profiles extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                PROFILES
                <Profile />
            </div>
        );
    }
}
