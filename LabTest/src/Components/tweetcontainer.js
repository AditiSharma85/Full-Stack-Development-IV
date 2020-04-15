import React from "react";
import Comment from "./comment";

const TweetContainer = props => {
	return (
		<div className="App">
		<h3>{props.status}</h3>
		<Comment/>
		</div>
		);
};

export default TweetContainer;