import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, Input } from 'reactstrap';

class LoginModal extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            pass: "squirrel",
            passVal: ""
        }
        this.validatePass = this.validatePass.bind(this)
        this.updatePass = this.updatePass.bind(this)
    }
    validatePass(e){
        e.preventDefault()
        console.log(this.state.pass, this.state.passVal)
        if (this.state.pass != this.state.passVal){
            return
        } else {
            this.props.loginHandler()
        }
    }
    updatePass(e){
        this.setState({
            passVal : e.target.value
        })
    }
    render(){
        return (
            <React.Fragment>
                <Modal isOpen={this.props.modal} toggle={this.props.clickHandler} >
                    <ModalHeader className="mx-auto">
                        Please Enter the g95 Class Password:
                        <div className="text-center"> {this.state.passVal} </div>
                    </ModalHeader>
                    <ModalBody className="mx-auto">
                        <Form>
                            <Input value={this.state.passVal} onChange={this.updatePass} type="password" />
                        </Form>
                    </ModalBody>
                    <ModalFooter className="mx-auto">
                        <Button color="success" onClick={this.validatePass} >log in</Button>
                        <Button color="primary" onClick={this.props.clickHandler} >cancel</Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
            )

    }
}
export default LoginModal;
