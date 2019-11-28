import React from 'react';
import s from './MyPosts.module.css';
import PostItem from './Post/PostItem';

const MyPosts = (props) => {
  
  // let posts = [
  //   {id: 1, message: "It's my first post :)", likesCount: 105},
  //   {id: 2, message: "Hello, where I am?", likesCount: 20},
  //   {id: 3, message: "Some dummy text to fill the post", likesCount: 5},
  //   {id: 4, message: "Checking the process!", likesCount: 28},
  // ]
  let postElements = props.posts.map( element => <PostItem postMessage={element.message} likeCount={element.likesCount} /> )
  return (
  <div className={s.content}>
    <textarea></textarea>
    <br/>
    <button>Add</button>

    {postElements}
    
    {/* <PostItem postMessage={posts[0].message} likeCount={posts[0].likesCount} />
    <PostItem postMessage={posts[1].message} likeCount={posts[1].likesCount} />
    <PostItem postMessage={posts[2].message} likeCount={posts[2].likesCount} /> */}
    
    
  </div>
  )
}

export default MyPosts;