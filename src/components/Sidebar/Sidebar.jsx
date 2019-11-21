import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return <nav className={styles.sideBar}>
            <div><a href="#" className={styles.active}>Profile</a></div>
            <div><a href="#">Messages</a></div>
            <div><a href="#">News</a></div>
            <div><a href="#">Music</a></div>
            <div><a href="#">Settings</a></div>
          </nav>
}

export default Sidebar;