import React, {useState} from "react";
import ReactDOM from "react-dom";




class Contenido extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    	value: ""
        }
  	this.addItem = this.addItem.bind(this);
  	this.cerrar = this.cerrar.bind(this);
    //this.onClick = this.onClick.bind(this);
    this.state.lista = ["Tareas", "ordenar", "limpiar", "lavar"];
    this.state.armado_lista = this.state.lista.map((state) => <li>{state}<span className="close" onClick={this.cerrar}>x</span></li>);

  }

  	addItem = (e) => {
  		this.state.guarda_ingreso=[this.state.value];
  		this.state.agrega_ingreso= this.state.guarda_ingreso.map(() => <li>{this.state.value}<span className="close" onClick={this.cerrar}>x</span></li>);
  		this.state.muestra_ingreso=[this.state.agrega_ingreso.concat()];
  		this.setState({value: this.state.muestra_ingreso}); 
  }

	cerrar(){
		//alert("borrar");

		this.state.lista.splice(this.state.value, -1);
		//const newList = this.state.list.splice(this.state.list.indexOf(value), 1);
	}
	render(){
		return(
			<div className="container">
              <input onChange={e => this.setState({value: e.target.value})}/> &nbsp; &nbsp;
              <button onClick={this.addItem}> Agregar</button>            
              <br />
              <br />
              <ul>
              	{this.state.armado_lista}
              	{this.state.value}
              </ul>
              <br />
            </div>
			);
	}
}


export default Contenido;
