import  React, { Component } from 'react';

const CommentSection =(comments) =>{
    return(
        <div>
            {
                comments.map((comment,index)=>{
                return(<li key={index}>{comment.id}</li>)
                })
            }
        </div>
    );
}
export default CommentSection;