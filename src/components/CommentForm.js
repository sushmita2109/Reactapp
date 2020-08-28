import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Label, Row, Col} from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';

const required=(val)=>val&&val.length;
const maxLength=(len)=>(val) => !(val) ||(val.length<=len);
const minLength=(len)=>(val) => (val) && (val.length>=len);

class CommentForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.toggleModal=this.toggleModal.bind(this);
  }


  toggleModal(){
    this.setState({
      show:!this.state.show
    });
  }

  render() {
    return (
    <>
      <Button onClick={this.toggleModal}>Feedback</Button>

      <Modal isOpen={this.state.show} toggle={this.toggleModal} >
        <ModalHeader toggle={this.toggleModal}>
          Feedback Form
           </ModalHeader>
           <ModalBody>
            <LocalForm>
              <Row classname="form-group">
                <Label htmlFor="author" md={2}>Author Name</Label>
                <Col md={10}>
                  <Control.text model=".author" name="author" placeholder="author" className="form-control" validators={{required, minLength: minLength(3), maxLength: maxLength(15)}} />
                  <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                        />   
                </Col>
              </Row>
              <Row classname="form-group">
                <Label htmlFor="rating" md={2}>Comment</Label>
                <Col md={10}>
                  <Control.select  model=".rating" name="rating" placeholder="rating" className="form-control"> 
                  <option value="Excellent">Excellent</option>
                  <option value="Good">Good</option>
                  <option value="Nice">Nice</option>
                  <option value="poor">Poor</option>
                  </Control.select>
                </Col>
              </Row>
              <br></br>
              <Row classname="form-group">
                <Label htmlFor="comment" md={2}>Comment</Label>
                <Col md={10}>
                  <Control.textarea  model=".comment" name="comment" placeholder="comment" rows="12" className="form-control"/>
                </Col>
              </Row>
              <Row className="form-group">
                 <Col md={{size : 10,offset: 2}} >
                      <Button type="submit" color="primary" >
                           Send Feedback
                      </Button>
                  </Col>
             </Row>
            </LocalForm>
           </ModalBody>
      </Modal>

    </>)
  }
}
export default CommentForms;
