import React from "react";
import ReactDOM from "react-dom";
import ListaItem from "./ListaItem";


class Contenido extends React.Component{
  constructor(props) {
    super(props);
    this.state={
		items: [],
		currentItem:{
			text:'',
			key:''
		}
	}
	this.handleInput = this.handleInput.bind(this);
	this.addItem = this.addItem.bind(this);
	this.borrarItem = this.borrarItem.bind(this);
  }

	handleInput(e){
		this.setState({
			currentItem:{
				text: e.target.value,
				key: Date.now()
			}
		})
	}

	addItem(e){
		e.preventDefault();
		const newItem = this.state.currentItem;
		if(newItem.text!==""){
			const newItems=[...this.state.items, newItem];
			this.setState({
				items: newItems, 
				currentItem:{
					text:'',
					key:''	
				}
			})
		}	

	}

	borrarItem(key){
		//alert("borrar" + e + this.state.items);
		const borraItem = this.state.items.filter(item => item.key!==key);
		this.setState({items:borraItem})
	}


	render(){
			return(
				<div className="container">
				  <form id="formulario" onSubmit={this.addItem}>
	              <input type="text" placeholder="Ingrese su tarea" value={this.state.currentItem.text} onChange={this.handleInput}/> &nbsp; &nbsp;	                     
	              <br />
	              <br />
	              </form>
	              <ListaItem items={this.state.items} 
	              borrarItem={this.borrarItem}> </ListaItem>
	            </div>
				);
		}



}


export default Contenido;
