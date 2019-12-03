import React from 'react';
import styles from './Sidebar.module.css';
import {NavLink} from 'react-router-dom';
import Friends from './Friends';

const Sidebar = () => {
  return (
    <div>
        <nav className={styles.sideBar}>
            <div className={styles.active}>
              <NavLink to="./profile" activeClassName={styles.activeLink}>Profile</NavLink>
            </div>
            <div>
              <NavLink to="./dialogs" activeClassName={styles.activeLink}>Messages</NavLink>
            </div>
            <div>
              <NavLink to="./news" activeClassName={styles.activeLink}>News</NavLink>
            </div>
            <div>
              <NavLink to="./music" activeClassName={styles.activeLink}>Music</NavLink>
            </div>
            <div>
              <NavLink to="./settings" activeClassName={styles.activeLink}>Settings</NavLink>
            </div>
        </nav>
        <Friends />
    </div>
          )
}

export default Sidebar;