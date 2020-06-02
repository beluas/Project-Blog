import React from "react";
import "./body.styles.scss";

import ProjectTab from "../projectTab/ProjectTab.component";
import { projects } from "../../projects.data";

class Body extends React.Component {
	render() {
		return (
			<div className="body">
				<div className="overlay" />
				<h3 id="latest">Latest</h3>

				{projects.slice(0, 3).map((project) => (
					<ProjectTab {...project} />
				))}

				<h3 id="greatest">Greatest</h3>
				{projects
					.filter((el) => el.greatest)
					.map((project) => (
						<ProjectTab {...project} />
					))}
				<h3 id="other-projects">Other Projects</h3>

				{projects
					.filter((el) => !el.greatest)
					.slice(1)
					.map((project) => (
						<ProjectTab {...project} />
					))}
			</div>
		);
	}
}

export default Body;
