import React, { Component } from "react";
import Header from "./components/header/Header.component";
import Body from "./components/body/Body.components";

class App extends Component {
	render() {
		return (
			<div className="container">
				<Header />
				<Body />
			</div>
		);
	}
}

export default App;
