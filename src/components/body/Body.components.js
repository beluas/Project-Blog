import React from "react";
import "./body.styles.scss";

import ProjectTab from "../projectTab/ProjectTab.component";
import { projects } from "../../projects.data";

class Body extends React.Component {
	render() {
		return (
			<div className="body">
				<div className="overlay" />
				<h2 id="latest">Latest</h2>

				{projects.slice(0, 3).map((project) => (
					<ProjectTab {...project} />
				))}

				<h2 id="greatest">Greatest</h2>
				{projects
					.filter((el) => el.greatest)
					.map((project) => (
						<ProjectTab {...project} />
					))}
				<h2 id="other-projects">Other Projects</h2>

				{projects
					.filter((el) => !el.greatest)
					.slice(2, projects.length)
					.map((project) => (
						<ProjectTab {...project} />
					))}
			</div>
		);
	}
}

export default Body;
