import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogerItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialoger}>
      <NavLink to={path}>
        <img src="http://a09ca00253347c8e4b18-4b9b9fc3a1ea9e40c69b05dd7200cff5.r1.cf2.rackcdn.com/7785250_0_ef9c369582cbeca4e124201b5829dfe0.jpg" alt="ava" />
        {props.name}      
      </NavLink>        
    </div>
  )
}



export default DialogerItem;