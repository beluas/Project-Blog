import React from "react";
import "./projectTab.styles.scss";

const projectTab = ({ skills, title, desc, tier, collection }) => {
	return (
		<div className="project-tab">
			<h5>{skills.toUpperCase()}</h5>
			<h2>{title}</h2>
			<p>{desc}</p>
			<h5>
				{tier} - {collection}
			</h5>
		</div>
	);
};

export default projectTab;
