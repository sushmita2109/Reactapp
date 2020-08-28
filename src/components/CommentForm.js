import React, { Component } from 'react';
import { Button, Modal, ModalHeader } from 'reactstrap';

class CommentForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }


  handleShow = () => {
    this.setState({ show: true });
  }

  render() {
    return (
    <>
      <Button onClick={this.handleShow}>Feedback</Button>

      <Modal isOpen={this.state.show} >
        <ModalHeader>
          hiii
           </ModalHeader>
      </Modal>

    </>)
  }
}
export default CommentForms;
