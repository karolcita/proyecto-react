import React from "react";
import PropTypes from "prop-types";



const Propiedades = (props) => {
    return (
        <div>
            <h2> Propiedades de un componente </h2>
            <ul>
                <li>{props.cadena} </li>
                <li>{props.numero} </li>
                <li>{props.booleano ? 'Verdadero':'Falso'} </li>
                <li>{props.arreglo.join(', ')} </li>
                <li>{props.objeto.nombre + " " + props.objeto.apellido}  </li>
                <li>{props.elementoReact} </li>
                <li>{props.componenteReact} </li>
            </ul>
        </div>
        
    )
}

Propiedades.propTypes = {
    numero: PropTypes.number.isRequired
}

export default Propiedades;