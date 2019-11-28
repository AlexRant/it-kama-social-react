import React from 'react';
import s from './PostItem.module.css';

const PostItem = (props) => {
  return (
  <div className={s.item}>
    <img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spider-man-far-from-home-peter-parker-1562394390.jpg?crop=0.455xw:0.862xh;0.282xw,0.0296xh&resize=480:*' alt='ava' />
      { props.postMessage }
    <div>
      <span>likes: {props.likeCount}</span>
    </div>

  </div>
  )
}

export default PostItem;