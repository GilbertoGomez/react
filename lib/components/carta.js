import React from "react";

export default class Carta extends React.Component {

	render() {
		return (
			<div className="Card">
				<div className="Card-container">
					<h2 className="Card-name"> { this.props.nombre } </h2>
					<img className="Card-image" src={this.props.imagen}  />
				</div>
				<div className="Card-description">
					<p> { this.props.description } </p>
				</div>
			</div>
		)
	}
}
