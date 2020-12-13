import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MessageInputField from './MessageInputField';
import MessageList from "./MessageList";

const useStyle = makeStyles({
	root: {
		display: "grid",
		height: "100vh",
		gridTemplateRows: "1fr auto",
	},
});
const Main = ({ name }) => {
	const classes = useStyle();
	return (
		<div className={classes.root}>
			<MessageList />
			<MessageInputField name={name} />
		</div>
	);
};

export default Main;
