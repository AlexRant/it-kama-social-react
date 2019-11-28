import React from 'react';
import s from './Dialogs.module.css';
import DialogerItem from './DialogItem/DialogerItem';
import MessageItem from './MessageItem/MessageItem';
// import {speakers} from '../../index';
 

const Dialogs = (props) => {

// let speakers = [
//   {id: 1, name: "Alex", message: "What's up guys?"},
//   {id: 2, name: "Kate", message: "Who are you?"},
//   {id: 3, name: "Phill", message: "I'm newby here."},
//   {id: 4, name: "Ben", message: "Will it be anything interesting here?"},
//   {id: 5, name: "Ann", message: "Hello everybody, let's start the party!"},
// ]
//can recieve this data through props

let dialogsElements = props.speakers.map( dialoger => <DialogerItem name={dialoger.name} id={dialoger.id} /> );
let messageElements = props.speakers.map( message => <MessageItem message={message.message} /> );

  return (
    <div className={s.dialogs}>
      <div>

        { dialogsElements }
      
      </div>
      <div className={s.messages}>

        { messageElements }
        
      </div>
    </div>
  )
}

export default Dialogs;