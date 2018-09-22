import React, { Component } from 'react';
import { Button, Form, Label, Input, FormText } from 'reactstrap';
class Admin extends Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false
        }
    };
    componentDidUpdate(){
        Options(this.props.students)
    }
    render(){
        return (
            <div>
                Admin Form Pending
                <Form>
                    <Input type="select">
                        {Options(this.props.students)}
                    </Input>

                </Form>
            </div>
            );
    }
}
const Options = (students)=> {
    if(!students){
        return
    }
    console.log(students)
    return students.map((student) => {
        console.log(student)
        return <option>test</option>} )
};
export default Admin;


