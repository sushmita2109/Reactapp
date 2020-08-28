import React, { Component } from 'react';
import {  Collapse, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';

class  CommentForms extends Component{
    constructor (props){
      super(props);
      this.state={
        show:false
      };
      
    }
     

    handleShow = () => {
      console.log("I'm hit")
      this.setState({show:true});
    }
    
    render(){
      console.log(this.state.show)
      return (<>
        <Button onClick={this.handleShow}>feedback</Button>
        
         <Modal show={this.state.show} >
           <ModalHeader>
             hiii
           </ModalHeader>
         </Modal>
       
       </>)
    }
}
export default CommentForms;
