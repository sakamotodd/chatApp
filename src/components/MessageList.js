import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
const useStyle =  makeStyles({
  root: {
    gridRow: 1,
  },
});

const MessageList = () => {
  const classes = useStyle();
  return <div className={classes.root}>MessageList</div>
};


export default MessageList;
