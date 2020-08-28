import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForms   from './CommentForm';

    // constructor(props){
    //     super(props);
    // }
     function RenderComments({comments}){
        
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
    function RenderDish({dish}){
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
        const DishDetail =(props)=>{
        if (props.dish != null){
            return (
                <div className="container">
                    <div className="row">
                    <Breadcrumb>
                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                    </div>
                    </div>
                <div className="row">
                    <RenderDish dish={props.dish}/>
                    <RenderComments comments={props.comments}/>
                    
                </div>
                <div className="col-12">
                    <CommentForms/>
                </div>
                </div>
            );
        }
        else{
            return(
                
                <div className="row"></div>
            );
        }
        
    }


export default DishDetail;