import  React, { Component } from 'react';
import { Card, CardText } from 'reactstrap';

const CommentItem = ({item}) => {
  return (
    <div>
      <CardText >{`${item.author} ${item.rating} ${item.comment} ${new Date(item.date)}`}</CardText>
      <p></p>
    </div>
  )
}
const CommentSection = ({comments}) => {
  return(
    <div className="col-12 col-sm-5 m-1">
      <Card>
        {
          comments.map((item) => <CommentItem item={item}/>)    
        }
      </Card>
    </div>
    )
}
export default CommentSection;