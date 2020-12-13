import React, { useState } from 'react'
import { Avatar, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {gravatarPath} from '../gravatar';
import MessageField from './MessageField'

const useStyle = makeStyles({
  root: {
    gridRow: 2,
  },
});
const MessageInputField = ({name}) => {
  const [text, setText] = useState('');
  const classes = useStyle();
  const avatarPath = gravatarPath(name);
  console.log(name);
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid xs={1}><Avatar src={avatarPath}/></Grid>
        <Grid xs={10}> <MessageField name={name} setText={setText} text={text} /> </Grid>
        <Grid xs={1}>ボタン</Grid>
      </Grid>
    </div>
  );
};

export default MessageInputField;
