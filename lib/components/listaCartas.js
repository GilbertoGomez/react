import React from "react";
import Carta from "./carta";

export default class listaCartas extends React.Component {
	
	render() {
		return  (
			<div className="Principal">
					{
						this.props.cartas.map( (carta,i) => {
							return ( <Carta
									key={i}
									nombre={carta.nombre}
									imagen={carta.imagen}
							/>)
						})
					}
			</div>
		)
	}
}
