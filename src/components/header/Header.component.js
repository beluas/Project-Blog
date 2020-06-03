import React from "react";
import "./header.styles.scss";
import profilePicture from "../../portfolioImg.png";
import Skills from "../skills/Skills.component";

const Header = () => {
	return (
		<div className="header">
			<h1>Hello, I'm Ivan.</h1>
			<p>
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

			<Skills />

			<nav>
				<li>
					<span className="number">01</span>{" "}
					<span className="line"></span>
					<a href="#latest">Latest</a>
				</li>
				<li>
					<span className="number">02</span>{" "}
					<span className="line"></span>
					<a href="#greatest">Greatest </a>
				</li>
				<li>
					<span className="number">03</span>{" "}
					<span className="line"></span>
					<a href="#other-projects">Projects</a>
				</li>
			</nav>

			<div className="social">
				<img src={profilePicture} alt="portfolio-pic" />
				<span>
					<a href="https://github.com/beluas">
						<i className="fab fa-github"></i> <span>GitHub</span>
						<i className="fas fa-external-link-alt"></i>
					</a>
				</span>

				<span>
					<a href="https://www.linkedin.com/in/ivan-maddaluno/">
						<i className="fab fa-linkedin"></i>{" "}
						<span>LinkedIn</span>
						<i className="fas fa-external-link-alt"></i>
					</a>
				</span>
			</div>
		</div>
	);
};

export default Header;
