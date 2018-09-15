import React, { Component } from 'react';
import Profile from './profile'

export default class Profiles extends Component {
    constructor(props) {
        super(props);
    };
    componentDidUpdate(){
        studentProfiles(this.props.data);
    };
    render(){
        return (
            <div className="profiles-container">
                <ul className="profile-list">
                    {studentProfiles(this.props.data)}
                </ul>
            </div>
        );
    }
}

const studentProfiles = (data)=> {
    if (!data.students){
        return
    }
    return data.students.map((student, i) =>{
        return (
            <li key={i}><Profile className="profile" first={student.first} last={student.last} imgSrc={student.favAnimal}/></li>)
    })
}
