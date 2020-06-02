import React from "react";
import ReduxIcon from "../../reduxIcon.svg";
import "./skills.styles.scss";

const Skills = () => {
	return (
		<div className="skills">
			<i className="fab fa-js-square"></i>
			<i className="fab fa-react"></i>
			<i className="fab fa-node"></i>
			<i className="fab fa-sass"></i>
			<img src={ReduxIcon} alt="" />
		</div>
	);
};

export default Skills;
