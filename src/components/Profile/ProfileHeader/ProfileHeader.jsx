import React from 'react';
import s from './ProfileHeader.module.css';

const ProfileHeader = () => {
  return <div className={s.content}>
              <img src="https://cdn.pixabay.com/photo/2018/05/28/22/11/message-in-a-bottle-3437294__340.jpg" alt="letter in the bottle" />

              <div className={s.avaDescription}>
                ava + description
              </div>

          </div>
}

export default ProfileHeader;