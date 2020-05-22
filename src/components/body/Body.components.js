import React from "react";
import "./body.styles.scss";

import ProjectTab from "../projectTab/ProjectTab.component";
import Skills from "../skills/Skills.component";

const Body = () => {
	return (
		<div className="body">
			<Skills />
			<ProjectTab
				skills="React"
				title="title1"
				desc="lorem ipsum lorem abcd fgjsoe"
				tier="1 - Beginner"
				collection="Api"
			/>

			<ProjectTab
				skills="React"
				title="title1"
				desc="lorem ipsum lorem abcd fgjsoe"
				tier="1 - Beginner"
				collection="Api"
			/>
			<ProjectTab
				skills="React"
				title="title1"
				desc="lorem ipsum lorem abcd fgjsoe"
				tier="1 - Beginner"
				collection="Api"
			/>
			<ProjectTab
				skills="React"
				title="title1"
				desc="lorem ipsum lorem abcd fgjsoe"
				tier="1 - Beginner"
				collection="Api"
			/>
			<ProjectTab
				skills="React"
				title="title1"
				desc="lorem ipsum lorem abcd fgjsoe"
				tier="1 - Beginner"
				collection="Api"
			/>
		</div>
	);
};

export default Body;
