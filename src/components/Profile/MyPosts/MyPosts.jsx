import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
  <div className={s.content}>
    <textarea></textarea>
    <button>Add</button>
    
    <Post postMessage="It's my first post :)" likeCount="105"/>
    <Post postMessage="Hello, where I am?" likeCount="5"/>
    <Post postMessage="Some dummy text to fill the post" likeCount="20" />
    
  </div>
  )
}

export default MyPosts;