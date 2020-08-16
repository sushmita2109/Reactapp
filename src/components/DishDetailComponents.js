import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{

    // constructor(props){
    //     super(props);
    // }
    renderComments(comments){
        
        if (comments!=null){
            const comment = comments.map((cmt) => {
                return(    
                    <li key={cmt.id}>
                        {cmt["comment"]}
                        <br/><br/>
                        -- {cmt.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(cmt.date)))}
                        <br/><br/>
                    </li>                    
                );
            })

            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comment}
                    </ul>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }
    renderDish(dish){
        return(
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>        
        );
        
    }
    render(){
        if (this.props.dish != null){
            return (
                <div className="row">
                    {this.renderDish(this.props.dish)}
                    {this.renderComments(this.props.dish["comments"])}
                </div>
            );
        }
        else{
            return(
                <div className="row"></div>
            );
        }
    }
}

export default DishDetail;