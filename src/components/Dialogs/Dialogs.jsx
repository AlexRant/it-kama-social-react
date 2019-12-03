import React from 'react';
import s from './Dialogs.module.css';
import DialogerItem from './DialogItem/DialogerItem';
import MessageItem from './MessageItem/MessageItem';
// import {speakers} from '../../index';
 

const Dialogs = (props) => {

  let newDialogText = React.createRef();
  
  const popUpAlert = () => {
    let popUpText = newDialogText.current.value;
    // alert(popUpText);
    console.log(popUpText);
  }

// recieve data through props from index.js

  let dialogsElements = props.speakers.map( dialoger => <DialogerItem name={dialoger.name} id={dialoger.id} /> );
  let messageElements = props.speakers.map( message => <MessageItem message={message.message} /> );

  return (
    <div className={s.dialogs}>
      <div>

        { dialogsElements }
      
      </div>
      <div className={s.messages}>

        { messageElements }
        
        <textarea ref={newDialogText}></textarea>
        <button onClick={popUpAlert}>click</button>
      </div>
    </div>
  )
}

export default Dialogs;