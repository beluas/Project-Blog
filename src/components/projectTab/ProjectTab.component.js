import React from "react";
import "./projectTab.styles.scss";

const projectTab = ({ skills, title, desc, tier, collection, link }) => {
	return (
		<>
			<a href={link}>
				<div className="project-tab">
					<h5>{skills.toUpperCase()}</h5>
					<h2>{title}</h2>
					<p>{desc}</p>
					<h5>
						{tier} - {collection}
					</h5>
				</div>
			</a>
		</>
	);
};

export default projectTab;
