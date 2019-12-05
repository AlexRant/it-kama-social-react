import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileHeader from './ProfileHeader/ProfileHeader';

const Profile = (props) => {
  return <div className={s.content}>
              <ProfileHeader />

              <MyPosts posts={props.posts}
                       addPost={props.addPost}
                       newPostText={props.newPostText}
                       postTextUpdate={props.postTextUpdate}
             />

          </div>
}

export default Profile;