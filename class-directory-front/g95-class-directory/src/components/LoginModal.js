import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const LoginModal = (props)=> {
    return (
        <React.Fragment>
            <Modal isOpen={props.modal} toggle={this.toggle} >
                <ModalHeader className="mx-auto">
                    Please Enter the g95 Class Password:
                </ModalHeader>
                <ModalBody className="mx-auto">
                    <input type="password" />
                </ModalBody>
                <ModalFooter className="mx-auto">
                    <Button color="success" onClick={this.toggle}>log in</Button>
                    <Button color="primary" onClick={this.toggle}>cancel</Button>
                </ModalFooter>
            </Modal>
        </ React.Fragment>
        )
}

export default LoginModal;