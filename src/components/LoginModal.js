import React, { Component } from "react";
import { Modal } from "react-bootstrap";

import LoginForm from "./LoginForm";

export class LoginModal extends Component {
  render() {
    return (
      <Modal
        show={this.props.show}
        size="lg"
        onHide={this.props.onHide}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <LoginForm
            functionToCallAfterFormSubmitToCloseModal={this.props.onHide}
          />
        </Modal.Body>
      </Modal>
    );
  }
}

export default LoginModal;
