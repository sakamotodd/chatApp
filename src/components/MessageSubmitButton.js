import React from 'react';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { pushMessage } from '../firebase';

const MessageSubmitButton = ({ inputEL, name, setText, text }) => {
  return (
    <IconButton disabled={text === ''} onClick={() => {
        pushMessage({name, text});
        setText('');
        inputEL.current.focus();
    }}>
      <SendIcon />
    </IconButton>
  );
};

export default MessageSubmitButton;
