import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
  <div className={s.item}>
    <img src='https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-us.s3.amazonaws.com%2F83afb31c-38fc-11e9-9988-28303f70fcff?fit=scale-down&source=next&width=700' />
      { props.postMessage }
    <div>
      <span>likes: {props.likeCount}</span>
    </div>

  </div>
  )
}

export default Post;