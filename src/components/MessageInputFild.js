import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyle =  makeStyles({
  root: {
    gridRow: 2,
  },
});
const MessageInputFild = () => {
  const classes = useStyle();
  return <div className={classes.root}>MessageInputFild</div>
};

export default MessageInputFild;
