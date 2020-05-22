import React from "react";
import "./header.styles.scss";

const Header = () => {
	return (
		<div className="header">
			<h1>Hello, I'm Ivan.</h1>

			<p className="mb5">
				Well who I am ? I'm very bad in introductions then let's keep
				DRY. A Front-End-Developer who loves{" "}
				<span className="skill">React</span> and uses it on daily basis
				together with <span className="skill">Redux</span>,{" "}
				<span className="skill">Redux-saga</span>.{" "}
				<span className="skill">NodeJS</span> and{" "}
				<span className="skill">MongoDb</span> for the Backend and{" "}
				<span className="skill">Jest</span> for unit testing.
				<br />I hope one day to create something revolutionary and very
				useful for people but for now let's do another To-do List. The
				world deserves another one. Right ?
			</p>

			<nav>
				<li>Latest</li>
				<li>Projects</li>
				<li>Huge projects</li>
			</nav>

			<div className="details">
				<img src="#" alt="portfolio-pic" />
				<span>I GitHub</span>
				<span>I LinkedIn</span>
			</div>
		</div>
	);
};

export default Header;
