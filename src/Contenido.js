import React from "react";
import ReactDOM from "react-dom";




class Contenido extends React.Component{
    	state={
      		value:"",    		
    	}		



	render(){
		return(
			<div className="container">
              <input onChange={e => this.setState({value: e.target.value})}/> &nbsp; &nbsp;
              <button onClick={() => this.setState({value: this.state.value})}> Agregar</button>
              <br />
              {this.agregarContenido}
              <br />
            </div>
			);
	}
}


export default Contenido;
