import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return <div className={s.content}>
              <img src="https://cdn.pixabay.com/photo/2018/05/28/22/11/message-in-a-bottle-3437294__340.jpg" alt="letter in the bottle" />

              <div>
                ava + description
              </div>

              <MyPosts />

          </div>
}

export default Profile;