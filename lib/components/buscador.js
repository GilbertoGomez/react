import React from "react";

export default class Buscador extends React.Component {
	handleSubmit(e) {
		e.preventDefault();

		let cartas = {
			nombre: e.target.nombre.value,
			imagen: ""
		}

		return this.props.onaddCarta(cartas);
	}

	render() {
		return (
			<div className="Search" >
				<form onSubmit={ this.handleSubmit.bind(this) } >
					<input className="Search-input" type="text" placeholder="Nombre" name="nombre" />
					<input className="Search-button" type="submit" value="Buscar"/>
				</form>
			</div>
		)
	}
}
