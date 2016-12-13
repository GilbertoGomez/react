import React from "react";
import Buscador from "./buscador";
import ListaCartas from "./listaCartas";

export default class layout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cartas: [ ]
		}
	}
	superSubmit(nuevo) {
		api.searchCharacter(nuevo.nombre)
			.then((response) => {
	        return response
	      })
	      .then((cartas) => {
	      	if (cartas){
	      		var cartas = [{nombre: cartas.name , description:cartas.description , imagen: cartas.thumbnail.path + "." + cartas.thumbnail.extension } ]
	        	this.setState( {cartas: this.state.cartas.concat( cartas )}  )
	      	}else{
	      		var popup = document.getElementById('popup');
	      		popup.classList.toggle('show');

	      	}

				})
	}
	render() {
		return (
				<div >
					<div>
							<Buscador onaddCarta={ this.superSubmit.bind(this) } />
					</div>
					<div className="main">
							<ListaCartas cartas={this.state.cartas} />
					</div>
				</div>
		)
	}
}
