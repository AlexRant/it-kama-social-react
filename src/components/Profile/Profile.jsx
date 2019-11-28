import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileHeader from './ProfileHeader/ProfileHeader';

const Profile = (props) => {
  return <div className={s.content}>
              <ProfileHeader />

              <MyPosts posts={props.posts} />

          </div>
}

export default Profile;