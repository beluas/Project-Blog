import React from "react";
import "./body.styles.scss";

import ProjectTab from "../projectTab/ProjectTab.component";
import Skills from "../skills/Skills.component";

class Body extends React.Component {
	state = {
		elementHovered: false,
	};

	handleHover = () => {
		this.setState({ elementHovered: true });
	};

	render() {
		return (
			<div className="body">
				<Skills />
				<ProjectTab
					skills="React"
					title="Title1"
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
	}
}

export default Body;
