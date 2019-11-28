import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogerItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialoger}>
      <NavLink to={path}>{props.name}</NavLink>        
    </div>
  )
}



export default DialogerItem;