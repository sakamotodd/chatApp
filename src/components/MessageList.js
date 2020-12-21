import React, { useEffect, useState } from 'react';
import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { messagesRef } from '../firebase';
import MessageItem from './MessageItem';

const useStyle = makeStyles({
  root: {
    gridRow: 1,
    overflow: 'auto',
    width: '100%',
  },
});

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const classes = useStyle();
  useEffect(() => {
    console.log('useEffect');
    messagesRef
      .orderByKey()
      .limitToLast(15)
      .on('value', (snapshot) => {
        const messages = snapshot.val();
        if (messages === null) return;
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

  const length = messages.length;

  return (
    <List className={classes.root}>
      {messages.map(({ key, name, text }, index) => {
        const isLastItem = length === index + 1;

        return (
          <MessageItem
            key={key}
            name={name}
            text={text}
            isLastItem={isLastItem}
          />
        );
      })}
    </List>
  );
};

export default MessageList;
