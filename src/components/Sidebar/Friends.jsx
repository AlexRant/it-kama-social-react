import React from 'react';
import styles from './Sidebar.module.css';

const Friends = (props) => {
  return(
    <div className={styles.friendsWrapper}>
      <div>
        <img src="https://icdn5.digitaltrends.com/image/screen-shot-2019-02-15-at-19-16-58-720x720.jpg" alt="friend1"/>
        <br/>
        Alex
      </div>
      <div>
        <img src="https://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/prototypen/m_unsexy_gr.jpg" alt="friend2"/>
        <br/>
        John
      </div>
      <div>
        <img src="https://i2-prod.mirror.co.uk/incoming/article14334083.ece/ALTERNATES/s615/3_Beautiful-girl-with-a-gentle-smile.jpg" alt="friend3"/>
        <br/>
        Kate
      </div>
    </div>
  )
}

export default Friends;