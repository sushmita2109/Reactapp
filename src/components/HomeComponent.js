import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

function RennderCard({item}){
return(
    <Card>
        <CardImg src={item.image} alt={item.name}/>
        <CardBody>
            <CardTitle>{item.name}</CardTitle>
                {item.designation?<CardSubtitle>{item.designation}</CardSubtitle>:null}
        </CardBody>
    </Card>
)
}

function Home(props){
    return(
        <div className="container">
            <div className="row align-items-start">
              <div className="col-12 col-md m-1">
                  <RennderCard item={props.dish}/>
              </div>
              <div className="col-12 col-md m-1">
                  <RennderCard item={props.promotion}/>
              </div>
              <div className="col-12 col-md m-1">
                  <RennderCard item={props.leader}/>
              </div>
            </div>
        </div>
    );
}

export default Home;