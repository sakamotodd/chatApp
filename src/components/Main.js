import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MessageInputFild from "./MessageInputFild";
import MessgeList from "./MessgeList";

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
			<MessgeList />
			<MessageInputFild name={name} />
		</div>
	);
};

export default Main;
