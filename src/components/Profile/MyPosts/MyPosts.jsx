import React from 'react';
import s from './MyPosts.module.css';
import PostItem from './Post/PostItem';

const MyPosts = (props) => {
  
  let postElements = props.posts.map( element => <PostItem postMessage={element.message} likeCount={element.likesCount} /> )

  let newPostItem = React.createRef();
  
  const showAddedPost = () => {
    let postText = newPostItem.current.value;
    props.addPost(postText);
    props.postTextUpdate('');
    // newPostItem.current.value = '';
  }

  const onTextareachange = () => {
    let letters = newPostItem.current.value;
    props.postTextUpdate(letters);
  }

  return (
  <div className={s.content}>
    <textarea ref={newPostItem} value={props.newPostText} onChange={onTextareachange}  />
    <br/>
    <button onClick={showAddedPost}>Add</button>

    {postElements}
    
  </div>
  )
}

export default MyPosts;