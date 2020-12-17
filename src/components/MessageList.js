import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { messagesRef } from '../firebase';

const useStyle = makeStyles({
  root: {
    gridRow: 1,
  },
});

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const classes = useStyle();
 useEffect(() => {
   console.log('useEffect');
  messagesRef
  .orderByKey()
  .limitToLast(3)
  .on('value', (snapshot) => {
    const messages = snapshot.val();
    if(messages === null) return;
    const entries = Object.entries(messages);
    const newMessages = entries.map((entry) => {
      const [key, nameAndText] = entry;
      // const key = entry[0];
      // const nameAndText = entry[1];
      return { key, ...nameAndText };
    });
    console.log(newMessages);
    setMessages(newMessages);
  });
 }, []);
  return <div className={classes.root}>MessageList</div>;
};

export default MessageList;
