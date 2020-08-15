import  React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";
import CommentSection from './Comments';

const DishDetail = ({ selectedDish }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-5 m-1">
                { selectedDish &&
                    <Card>
                        <CardImg width="100%" src={selectedDish.image} alt={selectedDish.name} />
                        <CardBody>
                            <CardTitle>{selectedDish.name}</CardTitle>
                            <CardText>{selectedDish.description}</CardText>
                        </CardBody>    
                    </Card>  
                }  
                </div>
            </div>
            
        </div>
    )
};

export default DishDetail;