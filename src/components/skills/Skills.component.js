import React from "react";
import ReduxIcon from "../../reduxIcon.svg";
import "./skills.styles.scss";

const Skills = () => {
	return (
		<div className="skills">
			<i class="fab fa-js-square"></i>
			<i class="fab fa-react"></i>
			<i class="fab fa-node"></i>
			<i class="fab fa-sass"></i>
			<img src={ReduxIcon} alt="" />
		</div>
	);
};

export default Skills;
