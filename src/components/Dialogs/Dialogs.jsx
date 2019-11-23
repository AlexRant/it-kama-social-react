import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div>
        <div className={s.dialoger}>
          <NavLink to="/dialogs/1">Alex</NavLink>        
        </div>
        <div className={s.dialoger}>
          <NavLink to="/dialogs/2">Phill</NavLink>
        </div>
        <div className={s.dialoger}>
          <NavLink to="/dialogs/3">Ben</NavLink>       
        </div>
        <div className={s.dialoger}>
          <NavLink to="/dialogs/4">Kate</NavLink>        
        </div>
        <div className={s.dialoger}>
          <NavLink to="/dialogs/5">Ann</NavLink>       
        </div>
      </div>
      <div className={s.messages}>
        <div>What's up guys?</div>
        <div>Who are you</div>
        <div>I'm newby here.</div>
        <div>Will it be anything interesting here?</div>
      </div>
    </div>
  )
}

export default Dialogs;