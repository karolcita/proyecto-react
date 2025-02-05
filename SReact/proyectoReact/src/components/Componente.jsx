//{Component} estamos extrayendo el componente Component de react
import React, {Component} from "react";

// class Componente extends Component{
//     render(){
//         return <h2>{this.props.msj} </h2>;
//     }
// }

const Componente = (props) => <h2> {props.msj} </h2>


export default Componente;